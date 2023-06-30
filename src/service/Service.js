
import axios from 'axios';

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

    async addProduct(data) {
        const token = sessionStorage.getItem('token');
        return await axios.post(API_BASE_URL + "/api/admin/product", data, {
            headers: { Authorization: 'Bearer ' + token }
        });
    }

    async updateProduct(data) {
        const token = sessionStorage.getItem('token');
        return await axios.put(API_BASE_URL + "/api/admin/product", data, {
            headers: { Authorization: 'Bearer ' + token }
        });
    }

    async deleteProduct(id) {
        const token = sessionStorage.getItem('token');
        return await axios.delete(API_BASE_URL + "/api/admin/product/" + id, {
            headers: { Authorization: 'Bearer ' + token }
        });
    }

    async allProduct() {
        return (await axios.get(API_BASE_URL + "/api/base/product")).data;
    }

    async addRetail(data) {
        const token = sessionStorage.getItem('token');
        return await axios.post(API_BASE_URL + "/api/admin/retail-regions", data, {
            headers: { Authorization: 'Bearer ' + token }
        });
    }

    async updateRetail(data) {
        const token = sessionStorage.getItem('token');
        return await axios.put(API_BASE_URL + "/api/admin/retail-regions", data, {
            headers: { Authorization: 'Bearer ' + token }
        });
    }

    async deleteRetail(id) {
        const token = sessionStorage.getItem('token');
        return await axios.delete(API_BASE_URL + "/api/admin/retail-regions/" + id, {
            headers: { Authorization: 'Bearer ' + token }
        });
    }

    async allRetail() {
        return await axios.get(API_BASE_URL + "/api/admin/retail-regions");

    }
}
export default new Service();