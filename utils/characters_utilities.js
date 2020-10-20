const Character = require("../models/characters")
const fetch = require("node-fetch")


const fetchDNDRace = (url) => {
    fetch("https://www.dnd5eapi.co/api/races/")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(console.log("Error"))
}

const fetchDNDClass = (url) => {
    fetch("https://www.dnd5eapi.co/api/classes/")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(console.log("Error"))

}

const fetchDNDSubClass = (url) => {
    fetch("https://www.dnd5eapi.co/api/subclasses/")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(console.log("Error"))

}

const fetchDNDAbilityScore = (url) => {
    fetch("https://www.dnd5eapi.co/api/ability-scores/")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(console.log("Error"))

}

const fetchDNDSkills = (url) => {
    fetch("https://www.dnd5eapi.co/api/skills/")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(console.log("Error"))

}

const fetchDNDLanguages = (url) => {
    fetch("https://www.dnd5eapi.co/api/languages/")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(console.log("Error"))

}

const fetchDNDSpells = (url) => {
    fetch("https://www.dnd5eapi.co/api/spells/")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(console.log("Error"))

}

const fetchDNDFeatures = (url) => {
    fetch("https://www.dnd5eapi.co/api/features")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(console.log("Error"))

}


// gets all chars = getChars
function getAllCharactersUtil(req) {
	return Character.find()
}

// gets chars by id = getChar
function getCharacterByIdUtil(req) {
  return Character.findById(req.params.id)
}

// adds post to db = makePost
function addCharsUtil(req) {
  let date = Date.now()
  let name = req.Character.name
  let age = req.Character.age
  let race = req.Character.race
  let dndClass = req.Character.class.class
  let level = req.Character.class.level
  let hit_die = req.Character.class.hit_die
  let subClass = req.Character.subClass
  let strength = req.Character.AbilityScores.Strength
  let dexterity = req.Character.AbilityScores.Dexterity
  let intelligence = req.Character.AbilityScores.Intelligence
  let constitution = req.Character.AbilityScores.Constitution
  let wisdom = req.Character.AbilityScores.Wisdom
  let charisma = req.Character.AbilityScores.Charisma
  let arcana = req.Character.Skills.Arcana
  let acrobatics = req.Character.Skills.Arcobatics
  let animalhandling = req.Character.Skills.AnimalHandling 
  let athletics = req.Character.Skills.Athletics
  let deception = req.Character.Skills.Deception
  let history = req.Character.Skills.History
  let insight = req.Character.Skills.Insight
  let intimidation = req.Character.Skills.Intimidation
  let investigation = req.Character.Skills.Investiation
  let medicine = req.Character.Skills.Medicine
  let nature = req.Character.Skills.Nature
  let perception = req.Character.Skills.Perception 
  let performance = req.Character.Skills.Performance 
  let persuasion = req.Character.Skills.Persuasion
  let religion = req.Character.Skills.Religion
  let sleightofhand = req.Character.Skills.SleightOfHand
  let stealth = req.Character.Skills.Stealth
  let survival = req.Character.Skills.Survival
  let lang1 = req.Character.Languages.First
  let lang2 = req.Character.Languages.Second
  let lang3 = req.Character.Languages.Third
  let lang4 = req.Character.Languages.Four
  let lang5 = req.Character.Language.Five
  let spells = req.Character.Spells 
  let features = req.Character.Features
  req.body.create_date = date
  req.body.modified_date = date
  req.body.name = name
  req.body.age = age 
  req.body.race = race
  req.body.class = dndClass
  req.body.level = level 
  req.body.hit_die = hit_die
  req.body.subClass = subClass
  req.body.strength = strength
  req.body.dexterity = dexterity
  req.body.constitution = constitution
  req.body.wisdom = wisdom
  req.body.charisma = charisma
  req.body.intelligence = intelligence
  req.body.arcana = arcana
  req.body.acrobatics = acrobatics
  req.body.animalhandling = animalhandling
  req.body.athletics = athletics
  req.body.deception = deception
  req.body.history = history 
  req.body.insight = insight
  req.body.intimidation = intimidation
  req.body.investigation = investigation
  req.body.medicine = medicine
  req.body.nature = nature
  req.body.perception = perception
  req.body.performance = performance
  req.body.persuasion = persuasion
  req.body.religion = religion
  req.body.sleightofhand = sleightofhand
  req.body.stealth = stealth
  req.body.survival = survival
  req.body.lang1 = lang1
  req.body.lang2 = lang2 
  req.body.lang3 = lang3
  req.body.lang4 = lang4
  req.body.lang5 = lang5  
  req.body.spells = spells
  req.body.features = features
  return new Character(req.body)
}

// // adds comment to post = makeComment
// async function addCommentUtil(req) {
//   let post = await Post.findById(req.params.postId)
//   let newComment = {
//     username: req.user.username,
//     userId: req.user._id,
//     comment: req.body.comment
//   }
//   post.comments.push(newComment)
//   return Post.findByIdAndUpdate(req.params.postId, post, {
//     new: true
//   })
// }

// deletes post from db = removePost
function deletePostUtil(id) {
  return Post.findByIdAndRemove(id)
}

// updates the post in db = changePost
function updatePostUtil(req) {
  req.body.modified_date = Date.now()
  return Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
}

