import sendRequest from "./send-request"

const BASE_URL = '/api/images'

export async function fetchImages() {
    return sendRequest(`${BASE_URL}`)
}