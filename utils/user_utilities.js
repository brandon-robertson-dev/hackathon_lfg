const User = require("../models/user")
const mongoose = require('mongoose')

const getUserProfile = function(req) {
  return User.findById(req.params.id)
}
const editUserProfile = function(req) {
  req.body.modified_date = Date.now()
  return User.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
}
module.exports = {
  getUserProfile,
  editUserProfile,
}