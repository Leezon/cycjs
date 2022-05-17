import getType from '../src/modules/getType';

test('modules:getType', () => {
  expect(getType('123')).toBe('string');
});
