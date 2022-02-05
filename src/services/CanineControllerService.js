import BaseControllerService from "./BaseControllerService";

const urls = {
    baseUrl: 'https://dog.ceo/api/',
    allBreedsEndpoint: 'breeds/list/all',
}

class CanineControllerService extends BaseControllerService {
    constructor({baseUrl, allBreedsEndpoint}) {
        super(baseUrl);
        this.allBreedsEndpoint = allBreedsEndpoint;
    }

    getBreedImgUrl(breed) {
        return `breed/${breed}/images/random`
    }

    async getAllBreeds() {
        return this.baseGet(this.allBreedsEndpoint);
    }

    async getBreedImgSrc(breed) {
        let breedImgUrl = this.getBreedImgUrl(breed);
        let res = await this.baseGet(breedImgUrl);
        
        return res.data.message;
    }
}

const canineControllerService = new CanineControllerService(urls);

export default canineControllerService;