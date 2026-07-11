package com.moro.app;

import android.app.Activity;
import android.content.SharedPreferences;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;

import androidx.annotation.NonNull;
import androidx.core.content.pm.PackageInfoCompat;

import com.capacitorjs.liveupdates.LiveUpdateConfig;
import com.getcapacitor.Bridge;
import com.getcapacitor.JSObject;
import com.getcapacitor.Logger;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginConfig;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.util.InternalUtils;

import org.json.JSONException;

import java.io.File;
import java.io.IOException;

import io.ionic.liveupdates.LiveUpdate;
import io.ionic.liveupdates.LiveUpdateManager;
import io.ionic.liveupdates.data.model.FailResult;
import io.ionic.liveupdates.data.model.FailStep;
import io.ionic.liveupdates.data.model.SyncResult;
import io.ionic.liveupdates.network.ProgressCallback;

@CapacitorPlugin(name = "MoroLiveUpdates")
public class MoroLiveUpdatesPlugin extends Plugin {
    private static final String LAST_BINARY_VERSION_CODE = "lastBinaryVersionCode";
    private static final String LAST_BINARY_VERSION_NAME = "lastBinaryVersionName";
    private static final String PREFS_NAME = "liveUpdatesPreferences";
    private static final String CONFIG_KEY_NAME = "liveUpdatesConfig";

    private LiveUpdateConfig staticConfig;
    private LiveUpdateConfig config;
    private SharedPreferences prefs;
    private JSObject configJson = new JSObject();
    private String initError = "";

    @Override
    public void load() {
        prefs = getContext().getSharedPreferences(PREFS_NAME, Activity.MODE_PRIVATE);
        try {
            init(getBridge().getConfig().getPluginConfiguration("LiveUpdates"));
        } catch (Exception error) {
            initError = error.getMessage() == null ? error.toString() : error.getMessage();
            Logger.error("MoroLiveUpdates failed to initialize", error);
        }
    }

    private void init(PluginConfig pluginConfig) throws JSONException {
        configJson = JSObject.fromJSONObject(pluginConfig.getConfigJSON());
        staticConfig = LiveUpdateConfig.create(pluginConfig);

        if (isNewBinary()) {
            config = staticConfig;
            prefs.edit().remove(CONFIG_KEY_NAME).apply();
        } else {
            String configJsonString = prefs.getString(CONFIG_KEY_NAME, null);
            if (configJsonString != null) {
                try {
                    config = LiveUpdateConfig.create(new JSObject(configJsonString));
                    configJson = new JSObject(configJsonString);
                } catch (Exception error) {
                    prefs.edit().remove(CONFIG_KEY_NAME).apply();
                    config = staticConfig;
                }
            } else {
                config = staticConfig;
            }
        }

        LiveUpdateManager.initialize(getContext());
        registerLiveUpdateInstance();
    }

    private void registerLiveUpdateInstance() {
        if (config == null || config.getAppId() == null || config.getAppId().isEmpty()) return;
        if (!config.isEnabled()) return;

        String urlToken = config.getUrlToken();
        if (urlToken != null) {
            LiveUpdateManager.setCustomUrl(getContext(), urlToken);
        }

        boolean usesSecureLiveUpdates = false;
        String keyFilePath = config.getKey();
        if (keyFilePath != null) {
            int keyFileTrimIndex = keyFilePath.lastIndexOf('/') > -1 ? keyFilePath.lastIndexOf('/') + 1 : 0;
            String keyFileName = keyFilePath.substring(keyFileTrimIndex);
            try {
                getContext().getAssets().open(keyFileName).close();
                LiveUpdateManager.INSTANCE.setSecureLiveUpdatePEM(keyFileName);
                usesSecureLiveUpdates = true;
            } catch (IOException error) {
                initError = "Secure live update public key file not found in assets: " + keyFileName;
                Logger.error(initError, error);
            }
        }

        LiveUpdate liveUpdate = new LiveUpdate(
            config.getAppId(),
            config.getChannel(),
            usesSecureLiveUpdates,
            config.getUpdateStrategy()
        );
        liveUpdate.setAssetPath(Bridge.DEFAULT_WEB_ASSET_DIR);
        if (config.getMaxVersions() != null) {
            LiveUpdateManager.INSTANCE.setMaxVersions(config.getMaxVersions());
        }
        LiveUpdateManager.cleanVersions(getContext(), liveUpdate.getAppId());
        LiveUpdateManager.addLiveUpdateInstance(getContext(), liveUpdate);
    }

    @PluginMethod
    public void getConfig(final PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("appId", config != null ? config.getAppId() : configJson.getString("appId", ""));
        ret.put("channel", config != null ? config.getChannel() : configJson.getString("channel", "Production"));
        ret.put("autoUpdateMethod", config != null ? config.getAutoUpdateMethod() : configJson.getString("autoUpdateMethod", "background"));
        ret.put("maxVersions", config != null ? config.getMaxVersions() : configJson.getInteger("maxVersions", 2));
        ret.put("strategy", config != null && config.getUpdateStrategy() != null ? config.getUpdateStrategy().name().toLowerCase() : configJson.getString("strategy", "differential"));
        ret.put("enabled", config != null ? config.isEnabled() : configJson.getBoolean("enabled", false));
        if (!initError.isEmpty()) ret.put("initError", initError);
        call.resolve(ret);
    }

    @PluginMethod(returnType = PluginMethod.RETURN_CALLBACK)
    public void sync(final PluginCall call) {
        if (config == null) {
            resolveFailure(call, FailStep.CHECK.name(), initError.isEmpty() ? "Moro Live Updates config is unavailable." : initError);
            return;
        }
        if (!config.isEnabled()) {
            resolveFailure(call, FailStep.CHECK.name(), "Live Updates is disabled in the Capacitor config.");
            return;
        }
        if (config.getAppId() == null || config.getAppId().isEmpty()) {
            resolveFailure(call, FailStep.CHECK.name(), "Live Update failed because appId was not provided in the plugin config.");
            return;
        }

        registerLiveUpdateInstance();
        call.setKeepAlive(true);
        LiveUpdateManager.sync(
            getContext(),
            config.getAppId(),
            new ProgressCallback() {
                @Override
                public void onProgress(@NonNull String appId, double progressValue) {
                    JSObject ret = new JSObject();
                    ret.put("progress", progressValue);
                    call.resolve(ret);
                }

                @Override
                public void onAppComplete(@NonNull FailResult failResult) {
                    JSObject ret = new JSObject();
                    ret.put("appId", failResult.getLiveUpdate().getAppId());
                    ret.put("failStep", failResult.getFailStep().name());
                    ret.put("message", "Live Update failed on " + failResult.getFailStep().name() + " step. Reason: " + failResult.getFailMsg());
                    call.resolve(ret);
                    call.release(getBridge());
                }

                @Override
                public void onAppComplete(@NonNull SyncResult syncResult) {
                    JSObject ret = new JSObject();

                    JSObject liveUpdate = new JSObject();
                    liveUpdate.put("appId", syncResult.getLiveUpdate().getAppId());
                    liveUpdate.put("channel", syncResult.getLiveUpdate().getChannelName());
                    ret.put("liveUpdate", liveUpdate);

                    if (syncResult.getSnapshot() == null) {
                        ret.put("snapshot", null);
                    } else {
                        JSObject snapshot = new JSObject();
                        snapshot.put("id", syncResult.getSnapshot().getId());
                        snapshot.put("buildId", syncResult.getSnapshot().getBuildId());
                        ret.put("snapshot", snapshot);
                    }

                    ret.put("source", syncResult.getSource().name().toLowerCase());
                    ret.put("activeApplicationPathChanged", syncResult.getLatestAppDirectoryChanged());
                    persistLatestAppPath();
                    call.resolve(ret);
                    call.release(getBridge());
                }

                @Override
                public void onSyncComplete() {
                    // No-op; per-app callbacks above resolve the kept-alive Capacitor call.
                }
            }
        );
    }

    @PluginMethod
    public void reload(final PluginCall call) {
        setServerBasePath();
        call.resolve();
    }

    private void resolveFailure(PluginCall call, String failStep, String message) {
        JSObject ret = new JSObject();
        ret.put("failStep", failStep);
        ret.put("message", message);
        call.resolve(ret);
    }

    private void persistLatestAppPath() {
        if (config == null || config.getAppId() == null) return;
        File latestApp = LiveUpdateManager.getLatestAppDirectory(getContext(), config.getAppId());
        if (latestApp != null) {
            SharedPreferences webPrefs = getContext().getSharedPreferences(com.getcapacitor.plugin.WebView.WEBVIEW_PREFS_NAME, Activity.MODE_PRIVATE);
            webPrefs.edit().putString(com.getcapacitor.plugin.WebView.CAP_SERVER_PATH, latestApp.getPath()).apply();
        }
    }

    private void setServerBasePath() {
        if (config == null || config.getAppId() == null) return;
        File latestApp = LiveUpdateManager.getLatestAppDirectory(getContext(), config.getAppId());
        if (latestApp != null) {
            bridge.setServerBasePath(latestApp.getPath());
        }
    }

    private boolean isNewBinary() {
        String versionCode = "";
        String versionName = "";
        SharedPreferences webPrefs = getContext().getSharedPreferences(com.getcapacitor.plugin.WebView.WEBVIEW_PREFS_NAME, Activity.MODE_PRIVATE);
        String lastVersionCode = webPrefs.getString(LAST_BINARY_VERSION_CODE, null);
        String lastVersionName = webPrefs.getString(LAST_BINARY_VERSION_NAME, null);

        try {
            PackageManager pm = getContext().getPackageManager();
            PackageInfo info = InternalUtils.getPackageInfo(pm, getContext().getPackageName());
            versionCode = Long.toString(PackageInfoCompat.getLongVersionCode(info));
            versionName = info.versionName;
        } catch (Exception error) {
            Logger.error("Unable to get package info", error);
        }

        return !versionCode.equals(lastVersionCode) || !versionName.equals(lastVersionName);
    }
}
