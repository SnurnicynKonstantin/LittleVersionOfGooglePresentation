import {combineReducers} from 'redux';
import presentations from './presentationReducer';


const rootReducer = combineReducers({
    presentations
});


// const initialState = {
//     name: 'Василий',
//     presentations: [
//         {
//             subject: 'presentation1'
//         },
//         {
//             subject: 'presentation2'
//         }
//     ]
// }
//
// const rootReducer = function combineReducers(state = initialState) {
//     return state
// }

export default rootReducer;
