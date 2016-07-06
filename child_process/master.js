var fs = require('fs')
var child_process = require('child_process')


for (var i = 0; i < 3; i++) {
  var workerProcess = child_process.exec('node support.js '+i, function(err, stdout, stderr) {
    if (err) {
      console.log(err.stack);
      console.log('Error: ' + err.code);
      console.log('single received: ' + err.signal);
    }
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
  })

  workerProcess.on('exit', function(code) {
    console.log('子进程已退出， 退出码：' + code);
    // 状态码：0 程序做完所有的事情后正常退出
    // 状态码：1 代码中捕获到异常，需要立即退出
  })
}
