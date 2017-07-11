const googleApi = 'https://www.googleapis.com/oauth2/v1/userinfo?access_token=';
const serverApi = 'http://localhost:8000';

class UserApi {
    static getUserInfo(token) {
        return fetch(googleApi + token, {
            method: "GET"
        });
    }

    static saveUserMail(mail) {
        return fetch(serverApi + '/users', {
            method: "POST",
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            },
            body: 'mail=' + mail
        });
    }

    static sharePresentation(presentationId, mail) {
        return fetch(serverApi + '/users', {
            method: "PUT",
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            },
            body: 'presentation_id=' + presentationId +
            '&mail=' + mail
        });
    }
}

export default UserApi;
