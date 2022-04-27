import babel from '@rollup/plugin-babel'; // 兼容处理
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
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
  plugins: [
    resolve(),
    commonjs(),
    json(),
    babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }),
  ],
};
