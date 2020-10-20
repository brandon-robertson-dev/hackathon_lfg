const mongoose = require('mongoose')
const mongooseBcrypt = require('mongoose-bcrypt')
const Schema = mongoose.Schema

const Character = new Schema({
  name: String,
  age: Integer,
   race: String,
   class: {
    class: String,
    level: Integer,
    hit_die: Integer
   },
   subClass: String,
   AbilityScores: [{
       Strength: Integer,
       Dexterity: Integer,
       Intelligence: Integer,
       Constitution: Integer,
       Wisdom: Integer,
       Charisma: Integer
   }],
   Skills: [{
       Arcana: Integer,
       Acrobatics: Integer,
       AnimalHandling: Integer,
       Atheletics: Integer,
       Deception: Integer,
       History: Integer,
       Insight: Integer,
       Intimidation: Integer,
       Investigation: Integer,
       Meditation: Integer,
       Nature: Integer,
       Perception: Integer,
       Performance: Integer,
       Persuasion: Integer,
       Religion: Integer,
       SleightOfHand: Integer,
       Stealth: Integer,
       Survival: Integer
   }],
   Languages: [{
       First: String,
       Second: String,
       Third: String,
       Forth: String,
       Fifth: String
   }],
   Spells: [{

   }],
   Features: [{

   }],
   
}); 


User.plugin(require('mongoose-bcrypt'))
module.exports = mongoose.model('User', User)