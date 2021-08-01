import babel from '@rollup/plugin-babel'; // 兼容处理

import pkg from '../package.json';

export default {
  input: 'src/main.js',
  output: {
    file: pkg.main, // 打包文件名称
    name: '_', // 浏览器环境全局变量名
    format: 'umd', // 打包成通用模块
    indent: false, // 不需要缩进
  },
  external: [], // 外部不需要打进包的库
  plugins: [babel({ babelHelpers: 'bundled' })],
};
