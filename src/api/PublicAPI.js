import {http} from "./authInterceptor";
import {publicResourcesUrls} from "./ApiUrls";

export const loadCountriesFromApi = () => {
    return new Promise((resolve, reject) => {
        http.get(publicResourcesUrls.LIST_COUNTRIES).then(
            data => {
                resolve(data);
            }
        ).catch(error => {
            reject(error);
        })
    })
}