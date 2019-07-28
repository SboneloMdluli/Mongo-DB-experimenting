'use strict'
let path = require('path')
const passport = require('passport')
let express = require('express')

let mainRouter = express.Router()

require('../config/passport')(passport)
// Passport Middleware
mainRouter.use(passport.initialize())
mainRouter.use(passport.session())

mainRouter.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'index.html'))
})

mainRouter.get('/signup', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'registration.html'))
})

mainRouter.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'login.html'))
})

mainRouter.get('/main', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'main.html'))
})

module.exports = mainRouter
