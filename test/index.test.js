const leezon = require('../dist/index.js');

test('test:Function:getType', () => {
  expect(leezon.getType('522423199X')).toBe('string');
});

test('test:Function:verifyIdCard', () => {
  expect(leezon.verifyIdCard('522423199X')).toBe(false);
});
