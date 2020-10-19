const express = require('express')
const router = express.Router()
const { authRedirect, authorise } = require('../middleware/auth_middleware')
const {
  registerCreate,
  registerNew,
  logout,
  loginNew,
  loginCreate
} = require('../controllers/auth_controller')

router.get('/register', registerNew)
router.post('/register', registerCreate)
router.get('/logout', logout)
router.get('/login', loginNew)

module.exports = router