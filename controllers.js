const models = require('./models')
// works
// email password, return if found user
const logIn = async (req,res) => {
  const {email, password} = req.body

  try {
    const user = await models.Users.find({email, password}).sort({createdAt: -1})
    if (user[0]) {
      res.status(200).json(user[0])
    }
    else res.status(400).send("User not found")
  } catch (err) {
    res.status(400).json({error: err})
  }
}
//works
//email password, check if email already there, if not make new
const signUp = async (req,res) => {
  const {email, password} = req.body
  try {
    const user = await models.Users.find({email}).sort({createdAt: -1})
    if (!user[0]) {
      const newUser = await models.Users.create({email, password})
      res.status(200).json(newUser)
    }
    else res.status(400).send("Email already in use!")
  } catch (err) {
    res.status(400).json({error: err})
  }
}

const updateUser = async(req, res) => {
  const {_id, email, password, name, phoneNumber, industries, softSkills, skills, projects} = req.body
  try {
    const user = await models.Users.updateOne({_id}, {email, password, name, phoneNumber, industries, softSkills, skills, projects})
    res.status(200).json(user)
  } catch (err) {
    res.status(400).json({error: err})
  }
}

const getUser = async (req, res) => {
  const { _id } = req.body
  try {
    const user = await models.Users.findById(_id)
    if (user) res.status(200).json(user)
    else res.status(400).send("Couldn't find User")
  } catch (err) {
    res.status(400).json({error: err})
  }
}

module.exports = {
  logIn,
  signUp,
  updateUser,
  getUser,
}