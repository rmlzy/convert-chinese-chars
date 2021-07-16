import { toTraditional, toSimplified } from '../src/index';

test('Invalid input', () => {
  expect(toTraditional('123123')).toBe('123123');
  expect(toTraditional('abcd')).toBe('abcd');
  expect(toTraditional('    ')).toBe('    ');
  expect(toTraditional('~,.?')).toBe('~,.?');
});

test('Convert Simplified Chinese to Traditional', () => {
  expect(toTraditional('简体中文')).toBe('簡體中文');
  expect(toTraditional('繁体中文')).toBe('繁體中文');
  expect(toTraditional('中华人民共和国')).toBe('中華人民共和國');
});

test('Convert Traditional Chinese to Simplified', () => {
  expect(toSimplified('簡體中文')).toBe('简体中文');
  expect(toSimplified('繁體中文')).toBe('繁体中文');
  expect(toSimplified('中華人民共和國')).toBe('中华人民共和国');
});
