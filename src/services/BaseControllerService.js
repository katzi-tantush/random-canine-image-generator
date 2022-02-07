import axios from 'axios';

// base controller class for future development: each api would have (at least) one controller of its own
export default class BaseControllerService{
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async baseGet(endpoint) {
        return axios.get(`${this.baseUrl}${endpoint}`);
    }
}