import userApi from '../api/userApi';
import * as types from './actionTypes';

export function updateUser(user) {
    return {
        type: types.ADD_USER_INFO,
        user
    };
}

export function loadUserInfo(token) {
    return function(dispatch) {
        return userApi.getUserInfo(token).then(res=>res.json()).then(res => {
            dispatch(updateUser(res));
            saveUse(res.email);
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveUse(mail) {
    userApi.saveUserMail(mail);
}