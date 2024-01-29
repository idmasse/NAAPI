const fetch = require('node-fetch')

const NASA_ENDPOINT = 'https://api.nasa.gov/'

async function getNasaData(endpoint) {
    try {
        const url = `${NASA_ENDPOINT}${endpoint}?api_key=${process.env.NASA_API_KEY}`
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`NASA API Error: ${response.status}`)
        }
        return await response.json()
    } catch(err) {
        throw new Error(`Error fetching data from NASA API: ${err.message}`)
    }
}

module.exports = {
    getNasaData
}