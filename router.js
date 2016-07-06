function route(handler, pathname, reaponse, postData) {
  console.log('About to route a request for' + pathname)
  if (typeof handler[pathname] === 'function') {
    handler[pathname](reaponse, postData)
  } else {
    console.log("No request handler found for " + pathname);
    reaponse.writeHead(404, {
      'Content-Type': 'text/plain'
    })
    reaponse.write('404 not found')
    reaponse.end()
  }
}

exports.route = route
