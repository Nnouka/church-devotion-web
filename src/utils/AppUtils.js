export const getLocale = () => localStorage.getItem('locale') || 'en';
export const setLocale = (locale) => localStorage.setItem('locale', locale);
export const setAccessToken = (accessToken) => localStorage.setItem('accessToken', accessToken);
export const getAccessToken = () => localStorage.getItem('accessToken');
export const getAuthState = () => localStorage.getItem('authenticated') === 'true';
export const clearLocalStorage = () => {
    localStorage.clear();
    localStorage.setItem('visited', 'true');
}
export const getVisitState = () => localStorage.getItem('visited') === 'true';         
export const setAuthenticationState = (state) => localStorage.setItem('authenticated', String(state));
export const setRefreshToken = (refreshToken) => localStorage.setItem('refreshToken', refreshToken);
export const getRefreshToken = () => localStorage.getItem('refreshToken');
export const setTokenExpiresIn = (expiresIn) => {
    const expires = new Date().getTime() + expiresIn * 1000;
    localStorage.setItem('tokenExpiresIn', String(expires));
}
export const getTokenExpiresAt = () => Number(localStorage.getItem('tokenExpiresAt'));
export const setUserDetails = (detailStr) => localStorage.setItem('userDetails', detailStr);
export const getUserDetails = () => JSON.parse(localStorage.getItem('userDetails'));
export const logout = () => clearLocalStorage();