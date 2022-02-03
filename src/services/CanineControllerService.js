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

    async getAllBreeds() {
        return this.baseGet(this.allBreedsEndpoint);
    }
}

const canineControllerService = new CanineControllerService(urls);

export default canineControllerService;