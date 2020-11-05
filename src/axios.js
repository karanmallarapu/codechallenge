import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json',
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
});
export default instance;