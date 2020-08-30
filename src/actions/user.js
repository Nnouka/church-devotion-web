import {login} from '../api/LoginAPI'
import {hideLoading, showLoading} from "react-redux-loading";
import {getApiUserDetails} from "../api/UserAPI";
import * as AppUtils from "../utils/AppUtils";
import {setAuthState} from "./authState";

export const RECEIVE_AUTHED_USER = 'RECEIVE_AUTHED_USER';

export function receiveAuthedUser(user) {
    return {
        type: RECEIVE_AUTHED_USER,
        user
    }
}

export function handleLogin(credentials, callback) {
    return(dispatch) => {
        dispatch(showLoading());
        return login(credentials).then(
            () => {
                dispatch(setAuthState(true));
                getApiUserDetails().then(response => {
                    AppUtils.setUserDetails(JSON.stringify(response));
                    dispatch(receiveAuthedUser(response));
                    dispatch(hideLoading());
                    if (callback) {
                        callback();
                    }
                })
            }
        );
    }
}