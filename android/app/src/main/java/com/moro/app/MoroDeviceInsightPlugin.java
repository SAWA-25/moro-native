package com.moro.app;

import android.Manifest;
import android.app.AppOpsManager;
import android.app.usage.UsageEvents;
import android.app.usage.UsageStats;
import android.app.usage.UsageStatsManager;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.net.ConnectivityManager;
import android.net.Network;
import android.net.NetworkCapabilities;
import android.os.BatteryManager;
import android.os.Build;
import android.os.Process;
import android.provider.Settings;

import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

@CapacitorPlugin(name = "MoroDeviceInsight")
public class MoroDeviceInsightPlugin extends Plugin {
    private static final long MINUTE_MS = 60_000L;

    @PluginMethod
    public void getStatus(PluginCall call) {
        JSObject ret = baseStatus();
        ret.put("usageAccessGranted", hasUsageAccess());
        ret.put("canOpenUsageAccessSettings", true);
        call.resolve(ret);
    }

    @PluginMethod
    public void openUsageAccessSettings(PluginCall call) {
        try {
            Intent intent = new Intent(Settings.ACTION_USAGE_ACCESS_SETTINGS);
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            getContext().startActivity(intent);
            call.resolve();
        } catch (Exception e) {
            try {
                Intent fallback = new Intent(Settings.ACTION_SETTINGS);
                fallback.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                getContext().startActivity(fallback);
                call.resolve();
            } catch (Exception inner) {
                call.reject("无法打开使用情况访问权限设置", inner);
            }
        }
    }

    @PluginMethod
    public void getUsageSnapshot(PluginCall call) {
        if (!hasUsageAccess()) {
            call.reject("请先在系统设置里允许 Moro 访问使用情况", "USAGE_ACCESS_REQUIRED");
            return;
        }

        Context context = getContext();
        JSObject data = call.getData();
        long now = System.currentTimeMillis();
        long rangeEnd = data.has("rangeEnd") ? data.optLong("rangeEnd", now) : now;
        long rangeStart = data.has("rangeStart") ? data.optLong("rangeStart", startOfToday(now)) : startOfToday(now);
        if (rangeEnd <= rangeStart) {
            rangeEnd = now;
            rangeStart = Math.max(now - 6L * 60L * MINUTE_MS, startOfToday(now));
        }
        int limit = Math.max(3, Math.min(24, data.optInt("limit", 12)));

        UsageStatsManager usage = (UsageStatsManager) context.getSystemService(Context.USAGE_STATS_SERVICE);
        JSObject ret = baseStatus();
        ret.put("usageAccessGranted", true);
        ret.put("capturedAt", now);
        ret.put("rangeStart", rangeStart);
        ret.put("rangeEnd", rangeEnd);
        ret.put("batteryLevel", batteryLevel());
        ret.put("isCharging", isCharging());
        ret.put("networkLabel", networkLabel());
        ret.put("deviceLabel", deviceLabel());

        List<AppUsageRow> rows = queryAppUsage(usage, rangeStart, rangeEnd, limit);
        ForegroundInfo foreground = queryForegroundInfo(usage, Math.max(rangeStart, now - 12L * 60L * MINUTE_MS), rangeEnd);
        JSObject currentApp = appInfoToJson(foreground.currentPackageName, rows);
        JSObject lastExternalApp = appInfoToJson(foreground.lastExternalPackageName, rows);
        if (currentApp != null) ret.put("currentForegroundApp", currentApp);
        if (lastExternalApp != null) ret.put("lastExternalApp", lastExternalApp);
        ret.put("unlockCount", foreground.screenInteractiveCount);

        JSArray appUsage = new JSArray();
        int screenTimeMinutes = 0;
        for (AppUsageRow row : rows) {
            screenTimeMinutes += row.durationMinutes;
            appUsage.put(row.toJson(context.getPackageName()));
        }
        ret.put("screenTimeMinutes", screenTimeMinutes);
        ret.put("appUsage", appUsage);
        call.resolve(ret);
    }

    private JSObject baseStatus() {
        JSObject ret = new JSObject();
        ret.put("native", true);
        ret.put("platform", "android");
        ret.put("packageName", getContext().getPackageName());
        return ret;
    }

    private boolean hasUsageAccess() {
        Context context = getContext();
        try {
            AppOpsManager appOps = (AppOpsManager) context.getSystemService(Context.APP_OPS_SERVICE);
            int mode;
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                mode = appOps.unsafeCheckOpNoThrow(AppOpsManager.OPSTR_GET_USAGE_STATS, Process.myUid(), context.getPackageName());
            } else {
                mode = appOps.checkOpNoThrow(AppOpsManager.OPSTR_GET_USAGE_STATS, Process.myUid(), context.getPackageName());
            }
            if (mode == AppOpsManager.MODE_ALLOWED) return true;
            if (mode == AppOpsManager.MODE_DEFAULT) {
                return context.checkCallingOrSelfPermission(Manifest.permission.PACKAGE_USAGE_STATS) == PackageManager.PERMISSION_GRANTED;
            }
        } catch (Exception ignored) {
            return false;
        }
        return false;
    }

    private long startOfToday(long now) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTimeInMillis(now);
        calendar.set(Calendar.HOUR_OF_DAY, 0);
        calendar.set(Calendar.MINUTE, 0);
        calendar.set(Calendar.SECOND, 0);
        calendar.set(Calendar.MILLISECOND, 0);
        return calendar.getTimeInMillis();
    }

    private List<AppUsageRow> queryAppUsage(UsageStatsManager usage, long start, long end, int limit) {
        Map<String, AppUsageRow> merged = new HashMap<>();
        if (usage == null) return new ArrayList<>();
        List<UsageStats> stats = usage.queryUsageStats(UsageStatsManager.INTERVAL_DAILY, start, end);
        if (stats == null) return new ArrayList<>();
        for (UsageStats stat : stats) {
            if (stat == null || stat.getPackageName() == null) continue;
            long durationMs = Math.max(0L, stat.getTotalTimeInForeground());
            int minutes = (int) Math.max(0, Math.round((double) durationMs / (double) MINUTE_MS));
            if (minutes <= 0) continue;
            AppUsageRow row = merged.get(stat.getPackageName());
            if (row == null) {
                row = new AppUsageRow(stat.getPackageName());
                merged.put(stat.getPackageName(), row);
            }
            row.durationMinutes += minutes;
            row.lastTimeUsed = Math.max(row.lastTimeUsed, stat.getLastTimeUsed());
        }
        List<AppUsageRow> rows = new ArrayList<>(merged.values());
        Collections.sort(rows, (a, b) -> {
            int byDuration = Integer.compare(b.durationMinutes, a.durationMinutes);
            return byDuration != 0 ? byDuration : Long.compare(b.lastTimeUsed, a.lastTimeUsed);
        });
        if (rows.size() > limit) rows = new ArrayList<>(rows.subList(0, limit));
        PackageManager pm = getContext().getPackageManager();
        long boundedEnd = Math.max(start, end);
        for (AppUsageRow row : rows) {
            row.appName = labelForPackage(pm, row.packageName);
            row.isSystem = isSystemPackage(pm, row.packageName);
            long durationMs = row.durationMinutes * MINUTE_MS;
            row.endedAt = row.lastTimeUsed > 0 ? Math.min(boundedEnd, Math.max(start, row.lastTimeUsed)) : boundedEnd;
            row.startedAt = Math.max(start, row.endedAt - durationMs);
        }
        return rows;
    }

    private ForegroundInfo queryForegroundInfo(UsageStatsManager usage, long start, long end) {
        ForegroundInfo info = new ForegroundInfo();
        if (usage == null) return info;
        UsageEvents events = usage.queryEvents(start, end);
        if (events == null) return info;
        UsageEvents.Event event = new UsageEvents.Event();
        String ownPackage = getContext().getPackageName();
        while (events.hasNextEvent()) {
            events.getNextEvent(event);
            int type = event.getEventType();
            if (isForegroundEvent(type)) {
                String pkg = event.getPackageName();
                if (pkg == null || pkg.trim().isEmpty()) continue;
                info.currentPackageName = pkg;
                if (!ownPackage.equals(pkg)) {
                    info.lastExternalPackageName = pkg;
                }
            } else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P && type == UsageEvents.Event.SCREEN_INTERACTIVE) {
                info.screenInteractiveCount += 1;
            }
        }
        return info;
    }

    private boolean isForegroundEvent(int type) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q && type == UsageEvents.Event.ACTIVITY_RESUMED) return true;
        return type == UsageEvents.Event.MOVE_TO_FOREGROUND;
    }

    private JSObject appInfoToJson(String packageName, List<AppUsageRow> rows) {
        if (packageName == null || packageName.trim().isEmpty()) return null;
        PackageManager pm = getContext().getPackageManager();
        AppUsageRow matched = null;
        for (AppUsageRow row : rows) {
            if (packageName.equals(row.packageName)) {
                matched = row;
                break;
            }
        }
        JSObject ret = new JSObject();
        ret.put("packageName", packageName);
        ret.put("appName", matched != null ? matched.appName : labelForPackage(pm, packageName));
        ret.put("isSystem", matched != null ? matched.isSystem : isSystemPackage(pm, packageName));
        ret.put("isMoro", getContext().getPackageName().equals(packageName));
        if (matched != null) {
            ret.put("durationMinutes", matched.durationMinutes);
            ret.put("lastTimeUsed", matched.lastTimeUsed);
            ret.put("startedAt", matched.startedAt);
            ret.put("endedAt", matched.endedAt);
        }
        return ret;
    }

    private String labelForPackage(PackageManager pm, String packageName) {
        try {
            ApplicationInfo info = pm.getApplicationInfo(packageName, 0);
            CharSequence label = pm.getApplicationLabel(info);
            if (label != null && label.length() > 0) return label.toString();
        } catch (Exception ignored) {
        }
        return packageName;
    }

    private boolean isSystemPackage(PackageManager pm, String packageName) {
        try {
            ApplicationInfo info = pm.getApplicationInfo(packageName, 0);
            return (info.flags & ApplicationInfo.FLAG_SYSTEM) != 0;
        } catch (Exception ignored) {
            return false;
        }
    }

    private int batteryLevel() {
        try {
            BatteryManager bm = (BatteryManager) getContext().getSystemService(Context.BATTERY_SERVICE);
            int level = bm.getIntProperty(BatteryManager.BATTERY_PROPERTY_CAPACITY);
            return Math.max(0, Math.min(100, level));
        } catch (Exception ignored) {
            return -1;
        }
    }

    private boolean isCharging() {
        try {
            Intent battery = getContext().registerReceiver(null, new IntentFilter(Intent.ACTION_BATTERY_CHANGED));
            int plugged = battery != null ? battery.getIntExtra(BatteryManager.EXTRA_PLUGGED, 0) : 0;
            return plugged == BatteryManager.BATTERY_PLUGGED_AC
                || plugged == BatteryManager.BATTERY_PLUGGED_USB
                || plugged == BatteryManager.BATTERY_PLUGGED_WIRELESS;
        } catch (Exception ignored) {
            return false;
        }
    }

    private String networkLabel() {
        try {
            ConnectivityManager cm = (ConnectivityManager) getContext().getSystemService(Context.CONNECTIVITY_SERVICE);
            Network network = cm.getActiveNetwork();
            if (network == null) return "离线";
            NetworkCapabilities caps = cm.getNetworkCapabilities(network);
            if (caps == null) return "未知网络";
            if (caps.hasTransport(NetworkCapabilities.TRANSPORT_WIFI)) return "Wi-Fi";
            if (caps.hasTransport(NetworkCapabilities.TRANSPORT_CELLULAR)) return "移动数据";
            if (caps.hasTransport(NetworkCapabilities.TRANSPORT_VPN)) return "VPN";
            if (caps.hasTransport(NetworkCapabilities.TRANSPORT_ETHERNET)) return "以太网";
        } catch (Exception ignored) {
        }
        return "未知网络";
    }

    private String deviceLabel() {
        String manufacturer = Build.MANUFACTURER == null ? "" : Build.MANUFACTURER.trim();
        String model = Build.MODEL == null ? "" : Build.MODEL.trim();
        String label = (manufacturer + " " + model).trim();
        return label.isEmpty() ? "Android 手机" : label;
    }

    private static final class ForegroundInfo {
        String currentPackageName;
        String lastExternalPackageName;
        int screenInteractiveCount = 0;
    }

    private static final class AppUsageRow {
        final String packageName;
        String appName;
        boolean isSystem;
        int durationMinutes = 0;
        long lastTimeUsed = 0L;
        long startedAt = 0L;
        long endedAt = 0L;

        AppUsageRow(String packageName) {
            this.packageName = packageName;
        }

        JSObject toJson(String ownPackage) {
            JSObject ret = new JSObject();
            ret.put("packageName", packageName);
            ret.put("appName", appName != null ? appName : packageName);
            ret.put("durationMinutes", durationMinutes);
            ret.put("lastTimeUsed", lastTimeUsed);
            ret.put("startedAt", startedAt);
            ret.put("endedAt", endedAt);
            ret.put("isSystem", isSystem);
            ret.put("isMoro", ownPackage.equals(packageName));
            ret.put("category", "real_phone");
            ret.put("note", String.format(Locale.US, "今日使用约 %d 分钟", durationMinutes));
            return ret;
        }
    }
}
