import { terser } from 'rollup-plugin-terser'; // 代码压缩
import config from './rollup.config';

config.plugins = [
  ...config.plugins,
  terser({
    compress: {
      pure_getters: true,
      unsafe: true,
      unsafe_comps: true,
      warnings: false,
    },
  }),
];
export default config;
