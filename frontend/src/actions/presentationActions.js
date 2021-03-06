import presentationApi from '../api/presentationApi';
import * as types from './actionTypes';

export function loadPresentationsSuccess(presentations) {
    return {
        type: types.LOAD_PRESENTATIONS_SUCCESS,
        presentations
    };
}

export function loadPresentations(mail) {
    return function(dispatch) {
        return presentationApi.getAllPresentations(mail).then(res=>res.json()).then(res => {
            dispatch(loadPresentationsSuccess(res.presentations));
        }).catch(error => {
            throw(error);
        });
    };
}

export function createPresentationsSuccess(presentation) {
    return {
        type: types.CREATE_PRESENTATIONS_SUCCESS,
        presentation
    };
}

export function createPresentation(subject, mail) {
    return function(dispatch) {
        return presentationApi.createNewPresentation(subject, mail).then(res=>res.json()).then(res => {
            dispatch(createPresentationsSuccess(res));
        }).catch(error => {
            throw(error);
        });
    };
}

export function deletePresentationSuccess(id) {
    return {
        type: types.DELETE_PRESENTATION,
        id
    };
}

export function deletePresentation(id) {
    return function(dispatch) {
        return presentationApi.deletePresentation(id).then(res=>res.json()).then(res => {
            if(res.success === true)
                dispatch(deletePresentationSuccess(id));
        }).catch(error => {
            throw(error);
        });
    };
}