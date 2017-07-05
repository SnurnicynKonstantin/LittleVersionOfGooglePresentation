import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_PRESENTATIONS_SUCCESS:
            return action.presentations;

        case types.CREATE_PRESENTATIONS_SUCCESS:
            return [
                ...state,
                action.presentation
            ];

        case types.GET_SLIDES:
            let updatedPresentation = state.filter(presentation => presentation.id == action.presentationId)[0];
            updatedPresentation.slides = action.slides;
            return [
                ...state.filter(presentation => presentation.id !== action.presentationId),
                Object.assign({}, updatedPresentation)
            ];

        case types.DELETE_SLIDE:
            let presentationWithSlide = state.filter(presentation => presentation.id == action.presentationId)[0];
            let slidesWithoutDeleted = presentationWithSlide.slides.filter(slide => slide.id !== action.id);
            presentationWithSlide.slides = slidesWithoutDeleted;
            return [
                ...state.filter(presentation => presentation.id !== action.presentationId),
                Object.assign({}, presentationWithSlide)
            ];

        case types.DELETE_PRESENTATION:
            return [
                ...state.filter(presentation => presentation.id !== action.id)
            ];

        case types.LOGOUT_USER:
            return [];

        default:
            return state;
    }
}
