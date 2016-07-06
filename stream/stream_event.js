var fs = require('fs')
var readStram = fs.createReadStream('201012-1203.pdf')
var n = 0

readStram.on('data', function(chunk) {
  n++
  console.log('data emits');
  console.log(Buffer.isBuffer(chunk));
  readStram.pause()
  console.log('data pause');
  setTimeout(function() {
    console.log('data pause end');
    readStram.resume()
  }, 3000)
  // console.log(chunk.toString('utf-8'));
})
 .on('readable', function() {
   console.log('data readable');
 })
 .on('end', function() {
   console.log(n);
   console.log('data end');
 })
 .on('close', function() {
   console.log('data close');
 })
 .on('error', function() {
   console.log(error);
 })
