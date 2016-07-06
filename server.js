var formidable = require('formidable')
var http = require('http')
var url = require('url')

function start(route, handler) {
  function _onRequset(request, response) {
    var postData = ''
    var pathname = url.parse(request.url).pathname
    console.log('Requset for' + pathname + 'received');

    request.setEncoding('utf8')
    request.addListener('data', function(postDataChunk) {
      postData += postDataChunk
      console.log("Received trunk data" + postDataChunk + ".");
    })
    request.addListener('end', function() {
      route(handler, pathname, response, postData)
    })
  }
  http.createServer(_onRequset).listen(2016)
  console.log('Server has started!');
}

exports.start = start
