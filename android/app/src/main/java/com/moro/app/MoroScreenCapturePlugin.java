package com.moro.app;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.media.projection.MediaProjectionManager;
import android.os.Build;
import android.provider.Settings;

import androidx.activity.result.ActivityResult;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.ActivityCallback;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "MoroScreenCapture")
public class MoroScreenCapturePlugin extends Plugin {
    @PluginMethod
    public void getStatus(PluginCall call) {
        call.resolve(MoroScreenCaptureService.buildStatus(getContext()));
    }

    @PluginMethod
    public void openOverlaySettings(PluginCall call) {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.M) {
            call.resolve(MoroScreenCaptureService.buildStatus(getContext()));
            return;
        }
        try {
            getContext().startActivity(MoroScreenCaptureService.overlaySettingsIntent(getContext()));
            call.resolve(MoroScreenCaptureService.buildStatus(getContext()));
        } catch (Exception e) {
            try {
                Intent fallback = new Intent(Settings.ACTION_SETTINGS);
                fallback.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                getContext().startActivity(fallback);
                call.resolve(MoroScreenCaptureService.buildStatus(getContext()));
            } catch (Exception inner) {
                call.reject("无法打开悬浮窗权限设置", inner);
            }
        }
    }

    @PluginMethod
    public void startCapture(PluginCall call) {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.LOLLIPOP) {
            call.reject("当前 Android 版本不支持录屏授权", "SCREEN_CAPTURE_UNSUPPORTED");
            return;
        }
        MediaProjectionManager manager = (MediaProjectionManager) getContext().getSystemService(Context.MEDIA_PROJECTION_SERVICE);
        if (manager == null) {
            call.reject("系统录屏服务不可用", "SCREEN_CAPTURE_UNSUPPORTED");
            return;
        }
        Intent intent = manager.createScreenCaptureIntent();
        startActivityForResult(call, intent, "handleScreenCaptureResult");
    }

    @ActivityCallback
    private void handleScreenCaptureResult(PluginCall call, ActivityResult result) {
        if (call == null) return;
        if (result == null || result.getResultCode() != Activity.RESULT_OK || result.getData() == null) {
            call.reject("用户取消了录屏授权", "SCREEN_CAPTURE_DENIED");
            return;
        }
        Intent serviceIntent = new Intent(getContext(), MoroScreenCaptureService.class);
        serviceIntent.setAction(MoroScreenCaptureService.ACTION_START);
        serviceIntent.putExtra(MoroScreenCaptureService.EXTRA_RESULT_CODE, result.getResultCode());
        serviceIntent.putExtra(MoroScreenCaptureService.EXTRA_RESULT_DATA, result.getData());
        serviceIntent.putExtra(MoroScreenCaptureService.EXTRA_TITLE, call.getString("title", "TA 正在看你的手机"));
        try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                getContext().startForegroundService(serviceIntent);
            } else {
                getContext().startService(serviceIntent);
            }
            call.resolve(MoroScreenCaptureService.buildStatus(getContext()));
        } catch (Exception e) {
            call.reject("无法启动录屏悬浮窗服务", e);
        }
    }

    @PluginMethod
    public void stopCapture(PluginCall call) {
        MoroScreenCaptureService.requestStop(getContext());
        call.resolve(MoroScreenCaptureService.buildStatus(getContext()));
    }

    @PluginMethod
    public void getLatestFrame(PluginCall call) {
        JSObject ret = MoroScreenCaptureService.buildLatestFrame(getContext());
        call.resolve(ret);
    }

    @PluginMethod
    public void updateOverlay(PluginCall call) {
        MoroScreenCaptureService.updateOverlayText(
            call.getString("title", "TA 正在看你的手机"),
            call.getString("text", ""),
            call.getString("tone", "soft")
        );
        call.resolve(MoroScreenCaptureService.buildStatus(getContext()));
    }
}
