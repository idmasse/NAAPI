const express = require('express')
const router = express.Router()
const apodCtrl = require('../../controllers/api/apod')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// /api/apod
router.get('/', apodCtrl.getApod)
router.post('/save', ensureLoggedIn, apodCtrl.saveApod)
router.get('/savedapods', ensureLoggedIn, apodCtrl.getSavedApod)
router.get('/:id', apodCtrl.getApodDetail)
router.delete('/:id', apodCtrl.delete)

module.exports = router