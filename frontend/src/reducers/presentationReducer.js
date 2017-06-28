import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.presentations, action) {
    switch (action.type) {
        case types.LOAD_PRESENTATIONS_SUCCESS:
            return action.presentations;

        default:
            return state;
    }
}
