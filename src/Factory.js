class Factory {
    objectToArr(obj) {
        let keys = Object.keys(obj);

        return keys.map(key => {
            
            let itemFromKey = {
                key: key,
                val: obj[key]
            }

            return itemFromKey
        })
    }
}

const factory = new Factory();

export default factory;