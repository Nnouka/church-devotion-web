import * as AppUtils from '../utils/AppUtils';
import {BASE_URL, userUrls} from './ApiUrls';

const accessToken = AppUtils.getAccessToken();

export const getApiUserDetails = (token = '') => {
    const headers = {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token.length > 0 ? token : accessToken}`,
        'Access-Control-Allow-Origin': '*'
    }
    return fetch(`${BASE_URL}${userUrls.DETAILS}`, { headers })
    .then(res => {
        if(res.ok) {
           return  res.json();
        } else {
            console.log("error", res);
        }
    }, error => console.log("error", error));
  }