const User = require("../models/user")

const getUserProfile = function(req) {
  return User.findById(req.params.id)
}

const editUserProfile = function(req) {
  req.body.modified_date = Date.now()
  return User.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
}

const deleteUserUtil = function(id) {
  return User.findByIdAndRemove(id)
}

module.exports = {
  getUserProfile,
  editUserProfile,
  deleteUserUtil,
}