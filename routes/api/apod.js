const express = require('express')
const router = express.Router()
const apodCtrl = require('../../controllers/api/apod')

router.get('/', apodCtrl.getApod)
router.post('/save', apodCtrl.saveApod)
router.get('/savedApods', apodCtrl.getSavedApod)
router.post('/postapod', apodCtrl.postApod)

module.exports = router