var express = require('../node_modules/express')
var app = express()

//主页输出 Hello GET
app.get('/', function(request, response) {
  console.log('主页 GET 请求');
  response.send('Hello GET')
})

//POST 请求
app.post('/', function(request, response) {
  console.log('主页 POST 请求');
  response.send('Hello POST')
})

// del_user 页面响应
app.delete('/del_user', function(request, response) {
  console.log('/del_user 相应 DELETE 请求');
  response.send('删除页面')
})

// /list_user 页面 GET 请求
app.get('/list_user', function(request, response) {
  console.log('/list_user GET 请求');
  console.log('用户列表页面');
})

// 对 ab*cd 正则匹配页面的 GET 请求
app.get('/ab*cd', function(request, response) {
  console.log('/ab*cd GET 请求');
  response.send('正则匹配')
})

var server = app.listen(8082, function() {
  var host = server.address().address
  var port = server.address().port

  console.log('访问地址为： http://%s%s', host, port);
})
