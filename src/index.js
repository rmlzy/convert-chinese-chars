import lib from './lib.json';

const t2sCache = {};
const s2tCache = {};

function isString(value) {
  return Object.prototype.toString.call(value) === '[object String]';
}

function isArray(value) {
  return Object.prototype.toString.call(value) === '[object Array]';
}

function isChinese(value) {
  const reg = /[^\u4E00-\u9FA5]/;
  return !reg.test(value);
}

function find(input, target) {
  if (target === 'Traditional' && s2tCache[input]) {
    return s2tCache[input];
  }
  if (target === 'Simplified' && t2sCache[input]) {
    return t2sCache[input];
  }

  if (!isChinese(input)) {
    return input;
  }
  let output = input;
  const len = lib.length;
  for (let i = 0; i < len; i++) {
    const arr = lib[i];
    if (!(isArray(arr) && arr.length === 2)) {
      continue;
    }
    if (arr.indexOf(input) !== -1) {
      if (target === 'Simplified') {
        output = arr[1];
      }
      if (target === 'Traditional') {
        output = arr[0];
      }
      break;
    }
  }

  // add to cache
  if (target === 'Traditional') {
    s2tCache[input] = output;
  }
  if (target === 'Simplified') {
    t2sCache[input] = output;
  }
  return output;
}

function convert(input, target) {
  if (!isString(input)) {
    return input;
  }
  if (input === '') {
    return input;
  }
  const chars = input.split('');
  const output = [];
  chars.forEach((char) => {
    output.push(find(char, target));
  });
  return output.join('');
}

export function toTraditional(input) {
  return convert(input, 'Traditional');
}

export function toSimplified(input) {
  return convert(input, 'Simplified');
}
