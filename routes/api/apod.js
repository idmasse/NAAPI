const express = require('express')
const router = express.Router()
const apodCtrl = require('../../controllers/api/apod')
const postCtrl = require('../../controllers/api/post')

router.get('/', apodCtrl.getApod)
router.post('/save', apodCtrl.saveApod)
router.get('/savedapods', apodCtrl.getSavedApod)
router.post('/post', postCtrl.postApod)
router.get('/postedapods', postCtrl.getPostedApod)
router.get('/postedapods/all', postCtrl.getAllPostedApods)

module.exports = router