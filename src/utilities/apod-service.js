const NASA_APOD_ENDPOINT = 'https://api.nasa.gov/planetary/apod'

async function getNasaData(date) {
    try {
        const url = `${NASA_APOD_ENDPOINT}?api_key=${process.env.NASA_API_KEY}&date=${date}`
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`NASA API Error: ${response.status}`)
        }
        return await response.json()
    } catch (err) {
        throw new Error(`Error fetching data from NASA API: ${err.message}`)
    }
}

module.exports = {
    getNasaData
}