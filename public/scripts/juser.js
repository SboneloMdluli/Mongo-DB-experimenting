'use strict'
$(function () {
  $('#registrationForm').submit(function (e) {
    e.preventDefault()
    var first_name = $('#first_name').val()
    var last_name = $('#last_name').val()
    var email = $('#email').val()
    var password = $('#password').val()
    var password2 = $('#password2').val()

    let user = {
      firstName: first_name,
      lastName: last_name,
      email: email,
      password: password
    }

    if (emailLength(email) === false) {
      $('#email').after('<span class="error">Email is required</span>')
    }

    if (passwordLength(password) === false) {
      $('#password').after('<span class="error">Password should be at least 8 charcters</span>')
    }

    if (matchPasswords(password, password2) === false) {
      $('#password').after('<span class="error">Passwords do not match</span>')
    }

    if (emailLength(password) == true && matchPasswords(password, password2) == true && passwordLength(password) == true) {
      $.ajax({
        url: '/api/signup',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(user),
        success: function () {
          window.location.replace('../views/main.html')
        }
      })
    }
  })

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
    $('#password').after('')
    $('#password2').after('')
    return true
  }
})
