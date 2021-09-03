import Axios from "axios";

const apiUrl: string = 'http://localhost:3001'

export function get(url: string) {
    const axios = Axios.create();
    return axios.get(apiUrl + url);
}

export function post(url: string, body?: Object) {
    const axios = Axios.create();
    return axios.post(apiUrl + url, body);
}