const serverApi = 'http://localhost:8000';

class PresentationApi {
    static getAllPresentations() {
        return fetch(serverApi + '/presentations', {
            method: "GET"
        })
    }
}

export default PresentationApi;
