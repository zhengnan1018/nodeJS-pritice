var util = require('util')

console.log('进程' + process.argv[2] + '执行');
console.log(process.argv);
// 通过process.argv 获取命令行参数
// 第一个命令行参数 从process.argv[2] 开始

console.log(process.stdout.write(util.format.apply(util, arguments) + '\n'));
