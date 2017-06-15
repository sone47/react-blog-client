require('babel-register');

// 翻译 ES6 的语法和方法
require('babel-polyfill');

// 出现错误时跟踪到源代码的行数
require('source-map-support').install();

require('css-modules-require-hook/preset');

require('./server.dev.js');