const express = require('express')
const router = express.Router()
const user_controller = require("../controllers/user_controllers")
const { authRedirect, authorise } = require('../middleware/auth_middleware')
const {
  registerCreate,
  registerNew,
  logout
} = require('../controllers/auth_controller')

router.get('/register', registerNew)

router.post('/register', registerCreate)

router.get('/logout', logout)

router.get("/:id", user_controller.getUser)

router.get("/:id/edit", user_controller.updateUser)

router.put("/:id/edit", user_controller. editUser)

router.delete("/:id/delete", user_controller.deleteUser)

//app.delete("/:id", deleteUser)

module.exports = router