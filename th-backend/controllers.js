const models = require('./models')


const upsertUser = async (req, res) => {
  // const { token } = req.body
  // console.log('hiii')
  // const ticket = await client.verifyIdToken({
  //   idToken: token,
  //   audience: process.env.CLIENT_ID
  // })
  // const { name, email, picture } = ticket.getPayload()

  // const user = await models.User.upsert({
  //   where: { email },
  //   update: { name, picture },
  //   create: { name, email, picture }
  // })

  // res.status(201)
  // res.json(user)
}

module.exports = {
  upsertUser,
}