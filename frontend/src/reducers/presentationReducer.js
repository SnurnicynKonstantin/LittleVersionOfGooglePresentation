import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_PRESENTATIONS_SUCCESS:
            var result = action.presentations;
            console.log('STATE', state);
            console.log('LOAD_PRESENTATIONS_SUCCESS', result);
            return result;

        case types.CREATE_PRESENTATIONS_SUCCESS:
            var result = [
                ...state,
                    action.presentation
                ]
            console.log('STATE', state);
            console.log('CREATE_PRESENTATIONS_SUCCESS', result);
            return result;

        case types.GET_SLIDES:
            var presentationWithSlide = state.filter(presentation => presentation.id == action.presentationId)[0];

            presentationWithSlide.slides = action.slides;
            var result = [
                    ...state.filter(presentation => presentation.id !== action.presentationId),
                Object.assign({}, presentationWithSlide)
                ]
            console.log('STATE', state);
            console.log('GET_SLIDES', result);
            return result;

        case types.DELETE_SLIDE:
            var presentationWithSlide = state.filter(presentation => presentation.id == action.presentationId)[0];
            let slidesWithoutDeleted = presentationWithSlide.slides.filter(slide => slide.id !== action.id);

            presentationWithSlide.slides = slidesWithoutDeleted;


            var result = [
                ...state.filter(presentation => presentation.id !== action.presentationId),
                Object.assign({}, presentationWithSlide)
            ]
            console.log('STATE', state);
            console.log('GET_SLIDES', result);
            return result;

        case types.DELETE_PRESENTATION:
            var result = [
                ...state.filter(presentation => presentation.id !== action.id)
            ]
            console.log('STATE', state);
            console.log('DELETE_PRESENTATION', result);
            return result;

        default:
            return state;
    }
}
