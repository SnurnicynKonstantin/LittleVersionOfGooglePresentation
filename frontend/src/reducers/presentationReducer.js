import * as types from '../actions/actionTypes';
/*import initialState from './initialState';*/

export default function authorReducer(state = []/*initialState.authors*/, action) {
    switch (action.type) {
        case types.LOAD_PRESENTATIONS_SUCCESS:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]

        default:
            return state;
    }
}
