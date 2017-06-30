const googleApi = 'https://www.googleapis.com/oauth2/v1/userinfo?access_token=';
const serverApi = 'http://localhost:8000';

class UserApi {
    static getUserInfo(token) {
        return fetch(googleApi + token, {
            method: "GET"
        });
    }

    static saveUserMail(mail) {
        console.log({api:mail});
        return fetch(serverApi + '/users', {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({mail: mail})
        });
    }
}

export default UserApi;
