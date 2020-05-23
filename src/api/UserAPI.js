import * as AppUtils from '../utils/AppUtils';
import {BASE_URL, userUrls} from './ApiUrls';

const accessToken = AppUtils.getAccessToken();
const headers = {
    'Accept': 'application/json',
    'Authorization': `Bearer ${accessToken}`
}

export const getApiUserDetails = () => {
    fetch(`${BASE_URL}${userUrls.DETAILS}`, { headers })
        .then(res => res.json())
        .then(response => {
            console.log(response);
            AppUtils.setUserDetails(JSON.stringify(response));
        }, httpError => {
            console.log(httpError);
          });
  }