import { getType } from '../src';

test('test function getType:', () => {
  expect(getType('123')).toBe('string');
});
