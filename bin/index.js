#! /usr/bin/env node
const fs = require('fs');
const path = require('path');

const list = process.argv;
const type = list[2] || 'base';
const p = path.resolve(__filename, `../../template/${type}`);

const copy = function (src, dst) {
  let paths = fs.readdirSync(src); //同步读取当前目录
  paths.forEach(async function (path) {
    const _src = src + '/' + path;
    const _dst = dst + '/' + path;
    await fs.stat(_src, async function (err, stats) { //stats 该对象 包含文件属性
      if (err) throw err;
      if (stats.isFile()) { //如果是个文件则拷贝
        let readable = fs.createReadStream(_src);//创建读取流
        let writable = fs.createWriteStream(_dst);//创建写入流
        await readable.pipe(writable);
        console.log(`${path} 写入完成`)
      } else if (stats.isDirectory() && path !=='node_modules') { //是目录则 递归
        await checkDirectory(_src, _dst, copy);
      }
    });
  });
}

const checkDirectory = function (src, dst, callback) {
  fs.access(dst, fs.constants.F_OK, async (err) => {
    if (err) {
      await fs.mkdirSync(dst);
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