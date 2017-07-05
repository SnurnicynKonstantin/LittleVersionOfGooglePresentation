import slideApi from '../api/slideApi';
import * as types from './actionTypes';

export function getSlides(slides, presentationId) {
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

export function updateSlide(data) {
    return function(dispatch) {
        return slideApi.updateSlide(data).then(res=>res.json()).then(res => {
            if(res.success === true)
                dispatch(loadSlides(data.presentation_id));
        }).catch(error => {
            throw(error);
        });
    };
}

export function createSlide(data) {
    return function(dispatch) {
        return slideApi.createSlide(data).then(res=>res.json()).then(res => {
            if(res.success === true)
                dispatch(loadSlides(data.presentation_id));
        }).catch(error => {
            throw(error);
        });
    };
}

export function deleteSlideSuccess(id, presentationId) {
    return {
        type: types.DELETE_SLIDE,
        id,
        presentationId
    };
}

export function deleteSlide(id, presentationId) {
    return function(dispatch) {
        return slideApi.deleteSlide(id).then(res=>res.json()).then(res => {
            if(res.success === true)
                dispatch(deleteSlideSuccess(id, presentationId));
        }).catch(error => {
            throw(error);
        });
    };
}