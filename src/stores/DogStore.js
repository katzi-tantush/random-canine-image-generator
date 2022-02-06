import {createStore} from 'vuex';


const dogStore = createStore({
        state() {
            return {
                selectedBreed: null,
                // breedImgSrcs: []
            }
        },

        getters: {
            selectedBreed(state) {
                return state.selectedBreed;
            },
            // getBreedImgSrcs(state) {
            //     return state.breedImgSrcs;
            // }
        },

        mutations: {
            setSelectedBreed(state, breed) {
                state.selectedBreed = breed;
            },
            // setBreedImgSrcs(state, breed) {
                
            // }
        }
    }
);

export default dogStore;