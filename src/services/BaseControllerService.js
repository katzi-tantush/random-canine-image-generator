import axios from 'axios';

// base controller class for future development: each api would have (at least) one controller of its own
export default class BaseControllerService{
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async baseGet(endpoint) {
        let url = `${this.baseUrl}${endpoint}`;
        return axios.get(url.toLocaleLowerCase());
    }
}