import sendRequest from './send-request'

const BASE_URL = '/api/apod'

export async function fetchApod(date) {
    const formattedDate = date.toISOString().split('T')[0]
    return sendRequest(`${BASE_URL}?date=${formattedDate}`)
}

export async function saveApod(apodData) {
    return sendRequest(`${BASE_URL}/save`, 'POST', apodData)
}