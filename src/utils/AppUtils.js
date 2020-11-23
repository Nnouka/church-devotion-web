import {StorageKeys} from "./AppStorageKeys";

export const getLocale = () => localStorage.getItem(StorageKeys.LOCALE) || 'en';
export const setLocale = (locale) => localStorage.setItem(StorageKeys.LOCALE, locale);
export const setAccessToken = (accessToken) => localStorage.setItem(StorageKeys.ACCESS_TOKEN, accessToken);
export const getAccessToken = () => localStorage.getItem(StorageKeys.ACCESS_TOKEN);
export const getAuthState = () => localStorage.getItem(StorageKeys.AUTHENTICATED) === 'true';
export const clearLocalStorage = () => {
    localStorage.clear();
    localStorage.setItem(StorageKeys.VISITED, 'true');
}
export const getVisitState = () => localStorage.getItem(StorageKeys.VISITED) === 'true';
export const setAuthenticationState = (state) => localStorage.setItem(StorageKeys.AUTHENTICATED, String(state));
export const setRefreshToken = (refreshToken) => localStorage.setItem(StorageKeys.REFRESH_TOKEN, refreshToken);
export const getRefreshToken = () => localStorage.getItem(StorageKeys.REFRESH_TOKEN);
export const setTokenExpiresIn = (expiresIn) => {
    const expires = new Date().getTime() + expiresIn * 1000;
    localStorage.setItem(StorageKeys.TOKEN_EXPIRES_AT, String(expires));
}
export const getTokenExpiresAt = () => Number(localStorage.getItem(StorageKeys.TOKEN_EXPIRES_AT));
export const setUserDetails = (detailStr) => localStorage.setItem(StorageKeys.USER_DETAILS, detailStr);
export const getUserDetails = () => JSON.parse(localStorage.getItem(StorageKeys.USER_DETAILS));
export const getCountriesFromStorage = () => JSON.parse(localStorage.getItem(StorageKeys.COUNTRIES));
export const setCountriesInStorage = (countries) => {
    let them = {};
    for (let country of countries) {
        them = {
            ...them,
            [country.id] : {
                ...country
            }
        }
    }
    localStorage.setItem(StorageKeys.COUNTRIES, JSON.stringify(them));
}
export const logout = () => clearLocalStorage();