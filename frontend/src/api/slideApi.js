const serverApi = 'http://localhost:8000';

class SlideApi {
    static getSlides(presentationId) {
        return fetch(serverApi + '/slides?presentation_id=' + presentationId, {
            method: "GET"
        });
    }

    static updateSlide(data) {
        return fetch(serverApi + '/slides', {
            method: "PUT",
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            },
            body: 'presentation_id=' + data.presentation_id +
                  '&slide_id=' + data.slide_id +
                  '&title=' + data.title +
                  '&content=' + data.content
        });
    }

    static createSlide(data) {
        return fetch(serverApi + '/slides', {
            method: "POST",
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            },
            body: 'presentation_id=' + data.presentation_id +
            '&title=' + data.title +
            '&content=' + data.content
        });
    }

    static deleteSlide(id) {
        return fetch(serverApi + '/slides', {
            method: "DELETE",
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            },
            body: 'id=' + id
        });
    }
}

export default SlideApi;
