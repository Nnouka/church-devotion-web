import {SET_NAVIGATION_HISTORY} from "../actions/navHistory";

export default function history(state = null, action) {
    switch (action.type) {
        case SET_NAVIGATION_HISTORY :
            return action.history;
        default :
            return state;

    }
}