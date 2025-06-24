# Vant 2 微信小程序组件库

轻量、可靠的移动端组件库

## 项目结构

```
WeChat-ui/
├── components/           # 组件库
│   └── v-button/        # 按钮组件
│       ├── index.js     # 组件逻辑
│       ├── index.json   # 组件配置
│       ├── index.wxml   # 组件模板
│       └── index.wxss   # 组件样式
├── pages/               # 页面
│   └── index/           # 主页面
│       ├── index.js     # 页面逻辑
│       ├── index.json   # 页面配置
│       ├── index.wxml   # 页面模板
│       └── index.wxss   # 页面样式
├── app.js               # 小程序入口
├── app.json             # 小程序配置
├── app.wxss             # 全局样式
└── README.md            # 项目说明
```

## 组件使用

### 1. 引入组件

在页面的 json 文件中引入组件：

```json
{
  "usingComponents": {
    "v-button": "/components/v-button/index"
  }
}
```

### 2. 使用组件

在 wxml 中使用：

```xml
<v-button text="按钮文字" bind:click="handleClick"></v-button>
```

## 组件开发规范

### 命名规范
- 组件名称：使用 `v-` 前缀
- 文件命名：统一使用 `index.*`
- 样式类名：使用 `v-组件名` 作为根类名

### 组件结构
每个组件包含四个文件：
- `index.js` - 组件逻辑
- `index.json` - 组件配置
- `index.wxml` - 组件模板
- `index.wxss` - 组件样式

## 快速开始

1. 克隆项目到本地
2. 使用微信开发者工具打开项目
3. 开始开发或测试组件

本项目结构简单，便于维护和扩展。 