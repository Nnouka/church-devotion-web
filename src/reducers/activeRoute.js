import {SET_ACTIVE_ROUTE} from "../actions/activeRoute";

export default function activeRoute(state = '/', action) {
    switch (action.type) {
        case SET_ACTIVE_ROUTE :
            return action.route;
        default :
            return state;
    }
}