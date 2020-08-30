import {RECEIVE_AUTHED_USER} from '../actions/user';

export default function user(state = null, action) {
    switch (action.type) {
        case RECEIVE_AUTHED_USER:
            return action.user;
        default :
            return state;
    }
}