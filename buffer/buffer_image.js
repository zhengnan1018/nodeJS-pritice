var fs = require('fs')
// 基本所有的 fs 模块API 的回调参数都有两个， 第一个是有错误发生时等于异常对象， 第二个参数等同于返回API 方法的执行结果
fs.readFile('../googlelogo.png', function(err, origin_buffer) {
  console.log(Buffer.isBuffer(origin_buffer));

  fs.writeFile('googlelogo_copy.png', origin_buffer, function(err) {
    if (err) console.log(err);

    // var base64Image = new Buffer(origin_buffer).toString('base64')
    var base64Image = origin_buffer.toString('base64')
    console.log(base64Image);

    var decodedImage = new Buffer(base64Image, 'base64')
    console.log(Buffer.compare(origin_buffer, decodedImage));

    fs.writeFile('logo_decoded.png', decodedImage, function(err) {
      if (err) console.log(err);
    })
  })
})
