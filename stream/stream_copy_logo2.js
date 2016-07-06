var fs = require('fs')
//创建一个可读流
var readStram = fs.createReadStream('201012-1203.pdf')
// 创建一个可写流
var writeStream = fs.createWriteStream('201012-1203-copy.pdf')

readStram.on('data', function(chunk) {
  // writeStream.write(chunk)
  //防爆仓控制 说明数据还在缓存区
  if (writeStream.write(chunk) === false) {
    console.log('still cached');
    //暂停数据读取
    readStram.pause()
  }
})

readStram.on('end', function() {
  writeStream.end()
})
// 说明数据已经写入到目标了
writeStream.on('drain', function() {
  console.log('data drains');
  // 恢复数据读取
  readStram.resume()
})
