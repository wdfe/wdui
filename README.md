WDUI

### 目录结构

```bash
├── example 示例页面
├── lib  编译后文件
├── packages 各组件源码
├── src  总入口与公共函数
└── test  测试相关文件
```

### 开发

```javascript
npm run dev
```

开发时可在示例文档页面引入开发中的组件，进行开发、调试。

开发遵循 gitlab-flow 流程，每次开发新 feature 时，新开一个分支进行开发；开发完毕后在 gitlab 上发起 merge request，被 merge 之后即集成进组件库。

### 编译

```javascript
npm run build
```
编译 wdui 组件库

```javascript
npm run build-example
```
编译 wdui 示例文档网站

### 测试

```javascript
npm run test
```

### 规范

- 编写时请遵循 `eslint-config-wdfe` 中的 eslint 配置。
- 提交代码时 git commit message 请遵循[格式化规范](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)