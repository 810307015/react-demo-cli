const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

const config = require('./webpack.base');

process.env.NODE_ENV = 'production';

module.exports = {
  ...config,
  mode: 'production',
  devtool: "enum", // enum  // 通过在浏览器调试工具(browser devtools)中添加元信息(meta info)增强调试
  // 牺牲了构建速度的 `source-map' 是最详细的。
  context: __dirname, // string（绝对路径！）
  // webpack 的主目录
  // entry 和 module.rules.loader 选项
  // 相对于此目录解析

  // target: "web", // 枚举  // 包(bundle)应该运行的环境
  // 更改 块加载行为(chunk loading behavior) 和 可用模块(available module)
  stats: "errors-only",  // 精确控制要显示的 bundle 信息
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "vendor",
          filename: 'vendor-[hash].min.js',
          minChunks: 2
        }
      }
    },
    minimizer: [
      new TerserPlugin({
        cache: true, // 开启缓存
        parallel: true, // 支持多进程
        sourceMap: true,
      }),
    ]
  },
  plugins: [
    ...config.plugins,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
    // 构建优化插件，下面两个在最新的webpack中已经被挪进了配置中
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   filename: 'vendor-[hash].min.js',
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //     drop_console: false,
    //   }
    // }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ]
}