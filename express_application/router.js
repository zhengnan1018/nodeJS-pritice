const routers = (app) => {

  var testCallback1 = () => {
    console.log('I am callback1');
  }
  var testCallback2 = () => {
    console.log('I am callback2');
  }

  let appGet =
    app
      //在 express 上监听 get 请求
      .get('/', (request, response) => { //主页请求
        response.send('Hello Express')
        //response.send([body]) 发送响应文件
        //发送http 响应，里面的[body]参数可以是一个buffer 字符串 对象 或者数组（会转成JSON 格式响应）
      })
      // all() 方法的作用是对于一个路径上的所有请求加载中间件
      .all('/user', (request, response, next) => {
        console.log('must be excutive in all methods');
        next()
      }, [testCallback1, testCallback2]) // 调用函数数组
      // 执行时发现只有第一个回调可以执行...TODO...
      .get('/user', (request, response) => { //user 请求
        response.send('Express User')
      })
    return appGet
}

export default routers
