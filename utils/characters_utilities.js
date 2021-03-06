const Character = require("../models/characters")
const fetch = require("node-fetch")


// gets all chars = getChars
function getAllCharactersUtil(req) {
	return Character.find()
}

// gets chars by id = getChar
function getCharacterByIdUtil(req) {
  return Character.findById(req.params.id)
}

// adds Chars to db = makeChar
function addCharsUtil(req) {
  // console.log('This is inside charsUtil:', req.body)
  //name, age, race, class, str, dex, const, int, wis, char, skills, languages
   //references not working for reasons?
     // let dndClass = req.Character.class.class_type
  let skills = req.body.Skills
  // let languages = req.body.Character.Languages
  // let abilities = req.body.Character.AbilityScores
  
  //destructured values not working?
  // const {race, name, age} = req.body.Character
  
  //not currently being used
  // const {level, hit_die} = req.body.Character.class_type
  
  const data = {
    race: req.body.race,
    name: req.body.name,
    age: req.body.age,
    strength: req.body.Strength,
    dexterity: req.body.Dexterity,
    intelligence: req.body.Intelligence,
    constitution: req.body.Constitution,
    wisdom: req.body.Wisdom,
    charisma: req.body.Charisma,
    
    // lang1: languages[0].First,
    // lang2: languages[0].Second,
    // lang3: languages[0].Third,
    // lang4: languages[0].Four,
    // lang5: languages[0].Five,
    class_type: req.body.class
  }
  let charSkills = {}

  for(let i = 0; i< skills.length; i++){
    console.log(skills[i])
    // charSkills.skills[i] = {skills[i]: i}
  }
  console.log('skills: ', charSkills)

// skills.forEach((skill) => {
//   return skill.toUpperCase(): skill
// })

  req.body = Object.assign(data)
  // console.log('this is inside the new req:', req.body)
  return new Character(req.body)
}



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

module.exports = {
  getAllCharactersUtil,
  getCharacterByIdUtil,
  addCharsUtil,
}