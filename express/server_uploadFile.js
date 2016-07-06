var express = require('../node_modules/express')
var app = express()
var fs = require('fs')

var bodyParser = require('../node_modules/body-parser')
var multer = require('../node_modules/multer')

// 没有挂载路径的中间件 应用的每一个请求都会执行该中间件
app.use(express.static('../public'))
app.use(bodyParser.urlencoded({extended: false}))
//multer(opts)
//允许传入一个配置对象， 一个最基础的配置属性就是 dest, 指定上传文件的保存目录， 如果不提供配置对象，
// 则文件会被保存在内存中，而不会写入磁盘
// 参数 fileFilter , 一个函数，控制哪些文件允许上传
// 参数 limits 限制上传的数据大小
app.use(multer({dest: '/tmp/'}).array('image'))

//.single(fieldname)
//允许通过参数 fieldname 指定的文件名的 单文件上传， 该文件将存储在 request.file 中

//.array(fieldname[,maxCount])
//允许通过参数fieldname 指定的文件名的多文件上传，maxCount 指定最多上传的文件数，超出时将抛出异常，
//文件数组存储在 request.files 中

//.fields(fields)
// 允许用过参数 fields 指定的文件列表上传， fields 是一个数组 [{name: 'avatar', maxCount: 5}, {name: , maxCount:}]

// .any()
// 允许传入的任何文件 一个文件数组将被存储在 request.files 中

app.get('/index_uploadFile.htm', function(request, response) {
  //__dirname 指 当前文件目录
  response.sendFile(__dirname + '/' + 'index_uploadFile.htm')
})

app.post('/file_upload', function(request, response) {
  //打印上传的文件信息
  console.log(request.files[0]);
  var des_file = __dirname + '/' + request.files[0].originalname
  fs.readFile(request.files[0].path, function(err, data) {
    if (!err) {
      fs.writeFile(des_file, request.files[0], function(err, data) {
        if (err) {
          console.error('Error: ' + err);
        } else {
          res = {
            message: 'File Uploaded Successful！',
            filename: request.files[0].originalname
          }
          console.log(res);
          response.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'})
          response.end(JSON.stringify(res))
        }
      })
    }
  })
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
