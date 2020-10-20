const mongoose = require('mongoose')
const mongooseBcrypt = require('mongoose-bcrypt')
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
  profile_picture: {
    type: String
  },
  characters: [{
    name: String,
    class: String,
    race: String,
    health: Integer,
  }],
  groups: [{
    groupName: String
  }],
  comments: [{
    username: String,
    comment: String
  }]
}); 


User.plugin(require('mongoose-bcrypt'))
module.exports = mongoose.model('User', User)