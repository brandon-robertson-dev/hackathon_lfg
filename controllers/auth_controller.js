const UserModel = require('../models/user')
const passport = require('passport')

function registerNew(req, res) {
  res.render('authentication/register')
}

async function registerCreate(req, res) {
  const { username, email, password } = req.body
  const user = await UserModel.create({ username, email, password })
  req.login(user, (err) => {
    if(err) {
      return next(err)
    }
    res.redirect('/posts')
  })
}

function logout(req, res) {
  req.session.destroy(() => {
    res.redirect('/posts')
  })
}

function loginNew(req, res) {
  res.render('authentication/login')
}

function loginCreate(req, res, next) {
  const loginFunc = passport.authenticate('local',
  {
    successRedirect: '/posts',
    failureRedirect: '/users/login'

  })
  loginFunc(req, res, next)
}

module.exports = {
  registerNew,
  registerCreate,
  logout,
  loginNew,
  loginCreate
}