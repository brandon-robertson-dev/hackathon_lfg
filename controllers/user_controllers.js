const express = require('express');
const router = express.Router();
const UserModel = require('../models/user');
const { post } = require('../routes/page_routes');
const {
  getUserProfile,
  editUserProfile,
  deleteUserUtil
} = require('../utils/user_utilities')

const getUser = function(req, res) {
  getUserProfile(req).exec((err, user) => {
    if (err) {
      res.status(400)
      return res.send("User not found")
    }
    console.log(user)
    res.render('users/user', user)
  })
}

const updateUser = function(req,res) {
  getUserProfile(req).exec((err, user) => {
    if (err) {
      res.status(400)
      return res.send("User not found")
    }
    console.log(user)
    res.render('users/form', user)
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
    res.send(user)
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
  })
}

module.exports = {
    getUser,
    editUser,
    updateUser,
    deleteUser
}