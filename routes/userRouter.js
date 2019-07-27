'use strict'

let path = require('path')
let express = require('express')
let bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')
let user = require('../models/user')

let userRouter = express.Router()

// ==================================	sign up =========================================
userRouter.use(bodyParser.json())
userRouter.use(bodyParser.urlencoded({ extended: true }))

userRouter.use(express.static(__dirname))

userRouter.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'signup.html'))
})

// ==================================RESTful api for sign up=========================================

userRouter.post('/api/signup', (req, res) => {
  let email = req.body.email
  let password = req.body.email

  let newUser = new user({
    email: email,
    password: password
  })

  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(newUser.password, salt, function (err, hash) {
      if (err) {
        console.log(err)
      }
      newUser.password = hash
      newUser.save(function(err){
        if(err){
          console.log(err);
          
        } else {

          res.redirect('/login');
        }
      })
    })
  })
})

module.exports = userRouter
