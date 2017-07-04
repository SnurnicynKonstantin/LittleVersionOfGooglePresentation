import slideApi from '../api/slideApi';
import * as types from './actionTypes';

export function getSlides(slides, presentationId) {
    console.log('Slides', slides);
    return {
        type: types.GET_SLIDES,
        slides,
        presentationId
    };
}

export function loadSlides(presentationId) {
    return function(dispatch) {
        return slideApi.getSlides(presentationId).then(res=>res.json()).then(res => {
            dispatch(getSlides(res.slides, presentationId));
        }).catch(error => {
            throw(error);
        });
    };
}