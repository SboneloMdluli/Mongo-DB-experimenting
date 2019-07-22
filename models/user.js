const mongoose = require('mongoose')
// user Schema
const UserSchema = mongoose.Schema({
  email: {
    type: String,
    require: true
  },

  password: {
    type: String,
    require: true
  },
 
})

module.exports = mongoose.model('User', UserSchema)
