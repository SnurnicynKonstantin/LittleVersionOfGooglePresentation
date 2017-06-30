import presentationApi from '../api/presentationApi';
import * as types from './actionTypes';

export function loadPresentationsSuccess(presentations) {
    return {
        type: types.LOAD_PRESENTATIONS_SUCCESS,
        presentations
    };
}

export function loadPresentations() {
    console.log('I am load Presentations');
    return function(dispatch) {
        return presentationApi.getAllPresentations().then(res=>res.json()).then(res => {
            dispatch(loadPresentationsSuccess(res.presentations));
        }).catch(error => {
            throw(error);
        });
    };
}

export function createPresentationsSuccess(subject) {
    return {
        type: types.CREATE_PRESENTATIONS_SUCCESS,
        subject
    };
}

export function createPresentation(subject, mail) {
    console.log('I am load createPresentation');
    return function(dispatch) {
        return presentationApi.createNewPresentation(subject, mail).then(res=>res.json()).then(res => {
            dispatch(createPresentationsSuccess(subject));
        }).catch(error => {
            throw(error);
        });
    };
}