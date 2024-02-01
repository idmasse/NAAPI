const nasaService = require('../../src/utilities/apod-service')
const Apod = require('../../models/apod')
const Profile = require('../../models/profile')

async function getApod(req, res) {
    const date = req.query.date
    const apodData = await nasaService.getNasaData(date)
    res.json(apodData)
}

async function saveApod(req, res) {
    const apodData = req.body;
    const userId = req.user._id;

    try {
        let apod = await Apod.findOne({ uniqueId: apodData.uniqueId })
        if (!apod) {
            apod = await Apod.create({ 
                ...apodData, 
                uniqueId: apodData.date 
            })
        }

        const profile = await Profile.findOneAndUpdate(
            { user: userId },
            { $addToSet: { savedApods: apod._id } },
            { new: true }
        );

        res.json(profile)
    } catch (error) {
        res.status(500).json({ message: 'Error saving APOD', error: error.toString() })
    }
}

async function getSavedApod(req, res) {
    const userId = req.user._id
    const profile = await Profile.findOne({ user: userId }).populate('savedApods')
    res.json(profile.savedApods);
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

