const nasaService = require('../../src/utilities/apod-service')
const Apod = require('../../models/apod')
const Profile = require('../../models/profile')

async function getApod(req, res) {
    const date = req.query.date
    const apodData = await nasaService.getNasaData(date)
    res.json(apodData)
}

async function saveApod(req, res) {
    const apodData = req.body
    const userId = req.user._id
    const profile = await Profile.findOne({ user: userId }).populate('savedApods')

    if (profile.savedApods.some(savedApod => savedApod.date === apodData.date)) {
        res.status(400).json({ message: 'APOD with the same date already saved' })
    } else {
        const apod = await Apod.create({
            ...apodData,
            uniqueId: apodData.date
        })

        profile.savedApods.push(apod)
        await profile.save()

        res.json(profile)
    }
}

async function getSavedApod(req, res) {
    const userId = req.user._id
    const profile = await Profile.findOne({ user: userId }).populate('savedApods')
    res.json(profile.savedApods)
}

async function postApod(req, res) {
    const apodData = req.body
    const userId = req.user._id
    const profile = await Profile.findOne({ user: userId}).populate('postedApods')

    if (profile.postedApods.some(postedApod => postedApod.date === apodData.date)) {
        res.status(400).json({ message: 'APOD with the same date already posted'})
    } else {
        const apod = await Apod.create({
            ...apodData,
            uniqueId: apodData.date
        })

        profile.postedApods.push(apod)
        await profile.save()

        res.json(profile)
    }
}

async function getPostedApod(req, res) {
    const userId = req.user._id
    const profile = await Profile.findOne({ user: userId }).populate('postedApods')
    res.json(profile.postedApods)
}

module.exports = {
    getApod,
    saveApod,
    getSavedApod,
    postApod,
    getPostedApod,
}

