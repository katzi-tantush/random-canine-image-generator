import BaseControllerService from "./BaseControllerService";

const urls = {
    baseUrl: 'https://dog.ceo/api/',
    allBreedsEndpoint: 'breeds/list/all'
}

class CanineControllerService extends BaseControllerService {
    constructor({baseUrl, allBreedsEndpoint}) {
        super(baseUrl);
        this.allBreedsEndpoint = allBreedsEndpoint;
    }

    getTest() {
        console.log('getTest started');

        this.baseGet(this.allBreedsEndpoint)
            .then(res => console.log(res.data.message))
            .catch(e => console.log(e));
    }
}

const canineControllerService = new CanineControllerService(urls);

export default canineControllerService;