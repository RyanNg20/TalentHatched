const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userScheme = new Schema({
  name: String,
  phoneNumber: String,
})

module.export = {
  User: mongoose.model('User', userScheme)
}