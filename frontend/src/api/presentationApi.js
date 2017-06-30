const serverApi = 'http://localhost:8000';

class PresentationApi {
    static getAllPresentations() {
        return fetch(serverApi + '/presentations', {
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
}

export default PresentationApi;
