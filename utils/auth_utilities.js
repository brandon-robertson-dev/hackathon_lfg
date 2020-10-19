const User = require("../models/user")

function addUser(req) {
  let date = Date.now()
  req.body.create_date = date
  req.body.modified_date = date
  return new User (req.body)
}

module.exports = { addUser }