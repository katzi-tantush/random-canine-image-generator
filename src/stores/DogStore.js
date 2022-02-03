class DogStore {
    #breeds;

    constructor() {
        this.#breeds = [];
    }

    set breeds(val){
        this.#breeds = val;

        // updatelogic
        console.log('updated breeds list: ', this.breeds);
    }

    get breeds(){
        return this.#breeds;
    }
}

const dogStore = new DogStore();

export default dogStore;