import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState, action) {
    console.log({state: state, action:action});
    switch (action.type) {
        case types.LOAD_PRESENTATIONS_SUCCESS:
            return action.presentations;

        case types.CREATE_PRESENTATIONS_SUCCESS:
            state.presentations.push({subject:action.subject});
            return Object.assign({}, state);

        default:
            return state;
    }
}
