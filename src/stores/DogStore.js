import {createStore} from 'vuex';
// import canineControllerService from '../services/CanineControllerService';

// vuex state store for communication between distant components
const dogStore = createStore({
        state() {
        return {
                allBreeds: [],
                selectedBreed: null,
                breedImgSrcs: []
            }
        },

        getters: {
            selectedBreed(state) {
                return state.selectedBreed;
            },
            allBreeds(state) {
                return state.allBreeds;
            },
        },

        mutations: {
            setSelectedBreed(state, breed) {
                state.selectedBreed = breed;
            },
            setAllBreeds(state, breeds) {
                state.allBreeds = breeds;
            },
        }
    }
);

dogStore.subscribe()

export default dogStore;