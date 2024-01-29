const nasaService = require('../../src/utilities/nasa-service')

const getApod = async(req, res) => {
    try {
        const apodData = await nasaService.getNasaData('planetary/apod')
        res.json(apodData)
    } catch(error) {
        console.error(`Error fetching APOD data`, error)
        res.status(500).send(error.message)
    }
}

module.exports = { getApod }

// const fetch = require('node-fetch')

// const NASA_ENDPOINT = 'https://api.nasa.gov'

// const getApod = async (req, res) => {
//     try {
//         const fetchRes = await fetch(`${NASA_ENDPOINT}/planetary/apod?api_key=${process.env.NASA_API_KEY}`)
//         if (!fetchRes.ok) {
//             throw new Error(`NASA API Error: ${fetchRes.status}`)
//         }
//         const apodData = await fetchRes.json()
//         res.json(apodData)
//     } catch(error) {
//         console.error('Error fetching NASA data', error)
//         res.status(500).send(error.message)
//     }
// }


// module.exports = { getApod }

