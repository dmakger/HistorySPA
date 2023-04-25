import {BASE_URL_API, getURL, request} from "../../../core/api/mainAPI";

export const TYPE_URL_API = `${BASE_URL_API}/types`

export async function getTypes(params) {
    const url = getURL(`${TYPE_URL_API}/`, params)
    return await request('GET', url)
}

export async function getDetailType(id, params) {
    const url = getURL(`${TYPE_URL_API}/${id}/`, params)
    return await request('GET', url)
}