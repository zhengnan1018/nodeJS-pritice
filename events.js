var EventEmitter = require('events').EventEmitter

//创建 eventEmitter 对象
var event = new EventEmitter()
//位指定事件注册一个监听器
event.on('some_event', function() {
  console.log('some event emitter');
})
//位指定事件注册一个单次监听器，触发后立即解除该监听器
event.once('some_event', function() {
  console.log('I only emit once!');
})

function doSomething(thing) {
  console.log("Do " + thing);
}
event.on('some_event', doSomething)
//移除事件监听器
event.removeListener('some_event', doSomething)
event.emit('some_event', 'cording')
