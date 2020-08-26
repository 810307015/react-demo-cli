const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const resolve = (url) => {
  return path.resolve(__dirname, url);
}

module.exports = {
  // mode: "development", // "production" | "development" | "none"  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  entry: resolve("../src/index"), // string | object | array  // 这里应用程序开始执行
  // webpack 开始打包
  output: {
    // webpack 如何输出结果的相关选项
    path: resolve("../dist"), // string
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）
    filename: "js/index.js", // string    // 「入口分块(entry chunk)」的文件名模板（出口分块？）使用HtmlWebpackPlugin时引入的js文件就是这个路径
    publicPath: "/", // string    // 输出解析文件的目录，url 相对于 HTML 页面
    library: "MyLibrary", // string,
    // 导出库(exported library)的名称
    libraryTarget: "umd", // 通用模块定义    // 导出库(exported library)的类型
    /* 高级输出配置（点击显示） */
  },

  module: {
    // 关于模块配置
    rules: [
      // 模块规则（配置 loader、解析器等选项）
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        include: [
          resolve("../src")
        ],
        // 这里是匹配条件，每个选项都接收一个正则表达式或字符串
        // test 和 include 具有相同的作用，都是必须匹配选项
        // exclude 是必不匹配选项（优先于 test 和 include）
        // 最佳实践：
        // - 只在 test 和 文件名匹配 中使用正则表达式
        // - 在 include 和 exclude 中使用绝对路径数组
        // - 尽量避免 exclude，更倾向于使用 include
        // issuer: { test, include, exclude },
        // issuer 条件（导入源）
        // enforce: "pre",
        // enforce: "post",
        // 标识应用这些规则，即使规则覆盖（高级选项）
        loader: "babel-loader",
        // 应该应用的 loader，它相对上下文解析
        // 为了更清晰，`-loader` 后缀在 webpack 2 中不再是可选的
        // 查看 webpack 1 升级指南。
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        },
        // loader 的可选项
      },
      {
        test: /\.html$/,
        use: [
          // 应用多个 loader 和选项
          "htmllint-loader",
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // 这里可以指定一个 publicPath
              // 默认使用 webpackOptions.output中的publicPath
              publicPath: './css'
            },
          },
          // 'style-loader',
          'css-loader',
          'less-loader',
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // 'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ],
  },
  resolve: {
    // 解析模块请求的选项
    // （不适用于对 loader 解析）
    modules: [
      "node_modules",
      resolve("src")
    ],
    // 用于查找模块的目录
    extensions: [".js", ".json", ".jsx", ".css", ".less"],
    // 使用的扩展名
    alias: {
      // 模块别名列表
      // "module": "new-module",
      // 起别名："module" -> "new-module" 和 "module/path/file" -> "new-module/path/file"
      // "only-module$": "new-module",
      // 起别名 "only-module" -> "new-module"，但不匹配 "only-module/path/file" -> "new-module/path/file"
      // "module": path.resolve(__dirname, "app/third/module.js"),
      // 起别名 "module" -> "./app/third/module.js" 和 "module/file" 会导致错误
      // 模块别名相对于当前上下文导入
      "Actions": resolve("../src/actions"),
      "Apis": resolve("../src/apis"),
      "Assets": resolve("../src/assets"),
      "Components": resolve("../src/components"),
      "Mocks": resolve("../src/mocks"),
      "Pages": resolve("../src/pages"),
      "Reducers": resolve("../src/reducers"),
      "Routes": resolve("../src/routes"),
      "Store": resolve("../src/store"),
      "Utils": resolve("../src/utils"),
    },
    /* 可供选择的别名语法（点击展示） */
    /* 高级解析选项（点击展示） */
  },
  plugins: [
    new MiniCssExtractPlugin({
      // 类似 webpackOptions.output里面的配置 可以忽略
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('../src/assets/index.html')
    }),
    new CleanWebpackPlugin(), // 打包之前清空dist文件夹
  ],
}