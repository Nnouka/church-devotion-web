import {SET_CURRENT_LANG} from '../actions/currentLang';

export default function currentLang(state = 'en', action) {
    switch (action.type) {
        case SET_CURRENT_LANG :
            return action.currentLang;
        default :
            return state;
    }
}