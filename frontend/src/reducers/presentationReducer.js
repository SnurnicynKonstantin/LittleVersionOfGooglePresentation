import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_PRESENTATIONS_SUCCESS:
            var result = action.presentations;
            console.log('STATE', state);
            console.log('ACTION', action);
            console.log('LOAD_PRESENTATIONS_SUCCESS', result);
            return result;

        case types.CREATE_PRESENTATIONS_SUCCESS:
            var result = [
                ...state,
                    action.presentation
                ]
            console.log('STATE', state);
            console.log('CREATE_PRESENTATIONS_SUCCESS', result);
            // state.presentations.push({subject:action.subject});
            // return Object.assign({}, state);
            return result;

        case types.GET_SLIDES:
            let presentationWithSlide = state.filter(presentation => presentation.id == action.presentationId)[0];
            console.log('presentationWithSlide', presentationWithSlide);
            presentationWithSlide.slides = action.slides;
            var result = [
                    ...state.filter(presentation => presentation.id !== action.presentationId),
                Object.assign({}, presentationWithSlide)
                ]
            console.log('STATE', state);
            console.log('GET_SLIDES', result);
            return result;

        default:
            return state;
    }
}
