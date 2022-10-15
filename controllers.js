const getUser = async (req, res) => {
  const { name, phoneNumber } = req.body
  res.status(200).json({name, phoneNumber})
}

module.exports = {
  getUser
}