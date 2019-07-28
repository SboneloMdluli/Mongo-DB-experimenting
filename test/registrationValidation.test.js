'use strict'
let user = require('../public/scripts/user')

test('Passwords do not match', () => {
  let password = 'testing'
  let password2 = 'notthesame'
  expect(user.matchPasswords(password, password2)).toBeFalsy()
})

test('Passwords match', () => {
  let password = 'testing'
  let password2 = 'testing'
  expect(user.matchPasswords(password, password2)).toBeTruthy()
})

test('Password is less 8 characters', () => {
  let passwd = ''
  expect(user.passwordLength(passwd)).toBeFalsy()
})

test('Password is at least 8 characters', () => {
  let passwd = '12345678'
  expect(user.passwordLength(passwd)).toBeTruthy()
})
