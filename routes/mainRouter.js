'use strict'
let path = require('path')
let express = require('express')
// let db = require('../config/db')

let mainRouter = express.Router()

mainRouter.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'index.html'))
})

mainRouter.get('/signup', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'registration.html'))
})

mainRouter.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'login.html'))
})

mainRouter.post('/login', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'musix.html'))
})

module.exports = mainRouter
