
import * as AppUtils from '../utils/AppUtils';
import * as LOGIN from '../api/LoginAPI';
import * as SIGNUP from '../api/SignUpAPI';

export const hasPermission = (names = []) => {
  const permissions = AppUtils.getUserDetails() == null ? [] : AppUtils.getUserDetails().privileges;
  for (const p of names) {
    if (permissions.findIndex((f) => f === p) > -1) return true;
  }
  return false;
}

export const login = (credentials, callback, errorCallback) => LOGIN.login(credentials, callback, errorCallback);
export const signup = (userRegistration, callback, errorCallback) => SIGNUP.registerUser(userRegistration, callback, errorCallback);

export const logout = (callback) => {
  AppUtils.clearLocalStorage();
  // navigate to the login page using react router dom
  return callback && callback();
}

export const isAdmin = () => hasPermission(['ADMIN']);
export const isUser = () => hasPermission(['USER']);
export const isGuest = () => hasPermission();

