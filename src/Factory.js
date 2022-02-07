// helper class for the logic of useful object creation
class Factory {
    // get an object populated with dog breed object, returns an array of dog breedobjects
    objToBreedArray(obj) {
        let keys = Object.keys(obj);
        
        return keys.map(key => {
            // subBreeds are there for future use: filtering and choosing breeds by subBreeds etc
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