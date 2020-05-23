import {BASE_URL, userUrls} from './ApiUrls';

const headers = {
    'Accept': 'application/json'
}
export const registerUser = (userRegistration, callback, errorCallback) => {
    fetch(`${BASE_URL}${userUrls.REGISTER}`, { 
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(userRegistration)
    }).then(() => callback && callback(), httpError => {
        console.log(httpError);
        return errorCallback && errorCallback(httpError.error);
      });
}
