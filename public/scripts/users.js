'use strict'
// let bcrypt = require('bcryptjs')
let userList = []
const firstNameLength = function firstNameLength (first_name) {
  if (first_name.length < 1) {
    return false
  }
  return true
}

const lastNameLength = function lastNameLength (last_name) {
  if (last_name.length < 1) {
    return false
  }
  return true
}
const emailLength = function emailLength (email) {
  if (email.length < 1) {
    return false
  }
  return true
}

const passwordLength = function passwordLength (password) {
  if (password.length < 8) {
    return false
  }
  return true
}

function matchPasswords (password, password2) {
  if (password !== password2) {
    return false
  }
  return true
}

module.exports = {
  getUsers: function () {
    return userList.length
  },

  addUser: function (newUser) {
    userList.push(newUser)
  },

  matchPasswords: matchPasswords,
  passwordLength: passwordLength,
  emailLength: emailLength,
  lastNameLength: lastNameLength,
  firstNameLength: firstNameLength
}
