var express = require('../node_modules/express')
var app = express()

app.get('/', function(request, response) {
  response.send('Hello Node.js')
  //request.app 访问express实例
  // console.log(request.app);

  //request.baseUrl 获取路由当前安装的URL路径
  console.log(request.baseUrl);

  //request.params 获取路由的parameters
  console.log(request.params);

  // console.log(response.status());
})

var server = app.listen(8081, function() {
  var host = server.address().address
  var port = server.address().port
  console.log(server.address());
  console.log('访问地址为：http://%s:%s', host, port);
})
