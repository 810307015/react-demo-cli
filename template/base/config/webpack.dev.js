const DashboardPlugin = require('webpack-dashboard/plugin');

const path = require('path');
const webpack = require('webpack');

const config = require('./webpack.base');
const packageJson = require('../package.json'); // 读取api代理
const proxy = packageJson.proxy || '/';

const resolve = (url) => {
  return path.resolve(__dirname, url);
}

process.env.NODE_ENV = 'development';

module.exports = {
  ...config,
  mode: 'development',
  devtool: "source-map", // enum  // 通过在浏览器调试工具(browser devtools)中添加元信息(meta info)增强调试
  // 牺牲了构建速度的 `source-map' 是最详细的。
  context: __dirname, // string（绝对路径！）
  // webpack 的主目录
  // entry 和 module.rules.loader 选项
  // 相对于此目录解析

  target: "web", // 枚举  // 包(bundle)应该运行的环境
  // 更改 块加载行为(chunk loading behavior) 和 可用模块(available module)
  stats: "errors-only",  // 精确控制要显示的 bundle 信息
  devServer: {
    proxy: { // proxy URLs to backend development server
      '/api': proxy 
    },
    publicPath: "/",
    contentBase: resolve('../dist/index.html'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    port: 3333,
    open: true,
    // historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    after: function(app, server, compiler) {
      console.log(app, server, compiler);
    }
    // https: false, // true for self-signed, object for cert authority
    // noInfo: true, // only errors & warns on hot reload
    // ...
  },

  plugins: [
    ...config.plugins,
    // 编译时(compile time)插件
    // webpack-dev-server 强化插件
    new DashboardPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
}