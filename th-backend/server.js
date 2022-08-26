require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')
const routes = require('./routes')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use('/api', routes)

mongoose.connect(process.env.MONG_URI)
.then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
  })
})
.catch((err) => {
  console.log(err)
})