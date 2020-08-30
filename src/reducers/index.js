import {combineReducers} from 'redux';
import user from './user';
import authState from './authState';
import currentLang from "./currentLang";
import history from './navHistory'
import {loadingBarReducer as loadingBar} from 'react-redux-loading';

export default combineReducers({
   authState,
   user,
   currentLang,
   history,
   loadingBar
});