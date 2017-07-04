const serverApi = 'http://localhost:8000';

class SlideApi {
    static getSlides(presentationId) {
        return fetch(serverApi + '/slides?presentation_id=' + presentationId, {
            method: "GET"
        });
    }
}

export default SlideApi;
