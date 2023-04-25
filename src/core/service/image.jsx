import {BASE_URL} from "../api/mainAPI";

export const getImage = (src) => {
    if (src)
        return `${BASE_URL}${src}`
    return null
}