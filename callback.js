var fs = require('fs')

//阻塞代码实例
// var data = fs.readFileSync('test.txt')
// console.log(data.toString());
// console.log('1 Program has been finished');

//非阻塞代码实例
fs.readFile('test.txt', function(err, data) {
  if (err) {return console.error(err)}
  console.log(data.toString());
})
console.log('2 Program has been finished');
