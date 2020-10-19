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
    res.redirect(`${user.id}`)
  }
  catch(err){
    console.log(err)
  }
}

function loginNew(req, res) {
  res.render('authentication/login')
}

function loginCreate(req, res) {
  const {email, password} = req.body
  try {
    User.findOne({ where: {email: `${email}`}}).then(function (user) {
      if (!user) {
        res.redirect('/login');
      } else if (!)
    })
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
  loginNew,
  loginCreate
}