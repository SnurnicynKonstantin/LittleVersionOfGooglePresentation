const serverApi = 'http://localhost:8000';

class SlideApi {
    static getSlides(presentationId) {
        return fetch(serverApi + '/slides?presentation_id=' + presentationId, {
            method: "GET"
        });
    }

    static updateSlide(data) {
        console.log('data', data);
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
}

export default SlideApi;
