const cycjs = require('../dist/index');

test('test:Function:getType', () => {
  expect(cycjs.getType('555423199X')).toBe('string');
});

test('test:Function:verifyIdCard', () => {
  expect(cycjs.verifyIdCard('555423199X')).toBe(false);
});
