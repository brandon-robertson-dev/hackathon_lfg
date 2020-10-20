const express = require('express')
const router = express.Router()
const {
    getCharacter,
    addCharacter,
    getCharacters,
    newCharacter
} = require('../controllers/characters_controller')

// NEW Characters FORM
// GET on 'characters/new
// Links to a form for a new post
router.get('/new', newCharacter)

// READ
// GET on '/characters'
// Returns all characters
router.get('/', getCharacters)

// READ
// GET on '/characters/:id'
// Returns post with given id
router.get('/:id', getCharacter)

// CREATE
// POST on '/characters'
// Creates a new post
router.post('/new', addCharacter)

// DELETE
// DELETE on '/characters/:id'
// Deletes a post with id
// router.delete('/:id', deletePostCont)

// UPDATE
// PUT on 'posts/:id'
// Updates a post with id
// router.put('/:id', updatePostCont)

module.exports = router;