const user = require('../models/user')
const UserModel = require('../models/user')
const { addUser } = require('../utils/auth_utilities')

function registerNew(req, res) {
  res.render('authentication/register')
}

async function registerCreate(req, res) {
  const { username, email, password } = req.body
  console.log(req.body)
  try{
    const user = await UserModel.create({ username, email, password })
    req.user = user
    console.log(user)
    console.log('YOU ARE HERE')
    res.redirect(`${user._id}`)
  }
  catch(err){
    console.log(err)
  }
}

function logout(req, res) {
  req.session.destroy(() => {
    res.redirect('/')
  })
}

module.exports = {
  registerNew,
  registerCreate,
  logout,
}