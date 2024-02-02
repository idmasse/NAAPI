import sendRequest from './send-request'

const BASE_URL = '/api/post'

export async function postApod(apodData) {
    return sendRequest(BASE_URL, 'POST', apodData)
}

export async function getPostedApods(token) {
    return sendRequest(`${BASE_URL}/postedapods`, token)
}

export async function getAllPostedApods(token) {
    return sendRequest(`${BASE_URL}/postedapods/all`, token)
}