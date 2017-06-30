import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOAD_PRESENTATIONS_SUCCESS:
            //console.log({presentationReduser: action});
            //console.log({state: state});
            return action.presentations

        default:
            return state;
    }
}
