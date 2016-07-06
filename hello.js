//exports 是node.js 提供的用于模块公开的接口对象
// exports.world = function() {
//   console.log('Hello world!');
// }

//将对象封装在模块中
function Hello() {
  var name
  this.setName = function(thyName) {
    name = thyName
  }
  this.sayHello = function() {
    console.log('Hello ' + name);
  }
}
module.exports = Hello
