const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  type: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  fname: {
    type: String,
    required: false,
  },
  lname: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: Number,
    required: false,
  },
  industries: {
    type: [String],
    required: false,
  },
  softSkills: {
    type: [String],
    required: false,
  },
  hardSkills: {
    type: [{skill: String, yoe: Number, instruction: String}],
    required: false,
  },
  projects: {
    type: [{title: String, location: String, description: String}],
    required: false,
  },
}, { timestamps: true })

module.exports = {
  Users: mongoose.model('Users', userSchema)
}