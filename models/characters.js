const mongoose = require('mongoose')
const mongooseBcrypt = require('mongoose-bcrypt')
const Schema = mongoose.Schema

const Character = new Schema({
  name: String,
  age: Number,
   race: String,
   class_type: {
    class_type: String,
    level: Number,
    hit_die: Number
   },
   AbilityScores: [{
       Strength: Number,
       Dexterity: Number,
       Intelligence: Number,
       Constitution: Number,
       Wisdom: Number,
       Charisma: Number
   }],
   Skills: [{
       Arcana: Number,
       Acrobatics: Number,
       AnimalHandling: Number,
       Atheletics: Number,
       Deception: Number,
       History: Number,
       Insight: Number,
       Intimidation: Number,
       Investigation: Number,
       Medicine: Number,
       Nature: Number,
       Perception: Number,
       Performance: Number,
       Persuasion: Number,
       Religion: Number,
       SleightOfHand: Number,
       Stealth: Number,
       Survival: Number
   }],
   Languages: [{
       First: String,
       Second: String,
       Third: String,
       Forth: String,
       Fifth: String
   }],
   
}); 


Character.plugin(require('mongoose-bcrypt'))
module.exports = mongoose.model('Character', Character)