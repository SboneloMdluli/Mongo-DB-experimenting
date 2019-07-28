'use strict'

let express = require('express')
let bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')
const passport = require('passport')
let user = require('../models/user')

let userRouter = express.Router()
// Passport Config

// ==================================	sign up =========================================
userRouter.use(bodyParser.json())
userRouter.use(bodyParser.urlencoded({ extended: true }))

userRouter.use(express.static(__dirname))
// Passport Config
require('../config/passport')(passport)
// Passport Middleware
userRouter.use(passport.initialize())
userRouter.use(passport.session())

// Login Process
userRouter.post('/api/login', function (req, res, next) {
  passport.authenticate('local', {
    successRedirect: '/main',
    failureRedirect: '/login',
    failureFlash: true
  })(req, res, next)
  console.log(req.body)
})

// ==================================RESTful api for sign up=========================================

userRouter.post('/api/signup', (req, res) => {
  let email = req.body.email
  let password = req.body.email
  console.log(email)
  let newUser = new user({
    email: email,
    password: password
  })

  bcrypt.genSalt(10, function (_err, salt) {
    bcrypt.hash(newUser.password, salt, function (err, hash) {
      if (err) {
        console.log(err)
      }
      newUser.password = hash
      newUser.save(function (err) {
        if (err) {
          console.log(err)
        } else {
          res.redirect('/login')
        }
      })
    })
  })
})

module.exports = userRouter
