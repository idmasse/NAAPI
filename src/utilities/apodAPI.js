import sendRequest from './send-request'

const BASE_URL = '/api/apod'

export async function fetchApod(date) {
    const formattedDate = date.toISOString().split('T')[0]
    return sendRequest(`${BASE_URL}?date=${formattedDate}`)
}

export async function saveApod(apodData) {
    return sendRequest(`${BASE_URL}/save`, 'POST', apodData)
}

export async function getSavedApod(token) {
    return sendRequest(`${BASE_URL}/savedApods`, token)
}

export async function postApod(apodData) {
    return sendRequest(`${BASE_URL}/post`, 'POST', apodData)
}

export async function getPostedApods(token) {
    return sendRequest(`${BASE_URL}/postedapods`, token)
}

// export async function shareApod() {
//     return sendRequest(`${BASE_URL}/shareapod`)
// }