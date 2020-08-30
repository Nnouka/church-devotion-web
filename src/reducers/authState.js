import {SET_AUTH_STATE} from '../actions/authState';

export default function authState(state = false, action) {
    switch (action.type) {
        case SET_AUTH_STATE :
            return action.authState;
        default :
            return state;
    }
}