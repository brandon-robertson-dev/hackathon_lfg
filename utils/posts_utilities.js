let Post = require("../models/post")

// gets all posts = getPosts
function getAllPostsUtil(req) {
	return Post.find()
}

// gets post by id = getPost
function getPostByIdUtil(req) {
  return Post.findById(req.params.id)
}

// adds post to db = makePost
function addPostUtil(req) {
  let date = Date.now()
  req.body.create_date = date
  req.body.modified_date = date
  return new Post(req.body)
}

// adds comment to post = makeComment
async function addCommentUtil(req) {
  let post = await Post.findById(req.params.postId)
  let newComment = {
    username: req.body.username,
    comment: req.body.comment
  }
  post.comments.push(newComment)
  return Post.findByIdAndUpdate(req.params.postId, post, {
    new: true
  })
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

// // helper for testing
// function loadData(file) {
// 	dataFile = file
// 	blogPosts = JSON.parse(fs.readFileSync(file, 'utf8'))
// }

// // helper function to generate unique id
// function getNextId() {
// 	let ids = Object.keys(blogPosts).sort()
// 	let lastId = (ids.length > 0) ? ids[ids.length-1] : 0
// 	return parseInt(lastId) + 1
// }

module.exports = {getAllPostsUtil, getPostByIdUtil, addPostUtil, addCommentUtil, deletePostUtil, updatePostUtil}