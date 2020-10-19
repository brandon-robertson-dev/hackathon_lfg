const express = require('express')
const router = express.Router()
const {
  getAllPostsCont,
  getPostByIdCont,
  addPostCont,
  deletePostCont,
  updatePostCont,
  addCommentCont,
  getNewPostFormCont,
  newCommentFormCont
} = require('../controllers/posts_controller')

// NEW POST FORM
// GET on 'posts/new
// Links to a form for a new post
router.get('/new', getNewPostFormCont)

// READ
// GET on '/posts'
// Returns all posts
router.get('/', getAllPostsCont)

// READ
// GET on '/posts/:id'
// Returns post with given id
router.get('/:id', getPostByIdCont)

// CREATE
// POST on '/posts'
// Creates a new post
router.post('/', addPostCont)

// DELETE
// DELETE on '/posts/:id'
// Deletes a post with id
router.delete('/:id', deletePostCont)

// UPDATE
// PUT on 'posts/:id'
// Updates a post with id
router.put('/:id', updatePostCont)

router.get('/:id/new_comment', newCommentFormCont)
// CREATE
// POST on 'posts/:id/comments
// Adds a comment to the post with given id
router.post('/:postId/comments', addCommentCont)

module.exports = router;