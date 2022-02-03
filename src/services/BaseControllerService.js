import axios from 'axios';

export default class BaseControllerService{
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async baseGet(endpoint) {
        return axios.get(`${this.baseUrl}${endpoint}`);
    }
}