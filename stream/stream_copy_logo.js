var fs = require('fs')
var source = fs.readFileSync('../buffer/googlelogo_copy.png')

fs.writeFileSync('stream_copy_logo.png', source)
