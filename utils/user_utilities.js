const User = require("../models/user")
const Post = require("../models/post")

const getUserProfile = function(req) {
  return User.findById(req.params.id)
}

const editUserProfile = function(req) {
  req.body.modified_date = Date.now()
  return User.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
}

const addUserProfilePicture = function(req) {
  req.body.modified_date = Date.now()
  return User.findByIdAndUpdate(req.params.id, { profile_picture: req.file.path }, { new: true })
}

const deleteUserUtil = function(id) {
  return User.findByIdAndRemove(id)
}

const getUserComments = function(id) {
  let user = Post.aggregate().match({"comments.userId": `5f8e392e50626a09b6c9052f`}).allowDiskUse(true)
  console.log(user)
}

module.exports = {
  getUserProfile,
  editUserProfile,
  deleteUserUtil,
  addUserProfilePicture,
  getUserComments
}