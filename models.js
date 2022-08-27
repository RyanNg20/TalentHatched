const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  picture: {
    type: String,
    required: false,
  }
})

module.exports = {
  User: mongoose.model('User', userSchema)
}