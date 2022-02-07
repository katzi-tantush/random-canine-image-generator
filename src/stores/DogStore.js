import {createStore} from 'vuex';

// vuex state store for communication between distant components
const dogStore = createStore({
        state() {
            return {
                selectedBreed: null,
            }
        },

        getters: {
            selectedBreed(state) {
                return state.selectedBreed;
            },
        },

        mutations: {
            setSelectedBreed(state, breed) {
                state.selectedBreed = breed;
            },
        }
    }
);

export default dogStore;