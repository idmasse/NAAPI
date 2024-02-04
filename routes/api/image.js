const express = require('express')
const router = express.Router()
const imageCtrl = require('../../controllers/api/image')

// /api/apod
router.get('/', imageCtrl.getImages)

module.exports = router