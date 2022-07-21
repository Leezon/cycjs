import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import { babel } from '@rollup/plugin-babel'; // 兼容处理
import { terser } from 'rollup-plugin-terser'; // 代码压缩

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'lib/index.umd.js',
      name: 'cycjs',
      format: 'umd',
      indent: false,
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      babel({ babelHelpers: 'bundled' }),
      terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false,
        },
      }),
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'lib/index.esm.js',
      format: 'esm',
      indent: false,
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      babel({ babelHelpers: 'bundled' }),
      terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false,
        },
      }),
    ],
  },
];
