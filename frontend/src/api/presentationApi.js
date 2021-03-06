const serverApi = 'http://localhost:8000';

class PresentationApi {
    static getAllPresentations(mail) {
        return fetch(serverApi + '/presentations?user_id=' + mail, {
            method: "GET"
        });
    }

    static createNewPresentation(subject, userMail) {
        return fetch(serverApi + '/presentations', {
            method: "POST",
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            },
            body: 'user_mail=' + userMail + '&subject=' + subject
        });
    }

    static deletePresentation(id) {
        return fetch(serverApi + '/presentations', {
            method: "DELETE",
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            },
            body: 'id=' + id
        });
    }
}

export default PresentationApi;
