export const SET_COUNTRIES = 'SET_COUNTRIES';
export const SET_COUNTRIES_FROM_STORAGE = 'SET_COUNTRIES_FROM_STORAGE'
export function setCountries(countries) {
    return {
        type: SET_COUNTRIES,
        countries
    }
}

export function setCountriesFromStorage(countries) {
    return {
        type: SET_COUNTRIES_FROM_STORAGE,
        countries
    }
}