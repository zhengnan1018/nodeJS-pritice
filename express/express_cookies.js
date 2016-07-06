var express = require('../node_modules/express')
var cookieParser = require('../node_modules/cookie-parser')

var app = express()
app.use(cookieParser())

app.get('/', function(request, response) {
  console.log('Cookies: ' + request.cookies);
})

app.listen(8081)
