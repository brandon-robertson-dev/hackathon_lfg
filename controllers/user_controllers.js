const express = require('express');
const router = express.Router();
const UserModel = require('../models/user')

const getUser = function(req, res) {
    res.send("success")
    //res.render(UserModel.find())
}

const updateUser = function(req,res) {
    res.send("success")
}

const editUser = function(req, res) {
    res.send("success")
}

const deleteUser = function(req, res) {
    res.send("yay")
}




module.exports = {
    getUser,
    editUser,
    updateUser,
    deleteUser
}