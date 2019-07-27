'use strict'
$(function () {
  $('#registrationForm').submit(function (e) {
    e.preventDefault()
    var email = $('#email').val()
    var password = $('#password').val()
    var password2 = $('#password2').val()
    console.log(email)
    let user = {
      email: email,
      password: password
    }

    alert(email)

    if (passwordLength(password) === false) {
      alert('Password should be at least 8 charcters')
    }

    if (matchPasswords(password, password2) === false) {
      alert('Passwords do not match')
    }

    console.log(user)

    if (matchPasswords(password, password2) == true && passwordLength(password) == true) {
      $.ajax({
        url: '/signup',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(user),
        success: function () {
          console.log(user)
          window.location.replace('../views/login.html')
        }
      })
    }
  })

  function passwordLength (password) {
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
