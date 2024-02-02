const express = require('express')
const router = express.Router()
const apodCtrl = require('../../controllers/api/apod')

router.get('/', apodCtrl.getApod)
router.post('/save', apodCtrl.saveApod)
router.get('/savedApods', apodCtrl.getSavedApod)
router.post('/post', apodCtrl.postApod)
router.get('/postedapods', apodCtrl.getPostedApod)

module.exports = router