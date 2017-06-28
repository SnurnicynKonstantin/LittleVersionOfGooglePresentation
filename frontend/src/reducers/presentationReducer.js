import * as types from '../actions/actionTypes';
/*import initialState from './initialState';*/

export default function authorReducer(state = []/*initialState.authors*/, action) {
    switch (action.type) {
        case types.LOAD_PRESENTATIONS_SUCCESS:
            return [
                ...state,
                {
                    presentations: [
                        {
                            subject: 'presentation1'
                        },
                        {
                            subject: 'presentation2'
                        }
                    ]
                }
            ]

        default:
            return state;
    }
}
