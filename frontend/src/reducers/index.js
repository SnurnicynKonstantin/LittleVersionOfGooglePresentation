import {combineReducers} from 'redux';
import presentations from './presentationReducer';
import users from './userReducer';

const rootReducer = combineReducers({
    presentations,
    users
});

export default rootReducer;
