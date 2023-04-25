import {BASE_URL_API, getURL, request} from "../../../core/api/mainAPI";

export const PERSON_URL_API = `${BASE_URL_API}/persons`

export async function getDetailPerson(id, params) {
    const url = getURL(`${PERSON_URL_API}/${id}/`, params)
    return await request('GET', url)
}