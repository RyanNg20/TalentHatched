require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const path = require('path')
const cors = require("cors")

const app = express()

app.use(express.json())

app.use(cors())

app.get("/api", (req, res) => {
  res.send("Express on Vercel");
});

// app.use((req, res, next) => {
//   console.log(req.path, req.method)
//   next()
// })

// app.use('/api', routes)

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

app.listen(5000, () => {
  console.log("running on port 5000")
})
// mongoose.connect(process.env.MONG_URI)
// .then(() => {
//   app.listen(process.env.PORT, () => {
//     console.log("listening on port", process.env.PORT)
//   })
// })
// .catch((err) => {
//   console.log(err)
// })

module.exports = app