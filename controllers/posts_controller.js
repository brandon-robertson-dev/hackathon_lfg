const {getAllPostsUtil, getPostByIdUtil, addPostUtil, deletePostUtil, updatePostUtil, addCommentUtil} = require("../utils/posts_utilities")
const { checkIfUserLoggedIn } = require('../middleware/auth_middleware')

// gets all posts = getAllPosts
function getAllPostsCont(req,res) {
  getAllPostsUtil(req).sort({
    modified_date: -1
  }).exec((err, posts) => {
    if(err) {
      res.status(500)
      return res.json({
        error: err.message
      })
    }
    checkIfUserLoggedIn(req, res, 'posts/view_all', posts)
  })
}

// gets post by id = getPostById
function getPostByIdCont(req,res) {
  getPostByIdUtil(req).exec((err, post) => {
    if (err) {
        res.status(400);
        return res.send("Post not found")
    }
    checkIfUserLoggedIn(req, res, 'posts/view_single', post)
  })
}

// adds post to db = addPost
function addPostCont(req,res) {
  addPostUtil(req).save((err, post) => {
    if(err) {
      res.status(500)
      return res.json({
        error: err.message
      })
    }
    res.status(201)
    res.redirect('/posts')
  })
}

function addCommentCont(req, res) {
  addCommentUtil(req).then((post) => {
    res.status(200).redirect(`/posts/${post._id}`)
  }).catch((err) => {
    res.status(500).json({err})
  })
}

function getNewPostFormCont(req, res) {
  // res.render('posts/new_post')
  checkIfUserLoggedIn(req, res, 'posts/new_post', null)
}

function newCommentFormCont(req, res) {
  getPostByIdUtil(req).exec((err, post) => {
    if (err) {
        res.status(400);
        return res.send("Post not found");
    }
    // console.log(post)
    // res.render('posts/new_comment', post)
    checkIfUserLoggedIn(req, res, 'posts/new_comment', post)
  })
}

// deletes post from db = deletePost
function deletePostCont(req, res) {
  deletePostUtil(req.params.id).exec((err, post) => {
    if(err){
      res.status(500)
      return res.json({
        error: err.message
      })
    }
    res.sendStatus(204)
    res.redirect('/posts')
  })
}

// updates the post in db = updatePost
function updatePostCont(req, res) {
  updatePostUtil(req).exec((err, post) => {
    if(err) {
      res.status(500)
      return res.json({
        error: err.message
      })
    }
    checkIfUserLoggedIn(req, res, 'posts/view_single', post)
  })
}

module.exports = {newCommentFormCont, getNewPostFormCont, getAllPostsCont, getPostByIdCont, addPostCont, deletePostCont, updatePostCont, addCommentCont}