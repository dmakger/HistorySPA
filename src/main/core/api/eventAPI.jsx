import {BASE_URL_API, getURL, request} from "../../../core/api/mainAPI";

export const EVENT_URL_API = `${BASE_URL_API}/events`

export async function getDetailEvent(id, params) {
    const url = getURL(`${EVENT_URL_API}/${id}/`, params)
    return await request('GET', url)
}