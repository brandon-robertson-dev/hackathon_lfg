//View individual character
//Edit Character
// Create Individual Character 
//Delete
const express = require('express');
const router = express.Router();
const CharacterModel = require('../models/characters');
const { checkIfUserLoggedIn } = require('../middleware/auth_middleware')
const character_utl = require('../utils/characters_utilities');
const characters = require('../models/characters');
const json = require("../file/character_option.json")

const getCharacters = function(req, res) {
  character_utl.getAllCharactersUtl(req).exec((err, character) => {
    if (err) {
      res.status(400)
      return res.send("Characters not found")
    }
    // console.log(user)
    // res.render('users/user', user)
    checkIfUserLoggedIn(req, res, 'char/characters', character)
  })
}

const getCharacter = function(req, res) {
    character_utl.getCharactersByIdUtl(req).exec((err, character) => {
        if (err) {
            res.status(400)
            return res.send("Character not found")
        }
        checkIfUserLoggedIn(req, res, 'char/character_single', character)
    })
}

const newCharacter = function(req,res) {
    console.log(json)
    checkIfUserLoggedIn(req, res, 'char/form', json)
}

const addCharacter = function(req,res) {
  character_utl.getCharsUtl(req).save((err, character) => {
    if (err) {
      res.status(400)
      return res.send("Character not saved")
    }
    // console.log(user)
    // res.render('users/form', user)
    checkIfUserLoggedIn(req, res, 'char/form', character)
  })
}

// const editUser = function(req, res) {
//   editUserProfile(req).exec((err, user) => {
//     if(err) {
//       res.status(500)
//       return res.json({
//         error: err.message
//       })
//     }
//     // res.send(user)
//     checkIfUserLoggedIn(req, res, 'users/user', user)
//   })
// }

// const deleteUser = function(req, res) {
//   deleteUserUtil(req.params.id).exec((err, user) => {
//     if(err){
//       res.status(500)
//       return res.json({
//         error: err.message
//       })
//     }
//     res.sendStatus(204)
//     res.redirect('/posts')
//   })
// }

module.exports = {
    getCharacter,
    getCharacters,
    newCharacter,
    addCharacter
}