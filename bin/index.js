#! /usr/bin/env node
const fs = require('fs');
const path = require('path');

const list = process.argv;
const type = list[2] || 'base';
const p = path.resolve(__filename, `../../template/${type}`);

const copy = function (src, dst) {
  let paths = fs.readdirSync(src); //同步读取当前目录
  paths.forEach(function (path) {
    const _src = src + '/' + path;
    const _dst = dst + '/' + path;
    fs.stat(_src, function (err, stats) { //stats 该对象 包含文件属性
      if (err) throw err;
      if (stats.isFile()) { //如果是个文件则拷贝
        let readable = fs.createReadStream(_src);//创建读取流
        let writable = fs.createWriteStream(_dst);//创建写入流
        readable.pipe(writable);
        console.log(`${path} 写入完成`)
      } else if (stats.isDirectory() && !path.includes('node_modules')) { //是目录则 递归
        checkDirectory(_src, _dst, copy);
      }
    });
  });
}

const checkDirectory = function (src, dst, callback) {
  fs.access(dst, fs.constants.F_OK, (err) => {
    if (err) {
      fs.mkdirSync(dst);
      callback(src, dst);
    } else {
      callback(src, dst);
    }
  });
};

fs.stat(p, (err, stats) => {
  if (err) {
    console.log(err);
    return;
  }
  if (stats.isDirectory()) {
    checkDirectory(p, './', copy);
  } else {
    console.log('暂时没有该类型的模板');
    console.log('当前支持模板如下');
    console.log('base: 基本的空项目');
    console.log('route: 带router的空项目');
    console.log('redux: 带redux的空项目');
    console.log('route-redux: 带redux和router的空项目');
  }
})