import axios from 'axios';

export const baseURL = {
    externo: 'http://138.204.78.244:55321',
    interno: 'http://10.42.112.50:3333'
}

const api = axios.create(); 

export default api;