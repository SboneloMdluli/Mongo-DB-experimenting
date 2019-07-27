'use strict'

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
// DB Config
const db = require('./config/keys_prod').mongoURI

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true }) // Let us remove that nasty deprecation warrning :)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

app.use(express.static(__dirname))

let userRouter = require('./routes/userRouter')
let mainRouter = require('./routes/mainRouter')

app.use('/', mainRouter)
app.use('/', userRouter)

let port = process.env.PORT || 3000
app.listen(port)
console.log('Express server running on port', port)
