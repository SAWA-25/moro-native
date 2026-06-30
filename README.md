# Moro Native

这是 Moro 的原生专用仓库，默认面向 APK / IPA。

## 方向

- `upstream` 指向原始 Moro 仓库。
- 这里默认的 `dev` / `build` / `preview` 都走 native 线。
- 网页端如果要看，单独用 `dev:web` / `build:web` / `preview:web`。

## 更新方式

1. 先从 upstream 同步 Moro 的最新内容。
2. 再在这里做原生适配。
3. 如果网页端和原生端都需要同改，先同步内容，再分别在两个仓库里做平台适配。

## 目录约定

- 共享业务：`apps/`、`components/`、`context/`、`hooks/`、`utils/`
- 原生入口：`platforms/native/`
- 浏览器入口：`platforms/web/`

## 说明

这个仓库的目标不是完全和网页端分叉成两套业务，而是把“原生发布”从网页主线里隔离出来，避免你改网页时顺手碰到 APK / IPA 的适配。
