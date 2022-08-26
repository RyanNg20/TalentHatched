const express = require('express')
const {
  upsertUser,
} = require('./controllers')

const router = express.Router()

router.post('/users', upsertUser)

module.exports = router