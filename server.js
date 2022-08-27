require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')
const routes = require('./routes')
const path = require('path')

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
    console.log(`listening on port ${process.env.PORT || 4000}`)
  })
})
.catch((err) => {
  console.log(err)
})

// Step 1:
app.use(express.static(path.resolve(__dirname, "./th-frontend/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "../th-frontend/build", "index.html"));
});