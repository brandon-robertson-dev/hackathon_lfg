const { checkIfUserLoggedIn } = require('../middleware/auth_middleware')
const { getUserComments, getUserProfile, editUserProfile, deleteUserUtil,} = require('../utils/user_utilities')

const getUser = function(req, res) {
  getUserProfile(req).exec((err, user) => {
    if (err) {
      res.status(400)
      return res.send("User not found")
    }
    checkIfUserLoggedIn(req, res, 'users/user', user)
  })
}

const getComments = function(req, res) {
  getUserComments(req).exec((err, comments) => {
    if(err) {
      res.status(400)
      return res.send("Comments not found")
    }
    checkIfUserLoggedIn(req, res, 'blank', comments)
  })
}

const updateUser = function(req,res) {
  getUserProfile(req).exec((err, user) => {
    if (err) {
      res.status(400)
      return res.send("User not found")
    }
    checkIfUserLoggedIn(req, res, 'users/form', user)
  })
}

const editUser = function(req, res) {
  editUserProfile(req).exec((err, user) => {
    if(err) {
      res.status(500)
      return res.json({
        error: err.message
      })
    }
    checkIfUserLoggedIn(req, res, 'users/user', user)
  })
}

const deleteUser = function(req, res) {
  deleteUserUtil(req.params.id).exec((err, user) => {
    if(err){
      res.status(500)
      return res.json({
        error: err.message
      })
    }
    res.sendStatus(204)
    res.redirect('/posts')
  })
}

module.exports = {
  getUser,
  editUser,
  updateUser,
  deleteUser,
  getComments
}