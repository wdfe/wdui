# WDUI

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

#### 开发规范

代码规范遵循 [eslint-config-wdfe](http://git.vdian.net/weidianFE/eslint-config-wdfe/blob/master/index.js)，每次编译时会自动用 eslint 检查一遍并得出报告。

组件 `name` 以 `wd-` 开头，如： `wd-button`, `wd-toast`。组件 CSS 类名以组件 name 开头，如： `wd-button-primary`，`wd-toast-box-haveicon` 等等。

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

语法检查

```javascript
npm run lint
```

单元测试检查

```javascript
npm run test
```

编写测试时，可以使用 watch 模式：
```javascript
npm run test:watch
```

### 规范

- 编写时请遵循 `eslint-config-wdfe` 中的 eslint 配置。
- 提交代码时 git commit message 请遵循[格式化规范](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)，加入 [fix]、[feat]、[chore] 等标记
- 发起 merge request 之前先用 lint 和 test 做检查，确保发 request时为无 warning 无 error 状态。