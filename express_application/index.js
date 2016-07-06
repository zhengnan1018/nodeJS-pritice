import routers from './router.js'

let express = require('../node_modules/express')
let app = express()

// console.log(routers(app));
routers(app).listen(8002)
