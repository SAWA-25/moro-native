package com.moro.app;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.content.pm.ServiceInfo;
import android.graphics.Bitmap;
import android.graphics.Color;
import android.graphics.PixelFormat;
import android.graphics.drawable.GradientDrawable;
import android.hardware.display.DisplayManager;
import android.hardware.display.VirtualDisplay;
import android.media.Image;
import android.media.ImageReader;
import android.media.projection.MediaProjection;
import android.media.projection.MediaProjectionManager;
import android.net.Uri;
import android.os.Build;
import android.os.Handler;
import android.os.HandlerThread;
import android.os.IBinder;
import android.provider.Settings;
import android.util.Base64;
import android.util.DisplayMetrics;
import android.view.Gravity;
import android.view.MotionEvent;
import android.view.View;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.getcapacitor.JSObject;

import java.io.ByteArrayOutputStream;
import java.nio.ByteBuffer;

public class MoroScreenCaptureService extends Service {
    public static final String ACTION_START = "com.moro.app.screen_capture.START";
    public static final String ACTION_STOP = "com.moro.app.screen_capture.STOP";
    public static final String EXTRA_RESULT_CODE = "resultCode";
    public static final String EXTRA_RESULT_DATA = "resultData";
    public static final String EXTRA_TITLE = "title";

    private static final Object LOCK = new Object();
    private static final String CHANNEL_ID = "moro_screen_capture";
    private static final int NOTIFICATION_ID = 2042;
    private static final int FRAME_MAX_EDGE = 720;
    private static final long FRAME_MIN_INTERVAL_MS = 1800L;

    private static MoroScreenCaptureService instance;
    private static boolean captureActive = false;
    private static String latestFrameDataUrl;
    private static long latestFrameCapturedAt = 0L;
    private static int latestFrameWidth = 0;
    private static int latestFrameHeight = 0;
    private static String pendingOverlayTitle = "TA 正在看你的手机";
    private static String pendingOverlayText = "已授权录屏，等 TA 说第一句。";
    private static String pendingOverlayTone = "soft";

    private MediaProjection mediaProjection;
    private VirtualDisplay virtualDisplay;
    private ImageReader imageReader;
    private HandlerThread captureThread;
    private Handler captureHandler;
    private long lastEncodedAt = 0L;

    private WindowManager windowManager;
    private View overlayView;
    private WindowManager.LayoutParams overlayParams;
    private TextView overlayTitleView;
    private TextView overlayBodyView;

    public static boolean canDrawOverlays(Context context) {
        return Build.VERSION.SDK_INT < Build.VERSION_CODES.M || Settings.canDrawOverlays(context);
    }

    public static Intent overlaySettingsIntent(Context context) {
        Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION, Uri.parse("package:" + context.getPackageName()));
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        return intent;
    }

    public static JSObject buildStatus(Context context) {
        JSObject ret = new JSObject();
        ret.put("native", true);
        ret.put("platform", "android");
        ret.put("packageName", context.getPackageName());
        ret.put("captureSupported", Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP);
        ret.put("captureActive", captureActive);
        ret.put("overlayPermissionGranted", canDrawOverlays(context));
        ret.put("canOpenOverlaySettings", true);
        synchronized (LOCK) {
            ret.put("latestFrameCapturedAt", latestFrameCapturedAt);
            ret.put("latestFrameWidth", latestFrameWidth);
            ret.put("latestFrameHeight", latestFrameHeight);
            if (latestFrameDataUrl != null) ret.put("latestFrameDataUrl", latestFrameDataUrl);
        }
        return ret;
    }

    public static JSObject buildLatestFrame(Context context) {
        JSObject ret = buildStatus(context);
        synchronized (LOCK) {
            if (latestFrameDataUrl == null) return ret;
            JSObject frame = new JSObject();
            frame.put("source", "android_media_projection");
            frame.put("capturedAt", latestFrameCapturedAt);
            frame.put("width", latestFrameWidth);
            frame.put("height", latestFrameHeight);
            frame.put("mimeType", "image/jpeg");
            frame.put("dataUrl", latestFrameDataUrl);
            ret.put("frame", frame);
        }
        return ret;
    }

    public static void updateOverlayText(String title, String text, String tone) {
        pendingOverlayTitle = title == null || title.trim().isEmpty() ? "TA 正在看你的手机" : title.trim();
        pendingOverlayText = text == null || text.trim().isEmpty() ? "TA 还没说话。" : text.trim();
        pendingOverlayTone = tone == null ? "soft" : tone;
        MoroScreenCaptureService live = instance;
        if (live != null) live.renderOverlayText();
    }

    public static void requestStop(Context context) {
        Intent intent = new Intent(context, MoroScreenCaptureService.class);
        intent.setAction(ACTION_STOP);
        try {
            context.startService(intent);
        } catch (Exception ignored) {
            MoroScreenCaptureService live = instance;
            if (live != null) live.stopSelf();
        }
    }

    @Override
    public void onCreate() {
        super.onCreate();
        instance = this;
        createNotificationChannel();
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        String action = intent != null ? intent.getAction() : null;
        if (ACTION_STOP.equals(action)) {
            stopSelf();
            return START_NOT_STICKY;
        }
        if (ACTION_START.equals(action) && intent != null) {
            Notification notification = buildNotification("TA 正在通过授权录屏看你的手机");
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                startForeground(NOTIFICATION_ID, notification, ServiceInfo.FOREGROUND_SERVICE_TYPE_MEDIA_PROJECTION);
            } else {
                startForeground(NOTIFICATION_ID, notification);
            }
            int resultCode = intent.getIntExtra(EXTRA_RESULT_CODE, 0);
            Intent data = intent.getParcelableExtra(EXTRA_RESULT_DATA);
            String title = intent.getStringExtra(EXTRA_TITLE);
            if (title != null && !title.trim().isEmpty()) pendingOverlayTitle = title.trim();
            startProjection(resultCode, data);
            if (canDrawOverlays(this)) showOverlay();
            return START_STICKY;
        }
        return START_NOT_STICKY;
    }

    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    @Override
    public void onDestroy() {
        removeOverlay();
        stopProjection();
        synchronized (LOCK) {
            captureActive = false;
        }
        if (instance == this) instance = null;
        super.onDestroy();
    }

    private void startProjection(int resultCode, Intent data) {
        stopProjection();
        if (data == null || Build.VERSION.SDK_INT < Build.VERSION_CODES.LOLLIPOP) {
            stopSelf();
            return;
        }
        MediaProjectionManager manager = (MediaProjectionManager) getSystemService(Context.MEDIA_PROJECTION_SERVICE);
        if (manager == null) {
            stopSelf();
            return;
        }
        mediaProjection = manager.getMediaProjection(resultCode, data);
        if (mediaProjection == null) {
            stopSelf();
            return;
        }
        captureThread = new HandlerThread("MoroScreenCapture");
        captureThread.start();
        captureHandler = new Handler(captureThread.getLooper());

        DisplayMetrics metrics = getResources().getDisplayMetrics();
        int width = Math.max(320, metrics.widthPixels);
        int height = Math.max(320, metrics.heightPixels);
        int density = metrics.densityDpi;
        imageReader = ImageReader.newInstance(width, height, PixelFormat.RGBA_8888, 2);
        imageReader.setOnImageAvailableListener(reader -> {
            Image image = null;
            try {
                image = reader.acquireLatestImage();
                if (image == null) return;
                long now = System.currentTimeMillis();
                if (now - lastEncodedAt < FRAME_MIN_INTERVAL_MS) return;
                lastEncodedAt = now;
                encodeImage(image, now);
            } catch (Exception ignored) {
            } finally {
                if (image != null) image.close();
            }
        }, captureHandler);

        mediaProjection.registerCallback(new MediaProjection.Callback() {
            @Override
            public void onStop() {
                MoroScreenCaptureService.this.stopSelf();
            }
        }, captureHandler);

        virtualDisplay = mediaProjection.createVirtualDisplay(
            "MoroScreenCapture",
            width,
            height,
            density,
            DisplayManager.VIRTUAL_DISPLAY_FLAG_AUTO_MIRROR,
            imageReader.getSurface(),
            null,
            captureHandler
        );
        synchronized (LOCK) {
            captureActive = true;
        }
    }

    private void stopProjection() {
        try {
            if (virtualDisplay != null) virtualDisplay.release();
        } catch (Exception ignored) {
        }
        virtualDisplay = null;
        try {
            if (imageReader != null) imageReader.close();
        } catch (Exception ignored) {
        }
        imageReader = null;
        try {
            if (mediaProjection != null) mediaProjection.stop();
        } catch (Exception ignored) {
        }
        mediaProjection = null;
        try {
            if (captureThread != null) captureThread.quitSafely();
        } catch (Exception ignored) {
        }
        captureThread = null;
        captureHandler = null;
        synchronized (LOCK) {
            captureActive = false;
        }
    }

    private void encodeImage(Image image, long capturedAt) {
        Image.Plane[] planes = image.getPlanes();
        if (planes == null || planes.length == 0) return;
        int width = image.getWidth();
        int height = image.getHeight();
        ByteBuffer buffer = planes[0].getBuffer();
        int pixelStride = planes[0].getPixelStride();
        int rowStride = planes[0].getRowStride();
        int rowPadding = rowStride - pixelStride * width;
        int paddedWidth = width + Math.max(0, rowPadding / Math.max(1, pixelStride));

        Bitmap padded = null;
        Bitmap cropped = null;
        Bitmap scaled = null;
        try {
            padded = Bitmap.createBitmap(paddedWidth, height, Bitmap.Config.ARGB_8888);
            padded.copyPixelsFromBuffer(buffer);
            cropped = Bitmap.createBitmap(padded, 0, 0, width, height);
            Bitmap out = cropped;
            int maxEdge = Math.max(width, height);
            if (maxEdge > FRAME_MAX_EDGE) {
                float scale = (float) FRAME_MAX_EDGE / (float) maxEdge;
                int nextW = Math.max(1, Math.round(width * scale));
                int nextH = Math.max(1, Math.round(height * scale));
                scaled = Bitmap.createScaledBitmap(cropped, nextW, nextH, true);
                out = scaled;
            }
            ByteArrayOutputStream stream = new ByteArrayOutputStream();
            out.compress(Bitmap.CompressFormat.JPEG, 58, stream);
            String encoded = Base64.encodeToString(stream.toByteArray(), Base64.NO_WRAP);
            synchronized (LOCK) {
                latestFrameDataUrl = "data:image/jpeg;base64," + encoded;
                latestFrameCapturedAt = capturedAt;
                latestFrameWidth = out.getWidth();
                latestFrameHeight = out.getHeight();
            }
        } catch (Exception ignored) {
        } finally {
            if (scaled != null && scaled != cropped) scaled.recycle();
            if (cropped != null && cropped != padded) cropped.recycle();
            if (padded != null) padded.recycle();
        }
    }

    private void showOverlay() {
        removeOverlay();
        windowManager = (WindowManager) getSystemService(Context.WINDOW_SERVICE);
        if (windowManager == null) return;

        LinearLayout root = new LinearLayout(this);
        root.setOrientation(LinearLayout.VERTICAL);
        root.setPadding(dp(12), dp(10), dp(12), dp(10));
        GradientDrawable bg = new GradientDrawable();
        bg.setColor(Color.argb(232, 15, 23, 42));
        bg.setStroke(dp(1), Color.argb(48, 255, 255, 255));
        bg.setCornerRadius(dp(18));
        root.setBackground(bg);

        LinearLayout header = new LinearLayout(this);
        header.setGravity(Gravity.CENTER_VERTICAL);
        header.setOrientation(LinearLayout.HORIZONTAL);
        overlayTitleView = new TextView(this);
        overlayTitleView.setTextColor(Color.WHITE);
        overlayTitleView.setTextSize(12);
        overlayTitleView.setTypeface(android.graphics.Typeface.DEFAULT_BOLD);
        header.addView(overlayTitleView, new LinearLayout.LayoutParams(0, LinearLayout.LayoutParams.WRAP_CONTENT, 1));

        Button stop = new Button(this);
        stop.setText("停");
        stop.setTextSize(11);
        stop.setAllCaps(false);
        stop.setTextColor(Color.WHITE);
        stop.setBackgroundColor(Color.TRANSPARENT);
        stop.setOnClickListener(v -> stopSelf());
        header.addView(stop, new LinearLayout.LayoutParams(dp(42), dp(34)));
        root.addView(header, new LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT, LinearLayout.LayoutParams.WRAP_CONTENT));

        overlayBodyView = new TextView(this);
        overlayBodyView.setTextColor(Color.argb(226, 255, 255, 255));
        overlayBodyView.setTextSize(13);
        overlayBodyView.setLineSpacing(0, 1.08f);
        root.addView(overlayBodyView, new LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT, LinearLayout.LayoutParams.WRAP_CONTENT));
        overlayView = root;
        renderOverlayText();

        int type = Build.VERSION.SDK_INT >= Build.VERSION_CODES.O
            ? WindowManager.LayoutParams.TYPE_APPLICATION_OVERLAY
            : WindowManager.LayoutParams.TYPE_PHONE;
        overlayParams = new WindowManager.LayoutParams(
            dp(292),
            WindowManager.LayoutParams.WRAP_CONTENT,
            type,
            WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE | WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS,
            PixelFormat.TRANSLUCENT
        );
        overlayParams.gravity = Gravity.TOP | Gravity.START;
        overlayParams.x = dp(18);
        overlayParams.y = dp(130);

        final float[] down = new float[4];
        root.setOnTouchListener((view, event) -> {
            if (event.getAction() == MotionEvent.ACTION_DOWN) {
                down[0] = event.getRawX();
                down[1] = event.getRawY();
                down[2] = overlayParams.x;
                down[3] = overlayParams.y;
                return true;
            }
            if (event.getAction() == MotionEvent.ACTION_MOVE) {
                overlayParams.x = (int) (down[2] + event.getRawX() - down[0]);
                overlayParams.y = (int) (down[3] + event.getRawY() - down[1]);
                try {
                    windowManager.updateViewLayout(overlayView, overlayParams);
                } catch (Exception ignored) {
                }
                return true;
            }
            return false;
        });

        try {
            windowManager.addView(overlayView, overlayParams);
        } catch (Exception ignored) {
            overlayView = null;
        }
    }

    private void removeOverlay() {
        if (windowManager != null && overlayView != null) {
            try {
                windowManager.removeView(overlayView);
            } catch (Exception ignored) {
            }
        }
        overlayView = null;
        overlayParams = null;
        overlayTitleView = null;
        overlayBodyView = null;
    }

    private void renderOverlayText() {
        Handler main = new Handler(getMainLooper());
        main.post(() -> {
            if (overlayTitleView != null) overlayTitleView.setText(pendingOverlayTitle);
            if (overlayBodyView != null) overlayBodyView.setText(pendingOverlayText);
        });
    }

    private Notification buildNotification(String text) {
        Intent stopIntent = new Intent(this, MoroScreenCaptureService.class);
        stopIntent.setAction(ACTION_STOP);
        android.app.PendingIntent stopPending = android.app.PendingIntent.getService(
            this,
            2043,
            stopIntent,
            Build.VERSION.SDK_INT >= Build.VERSION_CODES.M ? android.app.PendingIntent.FLAG_IMMUTABLE : 0
        );
        Notification.Builder builder = Build.VERSION.SDK_INT >= Build.VERSION_CODES.O
            ? new Notification.Builder(this, CHANNEL_ID)
            : new Notification.Builder(this);
        builder
            .setSmallIcon(getApplicationInfo().icon)
            .setContentTitle("Moro TA 窥屏")
            .setContentText(text)
            .setOngoing(true)
            .setOnlyAlertOnce(true)
            .addAction(0, "停止", stopPending);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            builder.setColor(Color.rgb(15, 23, 42));
        }
        return builder.build();
    }

    private void createNotificationChannel() {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.O) return;
        NotificationChannel channel = new NotificationChannel(
            CHANNEL_ID,
            "Moro TA 窥屏",
            NotificationManager.IMPORTANCE_LOW
        );
        channel.setDescription("授权录屏与系统悬浮窗评论");
        NotificationManager manager = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
        if (manager != null) manager.createNotificationChannel(channel);
    }

    private int dp(int value) {
        return Math.round(value * getResources().getDisplayMetrics().density);
    }
}
