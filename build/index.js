const rollup = require('rollup');
const fs = require('fs');
const path = require('path');
const util = require('util');
const { ncp } = require('ncp');
const configFactory = require('./rollup.config');
const pkg = require('../package.json');

const { promisify } = util;

async function build(option) {
  const bundle = await rollup.rollup(option);
  await bundle.write(option.output);
}

(async () => {
  try {
    // build modules
    const modules = await promisify(fs.readdir)(
      path.join(__dirname, '../src/modules'),
    );
    for (const module of modules) {
      await build(
        configFactory({
          input: `src/modules/${module}`,
          file: `./dist/${module}`,
          name: module.replace(/\.js/, ''),
          format: 'umd',
        }),
      );
    }

    // build All
    await build(
      configFactory({
        input: 'src/main.js',
        file: pkg.main,
        name: pkg.name,
        format: 'umd',
      }),
    );

    await promisify(ncp)('./types/', './dist/');

    console.log('build success !'); // eslint-disable-line no-console
  } catch (e) {
    console.error(e); // eslint-disable-line no-console
  }
})();
