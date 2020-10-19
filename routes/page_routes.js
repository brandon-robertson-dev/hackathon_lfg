const express = require('express')
const router = express.Router()
const {
  index,
  dashboard
} = require('../controllers/page_controller')
const { authorise } = require('../middleware/auth_middleware')

router.get('/', index)
router.get('/dashboard', authorise, dashboard)

module.exports = router