const { babel } = require('@rollup/plugin-babel'); // 兼容处理
const { nodeResolve: resolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const { terser } = require('rollup-plugin-terser'); // 代码压缩

const isProd = process.env.NODE_ENV === 'production';

let plugins = [];

if (isProd) {
  plugins = [
    ...plugins,
    terser({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
      },
    }),
  ];
}

module.exports = (option) => ({
  input: option.input,
  output: {
    file: option.file, // 打包文件名称
    name: option.name, // 浏览器环境全局变量名
    format: option.format, // 打包成通用模块
    indent: !isProd, // 不需要缩进
    sourcemap: !isProd, // 是否生成sourcemap
  },
  external: [], // 外部不需要打进包的库
  plugins: [
    resolve(),
    commonjs(),
    json(),
    babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }),
    ...plugins,
  ],
});
