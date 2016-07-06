var fs = require('fs')
var buf = new Buffer(1024)

// fs.readFile('test.txt', function(err, data) {
//   if (err) {
//     return console.error(err);
//   } else {
//     console.log('异步读取:' + data.toString());
//   }
// })
//
// fs.stat('test.txt', function(err, stats) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(stats.isFile());
//   }
// })
//
// fs.writeFile('test.txt', 'I am the content by write', function(err) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('The write process was succeed!');
//   }
// })
//异步打开文件
fs.open('test.txt', 'r+', function(err, fd){
  if (err) {
    console.error(err);
  } else {
    console.log(fd);
    console.log('Open file succeed!');
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
      if (err) {
        console.error(err);
      } else {
        if (bytes > 0) {
          console.log(buf.slice(0, bytes).toString());
        }
      }
    })
    //截取文件
    // fs.ftruncate(fd, 10, function(err) {
    //   console.log('**' + buf.toString());
    //   err ? console.error(err) : null
    // })
    //异步关闭文件
    fs.close(fd, function(err) {
      err ? console.error(err) : console.log('Close file succeed!');
    })
  }
})
//删除文件
// fs.unlink('toDelete.txt', function(err) {
//   err ? console.error(err) : console.log('Delete file succeed!');
// })

//创建目录
fs.mkdir('/tmp/contents/', function(err) {
  err ? console.error(err) : console.log('Create contents succeed!');
})
//读取目录
fs.readdir('/tmp/contents/', function(err, files) {
  err ? console.error(err) : console.log(files);
})
//删除目录
fs.rmdir('/tmp/contents', function(err) {
  err ? console.error(err) : console.log('Delete contents succeed!');
})
