let express = require('../node_modules/express') //加载 express
let app = express() //实例化一个 express 应用

//在 express 上监听 get 请求
app
  .get('/', function(request, response) { //主页请求
    response.send('Hello Express')
    //response.send([body]) 发送响应文件
    //发送http 响应，里面的[body]参数可以是一个buffer 字符串 对象 或者数组（会转成JSON 格式响应）
  })
  .get('/user', function(request, response) { //user 请求
    response.send('Express User')
  })
  .listen(8002)
