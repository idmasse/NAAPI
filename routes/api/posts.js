const express = require('express')
const router = express.Router()
const postCtrl = require('../../controllers/api/post')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// /api/post
router.post('/', ensureLoggedIn, postCtrl.postApod)
router.get('/postedapods', ensureLoggedIn, postCtrl.getPostedApod)
router.get('/postedapods/all', postCtrl.getAllPostedApods)

module.exports = router