'use strict'

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

  matchPasswords: matchPasswords,
  passwordLength: passwordLength,
  emailLength: emailLength

}
