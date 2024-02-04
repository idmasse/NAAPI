const Apod = require('../../models/apod')
const Profile = require('../../models/profile')

async function postApod(req, res) {
    const apodData = req.body
    const userId = req.user._id
    const profile = await Profile.findOne({ user: userId }).populate('postedApods')

    if (profile.postedApods.some(postedApod => postedApod.date === apodData.date)) {
        res.status(400).json({ message: 'APOD with the same date already posted' })
    } else {
        const apod = await Apod.create({
            ...apodData,
            uniqueId: apodData.date,
            user: userId
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

async function getAllPostedApods(req, res) {
    //find all profiles that have posted apods
    const profilesWithPostedApods = await Profile.find({ postedApods: { $exists: true, $not: { $size: 0 } } })

    //extract ids of posted apods
    // const apodIds = [];
    // profilesWithPostedApods.forEach(profile => {
    //     apodIds.push(...profile.postedApods.map(apodId => apodId.toString()));
    // });

    //extract ids of psoted apods
    const apodIds = profilesWithPostedApods.reduce((ids, profile) => {
        ids.push(...profile.postedApods.map(apodId => apodId.toString()))
        return ids
    }, [])

    //find all apods with the extracted ids and populate the 'user' field
    const allPostedApods = await Apod.find({ _id: { $in: apodIds } }).populate('user').sort({ date: -1 })

    res.json(allPostedApods)
}

module.exports = {
    postApod,
    getPostedApod,
    getAllPostedApods,
}