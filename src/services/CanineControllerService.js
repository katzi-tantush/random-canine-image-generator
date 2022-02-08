import BaseControllerService from "./BaseControllerService";
import factory from '../Factory';

const urls = {
    baseUrl: 'https://dog.ceo/api/',
    allBreedsEndpoint: 'breeds/list/all',
}

class CanineControllerService extends BaseControllerService {
    constructor({baseUrl, allBreedsEndpoint}) {
        super(baseUrl);
        this.allBreedsEndpoint = allBreedsEndpoint;
    }

    // returns an array of breed objects, each breed has an array of subBreeds
    async getAllBreeds() {
        let breedsRes = await this.baseGet(this.allBreedsEndpoint);
        if (breedsRes.status !== 200) {
            throw new Error('breedRes failed to get data: ', breedsRes);
        }
        
        let breedsArr = factory.objToBreedArray(breedsRes.data.message)

        return breedsArr;
    }

    // builds the endpoint for the image sources api call
    buildBreedImgSrcsUrl(breed) {
        return `breed/${breed}/images/random/10`;
    }

    // returns 10 random image sources for the given breed
    async getBreedImgSrcs(breed) {
        let breedImgUrl = this.buildBreedImgSrcsUrl(breed);
        let res = await this.baseGet(breedImgUrl);

        if (res.status !== 200) {
            throw new Error('getBreedImgSrcs failed to get data: ', res);
        }
        
        return res.data.message;
    }
}

const canineControllerService = new CanineControllerService(urls);

export default canineControllerService;