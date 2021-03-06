import userApi from '../api/userApi';
import {loadPresentations} from './presentationActions';
import * as types from './actionTypes';

export function updateUser(user) {
    return {
        type: types.ADD_USER_INFO,
        user
    };
}

export function logoutUser() {
    return {
        type: types.LOGOUT_USER
    };
}

export function loadUserInfo(token) {
    return function(dispatch) {
        return userApi.getUserInfo(token).then(res=>res.json()).then(res => {
            dispatch(updateUser(res));
            saveUser(res.email).then(res=>res.json()).then(res => {
                dispatch(loadPresentations(res.user_id));
            });
        }).catch(error => {
            throw(error);
        });
    };
}

export function dfegdf() {
    return {
        type: 'sdfg'
    };
}

export function sharePresentation(presentationId, mail) {
        return userApi.sharePresentation(presentationId, mail).then(res=>res.json()).then(res => {
            return(res);
        }).catch(error => {
            throw(error);
        });
}

export function saveUser(mail) {
    return userApi.saveUserMail(mail);
}
