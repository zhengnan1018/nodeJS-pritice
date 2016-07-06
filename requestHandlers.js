var exec = require('child_process').exec

function start(response, postData) {
  console.log("Request handler 'start' was called.");

  // exec('find /', {timeout: 10000, maxBuffer: 20000 * 1024}, function(error, stdout, stderr){
  //   response.writeHead({'Content-Type': 'text/plian'})
  //   response.write(stdout)
  //   response.end()
  // })

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead({'Content-Type': 'text/plian'})
    response.write(body)
    response.end()
}

function upload(response, postData) {
  console.log("Request handler 'upload' was called.");
  response.writeHead({'Content-Type': 'text/plian'})
  response.write("You've sent" + postData)
  response.end()
}

exports.start = start
exports.upload = upload
