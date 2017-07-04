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

export function updateSlideSuccess(data) {
    return {
        type: types.UPDATE_SLIDE,
        data
    };
}

export function updateSlide(data) {
    return function(dispatch) {
        return slideApi.updateSlide(data).then(res=>res.json()).then(res => {
            if(res.success === true)
                dispatch(updateSlideSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
}