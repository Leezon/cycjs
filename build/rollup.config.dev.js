import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript';

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'lib/index.umd.js',
      name: 'cycjs',
      format: 'umd',
      indent: true,
    },
    plugins: [resolve(), commonjs(), typescript()],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'lib/index.esm.js',
      format: 'esm',
      indent: true,
    },
    plugins: [resolve(), commonjs(), typescript()],
  },
];
