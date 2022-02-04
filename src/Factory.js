class Factory {
    resToBreedArr(obj) {
        let keys = Object.keys(obj);

        return keys.map(key => {
            
            let itemFromKey = {
                name: key,
                subBreeds: obj[key]
            }

            return itemFromKey
        })
    }
}

const factory = new Factory();

export default factory;