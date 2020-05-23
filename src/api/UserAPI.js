import * as AppUtils from '../utils/AppUtils';
import {BASE_URL, userUrls} from './ApiUrls';

const accessToken = AppUtils.getAccessToken();
const headers = {
    'Accept': 'application/json',
    'Authorization': `Bearer ${accessToken}`,
    'Access-Control-Allow-Origin': '*'
}

export const getApiUserDetails = () => {
    fetch(`${BASE_URL}${userUrls.DETAILS}`, { headers })
    .then(res => {
        if(res.ok) {
            res.json().then(response => {
                console.log(response);
                AppUtils.setUserDetails(JSON.stringify(response));
            })
        } else {
            console.log("error", res);
        }
    }, error => console.log("error", error));
  }