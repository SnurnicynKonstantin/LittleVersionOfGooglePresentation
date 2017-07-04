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
            // state.presentations.push({subject:action.subject});
            // return Object.assign({}, state);
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

        case types.UPDATE_SLIDE:
            let data = action.data;
            var presentationWithSlide = state.filter(presentation => presentation.id == data.presentation_id)[0];

            presentationWithSlide.slides.forEach(function(slide) {
                if(slide.id === data.slide_id) {
                    slide.title = data.title;
                    slide.content = data.content;
                }

            });

            var result = [
                ...state.filter(presentation => presentation.id !== data.presentation_id),
                Object.assign({}, presentationWithSlide)
            ]
            console.log('STATE', state);
            console.log('GET_SLIDES', result);
            return result;

        default:
            return state;
    }
}
