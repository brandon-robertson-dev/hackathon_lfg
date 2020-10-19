const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Post = new Schema({
	title: {
    type: String,
		required: true
	},
	create_date: {
		type: Date,
		required: true
	},
	modified_date: {
		type: Date,
		required: true
	},
	username: {
    type: String,
		required: true
	},
	content: {
    type: String,
		required: true
  },
  comments: [{
      username: String,
      userId: String,
      comment: String
  }],
})

module.exports = mongoose.model("Post", Post)