export const MAIN_URL = '/';
export const EVENT_URL = '/events';
export const TYPE_URL = '/types';
export const PERSON_URL = '/persons';

export const getEventURL = (id) => {
    return `${EVENT_URL}/${id}`;
}

export const getTypeURL = (id) => {
    return `${TYPE_URL}/${id}`;
}

export const getPersonURL = (id) => {
    return `${PERSON_URL}/${id}`;
}
