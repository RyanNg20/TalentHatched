const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  name: {
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
  skills: {
    type: [{skillName: String, yoe: Number, instruction: String}],
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