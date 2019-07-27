'use strict'
const path = require('path')
const express = require('express')
const User = require('../models/user')
const user_info = require('../public/scripts/juser')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)
const mongoose = require('mongoose')

const passport = require('passport')
require('./config/passport')(passport)
// Init app
const app = express()

// DB config
mongoose.connect('mongodb+srv://mux:<password>@cluster0-6wcnq.azure.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

let db = mongoose.connection

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
  res.redirect(path.join(__dirname, '../views', 'musix.html'))
})

mainRouter.post('/signup', function (req, res) {
  // Get the user input
  const { email, password } = req.body

  console.log(req.body)
  // check if user exists
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        // render page with error message
        res.sendFile(path.join(__dirname, '../views', 'signup.html'))
      } else {
        // register user into the data base
        let newUser = new User({
          email: email,
          password: password
        })
        // Save the user to the data base
        let hash = bcrypt.hashSync(newUser.password, salt)
        newUser.password = hash
        newUser.save(function (err) {
          if (err) {
            console.log(err)
          } else {
            console.log('redirecting')
            res.redirect('/')
          }
        })
      }
    })
})

module.exports = mainRouter
