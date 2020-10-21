const { upload } = require("../app");

function uploadProfilePicture(req, res) {
  upload(req, res, (err) => {
    if(err){
      console.log(err)
    } else {
      console.log(req.file)
    }
  })
}

module.exports = {
  uploadProfilePicture
}