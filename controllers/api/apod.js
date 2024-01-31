const nasaService = require('../../src/utilities/apod-service')
const Apod = require('../../models/apod')

async function getApod(req, res) {
    const date = req.query.date
    const apodData = await nasaService.getNasaData(date)
    res.json(apodData)
}

async function saveApod(req, res) {
    const apodData = req.body
    const userId = req.user._id

    const apod = new Apod({
        ...apodData,
        user: userId,
    })

    const savedApod = await apod.save()
    res.json(savedApod)
}

async function getSavedApod(req, res) {
    const savedApods = await Apod.find({ user: req.user._id })
    res.json(savedApods)
}

async function postApod(req, res) {
    const apodData = req.body
    const userId = req.user._id
}

module.exports = {
    getApod,
    saveApod,
    getSavedApod,
    postApod
}

