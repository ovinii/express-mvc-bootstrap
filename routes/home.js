const express = require('express')
const router = express.Router()

const homeControl = require('../controllers/home')

router.get('/', homeControl.home)

module.exports = router