const models = require('./models')
// works
// email password, return if found user
const logIn = async (req,res) => {
  const {email, password} = req.query

  try {
    const user = await models.Users.find({email, password}).sort({createdAt: -1})
    console.log(user[0])
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
  if (email && password) {
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
  else res.status(300).send("No Email or Passowrd")
}

const updateUser = async(req, res) => {
  const {uid, type, email, password, fname, lname, phoneNumber, industries, softSkills, hardSkills, projects} = req.body

  try {
    const user = await models.Users.updateOne({_id: uid}, {type, email, password, fname, lname, phoneNumber, industries, softSkills, hardSkills, projects})
    res.status(200).json(user)
  } catch (err) {
    res.status(400).json({error: err})
  }
}

const getUser = async (req, res) => {
  try {
    const user = await models.Users.findById(req.params.id)
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