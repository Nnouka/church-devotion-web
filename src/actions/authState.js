export const SET_AUTH_STATE = 'SET_AUTH_STATE';

export function setAuthState(authState) {
    return {
        type: SET_AUTH_STATE,
        authState
    }
}