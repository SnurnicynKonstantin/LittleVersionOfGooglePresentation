import presentationApi from '../api/presentationApi';
import * as types from './actionTypes';

export function loadPresentationsSuccess(presentations) {
    return {
        type: types.LOAD_PRESENTATIONS_SUCCESS,
        presentations
    };
}

export function loadPresentations() {
    return function(dispatch) {
        return presentationApi.getAllPresentations().then(res=>res.json()).then(res => {
            dispatch(loadPresentationsSuccess(res.presentations));
        }).catch(error => {
            throw(error);
        });
    };
}