### react-demo-cli

- 一个自动生成各种react模板的cli工具，里面的模板都是自己从零开始搭建的空模板，配置文件清晰可见，方便修改定制化。

#### 使用说明

- 安装，`npm i create-react-auto -g`。
- 使用：`create-react-auto [templateName]`。
- 参数说明：`templateName`可选值
  1. `base`，什么都没有添加的空项目，不传`templateName`默认为`base`。
  2. `route`，添加了多级路由的空项目
  3. `redux`，添加了redux的空项目
  4. `route-redux`，添加了多级路由和redux的空项目