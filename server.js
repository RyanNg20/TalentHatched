require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const path = require('path')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use('/api', routes)

app.use(express.static(path.join(__dirname, "./frontend/build")))

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./frontend/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err)
      }
    }
  )
})

mongoose.connect(process.env.MONG_URI)
.then(() => {
  app.listen(process.env.PORT, () => {
    console.log("listening on port", process.env.PORT)
  })
})
.catch((err) => {
  console.log(err)
})

module.exports = app