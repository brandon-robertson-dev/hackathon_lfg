const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
  username: {
    type: String,
    require: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    require: true
  },
  characters: {
    type: Array
  },
  groups: {
    type: Array
  },
  comments: [{
    username: String,
    comment: String
  }]
})

module.exports = mongoose.model('user', User)