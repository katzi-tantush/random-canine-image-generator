// helper class for the logic of useful object creation
class Factory {
    // get an object populated with dog breed object, returns an array of dog breedobjects
    objToBreedArray(obj) {
        let keys = Object.keys(obj);

        return keys.map(key => {
            let capitalizedName = this.capitalize(key);
            // subBreeds are there for future use: filtering and choosing breeds by subBreeds etc
            let itemFromKey = {
                name: capitalizedName,
                // name: key,
                subBreeds: obj[key]
            }

            return itemFromKey
        })
    }

    capitalize(str) {
        let capitalizedStr = `${str[0].toUpperCase()}${str.substring(1)}`;
        return capitalizedStr;
    }
}

const factory = new Factory();

export default factory;