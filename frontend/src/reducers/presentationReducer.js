import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOAD_PRESENTATIONS_SUCCESS:
            var result = {
                ...state,
                presentations: Object.assign([], action.presentations)
            }
            console.log('STATE', state);
            console.log('ACTION', action);
            console.log('LOAD_PRESENTATIONS_SUCCESS', result);
            // return action.presentations;
            return result;

        case types.CREATE_PRESENTATIONS_SUCCESS:
            var result = {
                ...state,
                presentations: [
                    ...state.presentations,
                    action.presentation
                ]
            }
            console.log('STATE', state);
            console.log('CREATE_PRESENTATIONS_SUCCESS', result);
            // state.presentations.push({subject:action.subject});
            // return Object.assign({}, state);
            return result;

        default:
            return state;
    }
}
