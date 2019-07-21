'use strict'

let path = require('path')
let express = require('express')

let app = express()
app.use(express.static(__dirname))

let mainRouter = require('./routes/mainRouter')

app.use('/', mainRouter)

let port = process.env.PORT || 3000
app.listen(port)
console.log('Express server running on port', port)
