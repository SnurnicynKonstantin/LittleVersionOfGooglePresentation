import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_USER_INFO:
            //console.log({userReduser: action});
            //console.log({state: state});
            return action.user

        default:
            return state;
    }
}
