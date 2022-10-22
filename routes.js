const express = require('express')
const router = express.Router()
const {
  getUser,
  logIn,
  signUp,
  updateUser,
} = require('./controllers')

router.get('/user', logIn)

router.get('/user/id', getUser)

router.post('/user', signUp)

router.put('/user', updateUser)

module.exports = router