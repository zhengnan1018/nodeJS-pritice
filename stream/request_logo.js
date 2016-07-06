var http = require('http')
var fs = require('fs')
var request = require('request')

http
  .createServer(function(request, response) {
    // fs.readFile('../googlelogo.png', function(err, data) {
    //   if (err) {
    //     response.end('file not exist!')
    //   } else {
    //     response.writeHead(200, {'Content-Type': 'text/html'})
    //     response.end(data)
    //   }
    // })
    console.log(request);
    // fs.createReadStream('../buffer/googlelogo_copy.png').pipe(response)
    request('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')
      .pipe(response)
  })
  .listen(8090)
