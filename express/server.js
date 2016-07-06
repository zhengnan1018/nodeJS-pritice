var express = require('../node_modules/express')
var app = express()

app.use(express.static('../public'))

app.get('/index.htm', function(request, response) {
  console.log(__dirname);
  response.sendFile(__dirname + '/' + 'index.htm')
})

app.get('/process_get', function(request, response) {
  res = {
    first_name: request.query.first_name,
    last_name: request.query.last_name
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
