var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
  a: 'comment',
  m: 'addnew',
  os: 'pc',
  isshare: 0,
  uid: '5771f9d845972ea2068b45c7',
  sid: '57715c5d9cf71f41048b45e8',
  content: '测试评论333333333！',
  appid: 'e8fcff106c8f'
})

var options = {
  hostname: 'commentn.huanqiu.com',
  port: 80,
  path: '/api/v2',
  method: 'POST',
  headers: {
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'en-US,en;q=0.8',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Length': postData.length,
    'Content-Type': 'application/x-www-form-urlencoded',
    'Cookie': 'parenturl=http%3A%2F%2Fopinion.huanqiu.com%2F1152%2F2016-06%2F9090871.html; _HUANQIU_AUTH_ID=702f7zTQvml0%2Fm9fzATWUu%2Bmw%2BBxgSw9BeoVg%2Fwnj0mP4LoACuE%2F3LTzwUmWn7SSt9T2%2B5EiMh4NKRd1eplgirMjFPdqqxOWv8HBqscicP8HKIOYufiXYG3ZhI6kxrtmkg61CXt13wc7rYMgm65HoUHNH8ciVzWaIHjAHaRna%2Ffdl6%2Brmas4%2F%2FkjFbsrD1G7UA6zgaO2%2Fx2PEfStgtp3x947Imoq%2FL9RFCTQNbeBsyAYloxlmDBNeFTSlzyIDyS2b%2B5VfXk20k%2FdOU%2BtpAVwLCbaSMev7783ZOFdm8dMYlcGZzNqBSvhl2sxJN2norhw; uid=5771f9d845972ea2068b45c7; openid=77EAFE217F41E02713AD073E7EE96D8C; avatar=http%3A%2F%2Fq.qlogo.cn%2Fqqapp%2F100224785%2F77EAFE217F41E02713AD073E7EE96D8C%2F100; nickname=%E6%9C%A8%E5%8D%97; source=qq; user[appid]=77EAFE217F41E02713AD073E7EE96D8C; user[access_token]=7AA0999C92753D0426FE1400B1827377; user[opens]=b2b8ea8e756574203e1a02f77356dcda; user[source]=qq; Hm_lvt_1fc983b4c305d209e7e05d96e713939f=1467087479; Hm_lpvt_1fc983b4c305d209e7e05d96e713939f=1467087616; QINGCLOUDELB=547c31c3c3d2146e14e57847dfedffac3afeacfdc92c42dffd558de7882fd220|V3H57|V3H5c',
    'Host': 'commentn.huanqiu.com',
    'If-Modified-Since': '0',
    'Origin': 'http://commentn.huanqiu.com',
    'Pragma': 'no-cache',
    'Referer': 'http://commentn.huanqiu.com/assets/HQ_dataPedal.v2.html',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.84 Safari/537.36',
  }
}
//客户端模式请求
var req = http.request(options, function(res) {
  console.log('Status: ' + res.statusCode);
  console.log('headers: ' + JSON.stringify(res.headers));

  res.on('data', function(chunk) {
    console.log(Buffer.isBuffer(chunk));
    console.log(typeof chunk);
  })

  res.on('end', function() {
    console.log('评论完毕');
  })
})

req.on('error', function(err){
  console.error(err.message);
})

req.write(postData)
req.end()

// 更便捷的 get api
// http.get(url, function(response) {
//   response.on('data', function(chunk){})
//   response.on('end', cb)
// })
