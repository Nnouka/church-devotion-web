import {POP_ACTIVE_ROUTE, SET_ACTIVE_ROUTE} from "../actions/activeRoute";

export default function activeRoute(state = ['/'], action) {
    switch (action.type) {
        case SET_ACTIVE_ROUTE :
            if (state.indexOf(action.route) === -1)
                return [...state, action.route];
            else return state;
        case POP_ACTIVE_ROUTE :
            if (state.length > 1)
            {
                let prevState = [...state];
                prevState.pop();
                return prevState;
            } else {
                return state;
            }
        default :
            return state;
    }
}