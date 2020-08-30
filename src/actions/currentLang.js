export const SET_CURRENT_LANG = 'SET_CURRENT_LANG';

export function setCurrentLang(currentLang) {
    return {
        type: SET_CURRENT_LANG,
        currentLang
    }
}