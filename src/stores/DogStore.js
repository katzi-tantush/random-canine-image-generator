import {createStore} from 'vuex';


const dogStore = createStore({
        state() {
            return {
                selectedBreed: null
            }
        },

        getters: {
            selectedBreed(state) {
                return state.selectedBreed;
            }
        },

        mutations: {
            setSelectedBreed(state, breed) {
                state.selectedBreed = breed;
            }
        }
    }
);

export default dogStore;