const express = require('express')
const router = express.Router()
const { authRedirect, authorise } = require('../middleware/auth_middleware')
const {
  registerCreate,
  registerNew,
  logout
} = require('../controllers/auth_controller')

router.get('/register', registerNew)
router.post('/register', registerCreate)
router.get('/logout', logout)

module.exports = router