const express = require('express')
const router = express.Router()
const user_controller = require("../controllers/user_controllers")

module.exports = router

router.get("/:id", user_controller.getUser)

router.get("/:id/edit", user_controller.updateUser)

router.put("/:id/edit", user_controller. editUser)

router.delete("/:id/delete", user_controller.deleteUser)

//app.delete("/:id", deleteUser)