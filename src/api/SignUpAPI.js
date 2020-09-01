import {BASE_URL, userUrls} from './ApiUrls';

const headers = {
    'Accept': 'application/json'
}
export const registerUser = (userRegistration) => {
    return fetch(`${BASE_URL}${userUrls.REGISTER}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(userRegistration)
    });
}
