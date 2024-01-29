const express = require('express')
const router = express.Router()
const apodCtrl = require('../../controllers/api/apod')

router.get('/', apodCtrl.getApod)

module.exports = router