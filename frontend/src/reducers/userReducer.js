import * as types from '../actions/actionTypes';
import initialState from './initialState';
import omit from 'lodash/omit';
import assign from 'lodash/assign';
import mapValues from 'lodash/mapValues';

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_USER_INFO:
            return action.user;

        case types.LOGOUT_USER:
            return {};

        default:
            return state;
    }
}
