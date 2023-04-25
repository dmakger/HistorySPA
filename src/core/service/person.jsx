export const getShortFullName = (lastname, username, pastname) => {
    return `${username.at(0)}. ${pastname.at(0)}. ${lastname}`
}

export const getFullName = (lastname, username, pastname) => {
    return `${lastname} ${username} ${pastname}`
}

export const getDate = (date) => {
    const result = date.split('-')
    return `${result[2]}.${result[1]}.${result[0]}`
}

export const getGapDate = (start, end) => {
    return `(${getDate(start)} - ${getDate(end)})`
}