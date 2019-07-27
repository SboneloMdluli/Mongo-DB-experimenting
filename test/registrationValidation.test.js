'use strict'
let user = require('../public/scripts/users')

test('A new user is added to the system after creating account', () => {
  let newUser = {}
  newUser.email = 'test@email.com'
  newUser.password = '1234'
  user.addUser(newUser)
  expect(user.getUsers()).toBeGreaterThan(0)
})

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
