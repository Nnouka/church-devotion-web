import {BASE_URL, userUrls} from './ApiUrls';
import {getAccessToken} from "../utils/AppUtils";
import {CONNECTION_TIMEOUT} from "./errorCodes";

const accessToken = getAccessToken();
const authHeaders = {
    'Authorization': `Bearer ${accessToken}`,
    'Access-Control-Allow-Origin': '*'
}

export const http = {
    get: (url, options = {}) => networkFetch(url, {method: 'GET', ...options}),
    post: (url, options) => networkFetch(url, {method: 'POST', ...options})
}

function networkFetch(url, {headers, ...options}) {
    return new Promise((resolve, reject) => {
        fetch(addBaseToUrl(url), {...options, headers: headers === undefined ?
                authHeaders : {...headers, ...authHeaders}})
            .then(res => {
                if(res.ok) {
                    res.json().then(
                        data => resolve(data)
                    ).catch(
                        error => reject({message: 'JSON parse error', error})
                    );
                } else {
                    res.json().then(
                        data => reject(data)
                    ).catch(
                        error => reject({message: 'JSON parse error', error})
                    );
                }
            }, error => reject({code: CONNECTION_TIMEOUT, error}));
    });
}

function addBaseToUrl(url) {
    let base = BASE_URL;
    if (url.includes('http://') ||
        url.includes('https://') ||
        url.includes(base)) {
        return url;
    }
    // if base ends with '/' remove it
    if (base.endsWith('/')) {
        base = base.substr(0, base.length - 1);
    }
    // if url does not start with '/' add it
    if (!url.startsWith('/')) {
        url = `/${url}`;
    }
    return `${base}${url}`
}