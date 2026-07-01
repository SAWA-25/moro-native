# Moro Native

这是 Moro 的原生专用仓库，默认面向 APK / IPA。

## 怎么同步

日常先在网页主仓库 `C:\Users\Sss24\Desktop\moro\moro` 更新功能，然后在主仓库运行：

```bash
pnpm sync:native
```

这条命令会把共享业务代码、资源、文档和通用构建脚本同步到本仓库。

## 什么会保留

同步不会覆盖这些原生专属内容：

- `android/`
- `ios/`
- `.github/`
- `capacitor.config.ts`
- `vite.config.ts`
- `package.json` 里的原生命令
- `README.md`

所以网页端和 APK / IPA 的功能内容可以同步，但发布配置、构建方式、输出目录和原生壳继续分开。

## 原生命令

- `pnpm dev`：原生模式开发预览
- `pnpm build`：构建原生 Web 包到 `dist-native`
- `pnpm cap:sync`：构建并同步 Capacitor
- `pnpm cap:android`：同步并打开 Android 工程
- `pnpm cap:ios`：同步并打开 iOS 工程
- `pnpm dev:web` / `pnpm build:web`：只用于临时检查网页模式

## 规则

以后更新时：先改主仓库，再跑 `pnpm sync:native`，然后只在本仓库处理 APK / IPA 适配。
