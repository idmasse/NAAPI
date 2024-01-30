const nasaService = require('../../src/utilities/apod-service')
const Apod = require('../../models/apod')

async function getApod(req, res) {
    const date = req.query.date
    const apodData = await nasaService.getNasaData(date)
    res.json(apodData)
}

async function saveApod(req, res) {
    const apodData = req.body 
    const apod = new Apod(apodData)
    const savedApod = await apod.save() 
    res.json(savedApod)
}

module.exports = {
    getApod,
    saveApod
}

