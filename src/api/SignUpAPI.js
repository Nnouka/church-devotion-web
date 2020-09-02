import {BASE_URL, userUrls} from './ApiUrls';
import * as AppUtils from "../utils/AppUtils";

const headers = {
    'Accept': 'application/json'
}
export const registerUser = (userRegistration) => {
    return new Promise((resolve, reject) => {
        fetch(`${BASE_URL}${userUrls.REGISTER}`, {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userRegistration)
        }).then(
            res => {
                if(res.ok) {
                    resolve()
                } else {
                    res.json().then(errorRes => {
                        console.log(errorRes);
                        reject(errorRes);
                    })
                }
            }
        ).catch(
            error => reject(error)
        )
    });

}
