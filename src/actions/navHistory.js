export const SET_NAVIGATION_HISTORY = 'SET_NAVIGATION_HISTORY';

export function setNavigationHistory(history) {
    return {
        type: SET_NAVIGATION_HISTORY,
        history
    }
}