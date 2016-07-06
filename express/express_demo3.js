var express = require('../node_modules/express')
var app = express()

app.use(express.static('../public'))
app.get('/', function(request, response) {
  response.send('Hello Node.js')
})

var server = app.listen(8081, function() {
  var host = server.address().address
  var port = server.address().port
  console.log('访问地址为：http://%s:%s', host, port);
})
