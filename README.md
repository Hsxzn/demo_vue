# vuetest2.0

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Steps to reproduce

> npm run serve
> click button title 'open'
> children template show
> click children template button 'change computed modalFromData'
> state change
> click children template button 'close dialog'
> again children show, data and computed of status It will be remembered

### 重现步骤

> 启动项目
> 点击 open button
> 点击 change button 更改 computed 的数据
> 点击 close button 注销掉子组件
> 当再次点击 open 的时候 上次更改的 computed 的状态会被记住

> 模拟场景 复用弹窗（新建/编辑/详情）

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
