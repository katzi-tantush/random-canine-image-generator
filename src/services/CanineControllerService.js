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

    // 
    async getAllBreeds() {
        return this.baseGet(this.allBreedsEndpoint);
    }

    getBreedImgSrcsUrl(breed) {
        return `breed/${breed}/images/random/10`;
    }

    async getBreedImgSrcs(breed) {
        let breedImgUrl = this.getBreedImgSrcsUrl(breed);
        let res = await this.baseGet(breedImgUrl);
        
        return res.data.message;
    }
}

const canineControllerService = new CanineControllerService(urls);

export default canineControllerService;