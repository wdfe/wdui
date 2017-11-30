# Contributing Guide

### 目录结构

```bash
├── example 示例页面
├── lib  编译后文件
├── build  编译相关文件
├── packages 各组件源码
├── src  总入口与公共函数
└── test  单元测试相关文件
```

### 开发

```javascript
npm run dev
```

开发时可在示例文档页面引入开发中的组件，进行开发、调试。

开发遵循 gitlab-flow 流程，每次开发新 feature 时，新开一个分支进行开发；开发完毕后发起 Pull Request，被 merge 之后即集成进组件库。

#### 开发规范

代码规范遵循 [eslint-config-wdfe](https://github.com/wdfe/eslint-config-wdfe)，每次编译时会自动用 eslint 检查一遍并得出报告。

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

### 发布

在 dev 分支上新增/修改完代码之后，若确认无误，可以发新版本。

1. 若涉及 API 变动，需先确定在文档和 example 页中进行对应修改和示范。
2. 更新版本号，修改 `package.json` 和 `sec/index.js` 中的版本号信息。
3. 运行 `npm run build` 进行编译，将编译结果进行提交与 push。建议该次提交的 commit 信息为 `[release] bump to x.x.x.` 或类似。
4. 使用新版本号打 tag，执行 `git tag vx.x.x（新版本号）`
5. 提交 tag。执行 `git push --tags
6. 在项目的 [release](https://github.com/wdfe/wdui/releases) 页中 `draft a new release`。发布新 release 时需要将本版本的新增功能/修改功能/bug修复等工作进行描述，仿照之前的 release。
7. 提交项目至 npm。执行 `npm publish`
8. 此时 wdui 新版本已成功发布，在本地项目中重新安装 wdui (`npm i wdui@latest --save-dev`)即可使用新功能。

### 规范

- 编写时请遵循 `eslint-config-wdfe` 中的 eslint 配置。
- 提交代码时 git commit message 请遵循[格式化规范](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)，加入 [fix]、[feat]、[chore] 等标记
- 发起 Pull Request 之前先用 lint 和 test 做检查，确保发 request 时尽量为无 warning 无 error 状态。