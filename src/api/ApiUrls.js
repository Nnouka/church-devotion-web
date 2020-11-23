export const BASE_URL = 'https://church-devotion.herokuapp.com';
// export const BASE_URL = 'http://localhost:8080';
export const userUrls = {
  LOGIN: '/api/public/user/login',
  DETAILS: '/api/protected/user/details',
  REGISTER: '/api/public/user/register',
  TOKEN_REFRESH: '/api/public/user/token/refresh',
  FORGOT_PASSWORD: '/api/public/user/password/forgot',
  RESET_PASSWORD: '/api/public/user/password/reset'
};
const congregationBaseUri = '/api/protected/congregations';
export const congregationUrls = {
  getCongById : (id) => `${congregationBaseUri}/${id}`,
  updateCongLocation : (id) => `${congregationBaseUri}/${id}/location/update`,
  updateCongName : (id) => `${congregationBaseUri}/${id}/name/update`,
  CREATE_CONGREGATION : `${congregationBaseUri}/create`,
  LIST_CONGREGATIONS : `${congregationBaseUri}/list`
}
const publicResourceBaseUri = '/api/public/resources';
export const publicResourcesUrls = {
  LIST_COUNTRIES : `${publicResourceBaseUri}/countries`,
  getCountryWithRegions : (id) => `${publicResourceBaseUri}/countries/${id}/regions`,
  getRegionWithCities : (id) => `${publicResourceBaseUri}/countries/regions/${id}/cities`,
  loadFile : (filename) => `${publicResourceBaseUri}/logos/${filename}`,
  loadWidget : (fileId) => `${publicResourceBaseUri}/logos/${fileId}`,
}

