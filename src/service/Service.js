import { data } from 'autoprefixer';
import axios from 'axios';
import { header } from '../data';

const API_BASE_URL = 'http://localhost:8080';
const token = sessionStorage.getItem('token');

class Service {
    async register(data) {
        return (await axios.post(API_BASE_URL + "/api/base/auth/register", data)).data;
    }

    async login(data) {
        return (await axios.post(API_BASE_URL + "/api/base/auth/authenticate", data)).data;
    }

    async profile() {
        return (await axios.get(API_BASE_URL + "/api/base/user/" + token)).data;
    }

    async updateProfile(data) {
        return (await axios.post(API_BASE_URL + "/api/base/user/profile", data));
    }

    async addProduct(data) {
        return await axios.post(API_BASE_URL + "/api/admin/product", data, {
            headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
        });
    }

    async payment({ transactionalRequest, total }) {
        return await axios.post(`${API_BASE_URL}/api/payment/pay`, { transactionalRequest, total });
    }
}
export default new Service();