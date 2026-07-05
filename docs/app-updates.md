# 应用更新（GitHub Releases + Appflow）

Moro 的更新入口在「文具盒 -> 基础与安全 -> 应用更新」。普通用户只会看到当前版本、检查更新、下载 / 安装新版、安装权限和更新说明；GitHub Release、更新清单 URL、Appflow App ID、channel 等开发配置都不出现在 App UI 里。

## APK 更新发布流程

推荐把 Android APK 和 `moro-update.json` 一起放到 GitHub Releases，同时维护 `release/moro-update.json` 这份静态清单。当前安装包会先读取 `native-main` 分支里的 `release/moro-update.json`（默认走 `https://sullymeow.ccwu.cc/github?url=` 代理），失败后再回退检查 [SAWA-25/moro-native](https://github.com/SAWA-25/moro-native) 最近发布中第一条带 `moro-update.json` 或 APK 的 release；单独发布 iOS 包时，即使它成为 GitHub latest，也不会挡住 Android 更新检查。

为了让清单里的下载地址长期稳定，发布 Release 时建议把 APK asset 命名为 `moro.apk`。如果你想带版本号命名也可以，把下面清单里的 `apkUrl` / `cnApkUrl` 改成对应文件名即可。

如果后续要临时覆盖默认仓库，可以在打包 APK 前写入：

```dotenv
VITE_MORO_RELEASE_OWNER=SAWA-25
VITE_MORO_RELEASE_REPO=moro-native
VITE_MORO_RELEASE_BRANCH=native-main
```

也可以直接指定完整的 GitHub Release API 地址，适合走自己的代理或镜像。指定完整地址后 App 会按这个地址返回的 release 读取，不再自动跳过 iOS-only release：

```dotenv
VITE_MORO_RELEASE_API_URL=https://api.github.com/repos/SAWA-25/moro-native/releases/tags/v1.0.7
```

如果不想走默认静态清单或 GitHub Release API，也可以指定固定更新清单：

```dotenv
VITE_MORO_UPDATE_MANIFEST_URL=https://example.com/moro-update.json
```

国内 GitHub 代理默认是 `https://sullymeow.ccwu.cc/github?url=`。如果你换成自己的代理，可在打包前覆盖：

```dotenv
VITE_MORO_GITHUB_PROXY_URL=https://your-worker.example.com/github?url=
```

PowerShell 临时打包示例：

```powershell
$env:VITE_MORO_RELEASE_OWNER="SAWA-25"
$env:VITE_MORO_RELEASE_REPO="moro-native"
$env:VITE_MORO_RELEASE_BRANCH="native-main"
pnpm build
pnpm cap:sync
```

发新版 APK 时要同步提高 [android/app/build.gradle](../android/app/build.gradle) 里的 `versionCode`，并用同一个签名证书签 APK。Android 只会把 `versionCode` 更大的同包名 APK 识别成升级包。

## moro-update.json

仓库根目录已经放了一份可直接改的 [moro-update.json](../moro-update.json)，`release/moro-update.json` 是安装版默认优先读取的静态清单。发布时两份都要同步更新，并把根目录这份作为 GitHub Release asset 上传。推荐格式：

```json
{
  "versionCode": 2,
  "versionName": "1.0.1",
  "apkUrl": "https://github.com/SAWA-25/moro-native/releases/download/v1.0.7/moro.apk",
  "cnApkUrl": "https://sullymeow.ccwu.cc/github?url=https%3A%2F%2Fgithub.com%2FSAWA-25%2Fmoro-native%2Freleases%2Fdownload%2Fv1.0.7%2Fmoro.apk",
  "sha256": "把 APK 的 SHA-256 写在这里，推荐填写",
  "sizeBytes": 123456789,
  "releaseNotes": "修复若干问题\n新增若干功能",
  "mandatory": false,
  "publishedAt": "2026-06-30T12:00:00+08:00"
}
```

`apkUrl` 可以写完整 HTTPS 地址，也可以写同一个 Release 里的 APK 文件名。若 `moro-update.json` 放在 GitHub Release 且该 Release 里只有一个 APK，`apkUrl` 可以省略，App 会自动选中 APK asset。

`cnApkUrl` 是给国内用户的下载线路，建议放你自己的国内 CDN、对象存储或网盘直链。字段也兼容 `domesticApkUrl`、`apkUrlCn`、`mirrorApkUrl`。如果不填且 APK asset 在 GitHub Releases 上，App 会自动生成一条 `https://sullymeow.ccwu.cc/github?url=...` 国内代理线路；显式填写 `cnApkUrl` 时优先用你自己的地址。

如果要彻底减少用户开梯子的概率，发包后至少同步这几处：

- `release/moro-update.json`：安装版自动提醒优先读这里。
- `moro-update.json`：作为 GitHub Release asset 上传的清单。
- `release/moro-ios-install.plist`：iPhone OTA 安装页，里面的 `software-package` URL 也要指向国内可访问的 IPA 地址。

`releaseNotes` 是普通用户会看到的更新内容，别写开发维护步骤或密钥信息。`sha256` 可选但推荐填，填了以后 App 会在打开系统安装器前校验 APK。

没有 `moro-update.json` 时，App 会尝试从 Release 标题、tag、正文或 APK 文件名里解析 `versionCode`，但这只是兜底；正式发布请始终附带 `moro-update.json`。

Android 不允许普通 App 静默安装 APK。Moro 会下载 APK、校验可选的 SHA-256，然后打开系统安装器；用户仍需手动确认安装，并按系统提示允许 Moro 安装未知来源应用。

## iPhone IPA 更新发布流程

iPhone 安装版会按 iOS 平台单独查找 GitHub Releases：优先选择最近带 `.ipa` 或 `moro-ios-install.plist` 的 release，不会误用 Android APK release。文具盒里的按钮会打开 `itms-services://` 安装确认页，用户仍需按 iOS 系统提示继续安装。

推荐在 iOS release 里同时上传：

- `Moro-ios-x.y.z.ipa`
- `moro-ios-install.plist`

`moro-ios-install.plist` 里的 `software-package` URL 必须指向同一版 IPA，`bundle-identifier` 要和 Xcode 工程里的 Bundle ID 一致。当前默认 Bundle ID 是 `wb.uniusc9734.tool7`。

如果 release 里暂时没有 plist，App 会退回读取 `native-main` 分支里的 `release/moro-ios-install.plist`。这能兜住现有发布，但正式发包仍建议把 plist 作为 release asset 一起上传，避免分支里的 plist 和旧 release 版本不一致。默认静态清单里的 `ios.plistUrl` 已指向 release asset；如果你换成自己的国内 CDN，也要同步改 plist 里的 IPA 地址。

也可以在打包前显式指定 iOS 安装清单或完整安装链接：

```dotenv
VITE_MORO_IOS_INSTALL_PLIST_URL=https://example.com/moro-ios-install.plist
VITE_MORO_IOS_INSTALL_URL=itms-services://?action=download-manifest&url=https%3A%2F%2Fexample.com%2Fmoro-ios-install.plist
```

如果使用固定 `moro-update.json`，可以把 iOS 信息放到 `ios` 字段：

```json
{
  "android": {
    "versionCode": 8,
    "versionName": "1.0.7",
    "apkUrl": "https://github.com/SAWA-25/moro-native/releases/download/v1.0.7/moro.apk"
  },
  "ios": {
    "versionName": "1.0.8.2",
    "buildNumber": 13,
    "bundleId": "wb.uniusc9734.tool7",
    "ipaUrl": "https://github.com/SAWA-25/moro-native/releases/download/v1.0.8.2/Moro-v1.0.8.2.ipa",
    "plistUrl": "https://github.com/SAWA-25/moro-native/releases/download/v1.0.8.2/moro-ios-install.plist",
    "releaseNotes": "修复 iPhone 安装版稳定性，并合入上游新内容"
  }
}
```

只有 `ipaUrl` 而没有 `plistUrl` / `installUrl` 时，iOS 不能直接安装 IPA；文具盒会提示安装清单不可用，而不是打开一个无法安装的 IPA 下载页。

## Ionic Appflow Live Updates

项目已经接入 `@capacitor/live-updates@0.3.1`，这是当前 Capacitor 6 工程使用的兼容版本。Appflow 配置只在构建时写入 Capacitor 配置，不在 App 里提供用户可编辑入口。

打包前可设置：

```dotenv
VITE_MORO_APPFLOW_APP_ID=your-appflow-app-id
VITE_MORO_APPFLOW_CHANNEL=Production
VITE_MORO_APPFLOW_AUTO_UPDATE_METHOD=background
VITE_MORO_APPFLOW_MAX_VERSIONS=2
```

`VITE_MORO_APPFLOW_APP_ID` 为空时，Live Updates 会保持关闭。配置完成后运行：

```powershell
pnpm build
pnpm cap:sync
```

Live Updates 只适合更新 WebView 里的网页资源，也就是 Vite 打出来的 JS/CSS/图片。以下变化仍然必须重新发 APK：

- 新增或修改 Android 权限
- 新增、升级或删除 Capacitor 原生插件
- 修改 `MainActivity`、Gradle、AndroidManifest、原生资源
- 改动需要 Android 系统识别的安装包版本号
