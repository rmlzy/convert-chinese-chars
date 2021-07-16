中文简体、繁体转换工具, 支持浏览器端和 Node 端.

中文簡體、繁體転換工具, 支持瀏覧器端和 Node 端.

## 如何使用

### Node 环境

```bash
$ npm i --save convert-chinese-chars
```

```js
const { toTraditional, toSimplified } = require('convert-chinese-chars');

// 简体中文 => 繁体中文
console.log(toTraditional('中华人民共和国')); // 输出: 中華人民共和國

// 繁体中文 => 简体中文
console.log(toSimplified('中華人民共和國')); // 输出: 中华人民共和国
```

### 浏览器环境
注: 因为内置词库的原因, 体积比较大, 大概 85kb.

使用 script 标签加载 `build/convert-chinese-chars.min.js` 后, 调用 `window.ConvertChineseChars` 即可, 示例代码如下:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Demo</title>
    <script src="./build/convert-chinese-chars.min.js"></script>
  </head>
  <body>
    <script>
      const Converter = window.ConvertChineseChars;

      // 简体中文 => 繁体中文
      console.log(Converter.toTraditional('中华人民共和国')); // 输出: 中華人民共和國

      // 繁体中文 => 简体中文
      console.log(Converter.toSimplified('中華人民共和國')); // 输出: 中华人民共和国
    </script>
  </body>
</html>
```

## 声明
词库来自[funNLP](https://github.com/fighting41love/funNLP/blob/master/data/%E7%B9%81%E7%AE%80%E4%BD%93%E8%BD%AC%E6%8D%A2%E8%AF%8D%E5%BA%93/fanjian_suoyin.txt)

## License
[MIT](./LICENSE)
