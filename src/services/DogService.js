import canineControllerService from './CanineControllerService';
import dogStore from '../stores/DogStore';

// handles communication between dog related services
class DogService {
    async updateDogImgSrcs(breed) {
        try {
            let imgSrcs = await canineControllerService.getBreedImgSrcs(breed);
            dogStore.commit('setBreedImgSrcs', imgSrcs);
        } catch (e) {
            return e;
        }
        return true;
    }
}
const dogService = new DogService();

export default dogService;
