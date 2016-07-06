var express = require('../node_modules/express')
var app = express()
//node.js 中间件 处理JSON Raw Text URL 编码数据
var bodyParser = require('../node_modules/body-parser')

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(express.static('../public'))

app.get('/index_post.htm', function(request, response) {
  console.log(__dirname);
  response.sendFile(__dirname + '/' + 'index_post.htm')
})

app.post('/process_post', urlencodedParser, function(request, response) {
  res = {
    first_name: request.body.first_name,
    last_name: request.body.last_name
  }
  console.log(res);
  response.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });
  response.end(JSON.stringify(res))
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
