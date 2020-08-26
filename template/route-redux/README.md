## base

- 最基础的空的React项目

### 文件目录设定

- `config`, 打包的配置
- `src`, 主要的代码内容
  * `assets`, 静态资源
  * `components`, 公共的组件
  * `routes`, 路由的配置
  * `pages`, 主要的业务
  * `store`, 全局`redux`的数据
  * `reducers`, 匹配`action`的指令去操作改变`store`的方法
  * `actions`, 发布动作指令
  * `apis`, 所有的`api`
  * `mocks`, `mock`数据
  * `index.js`, 项目打包的主入口
- `dist`, 打包过后的目录
- `.babelrc`, `babel`的配置
- `.gitignore`, `git`需要忽略的文件
- `.npmignore`, `npm`发布时需要忽略的文件
- `README.md`, 主要的说明

### 项目的需要的包

- `dependencies`，生产环境所依赖的包，开发和生产环境都需要的包
  1. `react`
  2. `react-dom`
  3. `react-router`
  4. `redux`
  5. `react-redux`
  6. `react-router-dom`
  7. `react-router-redux`
- `devDependencies`，开发环境所依赖的包，仅仅在开发环境中需要使用
  1. `babel-loader`，解析`jsx`以及`ES6`语法的。
  2. `css-loader`，解析css。
  3. `style-loader`，这个与`mini-css-extract-plugin`冲突，已经去掉
  4. `less-loader`, `less`的解析
  5. `url-loader`, 文件解析
  6. `html-loader`
  7. `webpack-dashboard`，一个运行时的辅助工具，暂时没用上
  8. `webpack`
  9. `webpack-cli`
  10. `path`
  11. `@babel/core`
  12. `@babel/plugin-proposal-class-properties`，支持`ES6`的`class`
  13. `@babel/plugin-proposal-object-rest-spread`，支持拓展运算符
  14. `babel-plugin-import`，配置`import`
  15. `@babel/preset-env`，支持新语法
  16. `@babel/preset-react`，支持`React`的语法
  17. `webpack-dev-server`，本地服务器
  18. `html-webpack-plugin`，动态的将js，css导入html，根据模板生成新的html
  19. `htmllint-loader`，格式检查
  20. `terser-webpack-plugin`，`UglifyJsPlugin`在`webpack`4之后已经被放进了`config`中，在对应的`config`中配置该插件用来开启缓存和多进程
  21. `clean-webpack-plugin`，每次打包前先清空`dist`文件夹
  22. `mini-css-extract-plugin`，`extract-text-webpack-plugin`不支持`webpack4.0`之后的，有人说升级到4.0的beta就可以，但是我目前这个最新的版本的`webpack`依然会报错，只能找一个替代品，用来将代码里的`css`抽离出来作为单独的`css`文件。
