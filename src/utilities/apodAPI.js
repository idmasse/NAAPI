import sendRequest from './send-request'

const BASE_URL = '/api/apod'

export async function fetchApod(date) {

    const userTimeZoneOffset = date.getTimezoneOffset();
    date.setMinutes(date.getMinutes() - userTimeZoneOffset);

    const formattedDate = date.toISOString().split('T')[0]
    return sendRequest(`${BASE_URL}?date=${formattedDate}`)
}

export async function saveApod(apodData) {
    return sendRequest(`${BASE_URL}/save`, 'POST', apodData)
}

export async function getSavedApod(token) {
    return sendRequest(`${BASE_URL}/savedapods`, token)
}

export async function getApodDetail(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}