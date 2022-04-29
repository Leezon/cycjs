const rollup = require('rollup');
const util = require('util');
const { ncp } = require('ncp');
const config = require('./rollup.config');

const { promisify } = util;

async function build(option) {
  const bundle = await rollup.rollup(option);
  await bundle.write(option.output);
}

(async () => {
  try {
    await build(config);
    await promisify(ncp)('./types/', './dist/');
    console.log('build success !'); // eslint-disable-line no-console
  } catch (e) {
    console.error(e); // eslint-disable-line no-console
  }
})();
