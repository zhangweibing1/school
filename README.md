# mobile-seed
t
> mobile-seed

## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn serve

# build for production with minification
yarn build
```

## 目录介绍

```
mobile-seed
  |--dist  生产目录
  |--node_modules 第三方依赖
  |--public 入口页面
*****************重点看这里***************
  |--src 应用代码
    |--assets 资源目录，会被webpack编译
    |--components 应用组件
    |--icons 图标库
    |--views 应用页面组件
    |--services 应用服务，管控应用的数据请求
    |--utils 工具(网络请求，常量)
    |--styles 样式管理
    |--router 路由(vue-router)
    |--store 状态管理(vuex)
    |--main.js  入口文件
  |--static 静态资源目录，不会被webpack编译，通过url访问
*****************重点看这里***************
```

## 注意事项

### 安装OWSDK

```
yarn add OWSDK --registry http://47.93.237.190:4873
// 或
npm install OWSDK --registry http://47.93.237.190:4873
```
