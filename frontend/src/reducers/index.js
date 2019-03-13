import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import posts from './postReducer';
import authReducer from '../actions/authReducer';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    posts: posts
});