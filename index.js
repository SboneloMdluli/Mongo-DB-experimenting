'use strict'

const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')
const flash = require('connect-flash')

const app = express()
// DB Config
const db = require('./config/keys_prod').mongoURI

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true }) // Let us remove that nasty deprecation warrning :)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

app.use(express.static(__dirname))

// Express Session Middleware
app.use(session({
  secret: 'awea',
  resave: true,
  saveUninitialized: true
}))

// Express Messages Middleware
app.use(require('connect-flash')())
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res)
  next()
})

// Passport Config
require('./config/passport')(passport)
// Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

app.get('*', function (req, res, next) {
  res.locals.user = req.user || null

  next()
})

let userRouter = require('./routes/userRouter')
let mainRouter = require('./routes/mainRouter')

app.use('/', mainRouter)
app.use('/', userRouter)

let port = process.env.PORT || 3000
app.listen(port)
console.log('Express server running on port', port)
