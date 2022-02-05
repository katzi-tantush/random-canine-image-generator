import {createStore} from 'vuex';


const dogStore = createStore({
        state() {
            return {
                selectedBreed: null,
                // selectedBreedImgSrc: null
            }
        },

        getters: {
            selectedBreed(state) {
                return state.selectedBreed;
            },
            // selectedBreedImgSrc(state) {
            //     return state.selectedBreedImgSrc;
            // }
        },

        mutations: {
            setSelectedBreed(state, breed) {
                state.selectedBreed = breed;
            },
            // setSelectedBreedImg(state, imgSrc) {
            //     state.selectedBreedImgSrc = imgSrc;
            // }
        }
    }
);

export default dogStore;