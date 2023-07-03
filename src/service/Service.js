
import axios from 'axios';
import { Form } from "react-router-dom";

const API_BASE_URL = 'http://localhost:8080';
const token = sessionStorage.getItem('token');

class Service {
    // AUTH
    async register(data) {
        return (await axios.post(API_BASE_URL + "/api/base/auth/register", data)).data;
    }
    async login(data) {
        return (await axios.post(API_BASE_URL + "/api/base/auth/authenticate", data)).data;
    }

    // Profile Management
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

    async addProductImage(image) {
        return await axios.post(`${API_BASE_URL}/api/admin/product/image`, image, {
            headers: { 'Authorization': `Bearer ${token}`, "Content-Type": "multipart/form-data", }
        });
    }

    // Product
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

    async getImage(imageName) {
        return await axios.get(`${API_BASE_URL}/api/base/product/images`);
    }

    async getProduct(name) {
        return await axios.get(`${API_BASE_URL}/api/base/product/${name.toLowerCase()}`);
    };

    // Retail
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

    async allRetail() {
        const token = sessionStorage.getItem('token');
        return await axios.get(API_BASE_URL + "/api/admin/retail-regions", {
            headers: { Authorization: 'Bearer ' + token }
        });
    }

    // Retail Product
    async allRetailProduct(retailId) {
        const token = sessionStorage.getItem('token');
        return await axios.get(API_BASE_URL + "/api/admin/retail-regions/" + retailId + "/retails", {
            headers: { Authorization: 'Bearer ' + token }
        });
    }
    

    async addRetailProduct(data) {
        const token = sessionStorage.getItem('token');
        return await axios.post(API_BASE_URL + "/api/admin/retail-regions/product", data, {
            headers: { Authorization: 'Bearer ' + token }
        });
    }

    async updateRetailProduct(data) {
        const token = sessionStorage.getItem('token');
        return await axios.put(API_BASE_URL + "/api/admin/retail-regions/product", data, {
            headers: { Authorization: 'Bearer ' + token }
        });
    }

    async deleteRetailProduct(id) {
        const token = sessionStorage.getItem('token');
        return await axios.delete(API_BASE_URL + "/api/admin/retail-regions/product/" + id, {
            headers: { Authorization: 'Bearer ' + token }
        });
    }

    async getRetailProductRegion(id) {
        return await axios.get(`${API_BASE_URL}/api/base/retail-regions-product/${id}`);
    }

    async search(query) {
        return await axios.get(`${API_BASE_URL}/api/base/products/${query}`, {
            headers: { Authorization: 'Bearer ' + token }
        });
    }

    // Transaction
    async getPendingTransaction(){
        const token = sessionStorage.getItem('token');
        return await axios.get(API_BASE_URL + "/api/admin/transaction/PENDING", {
            headers: { Authorization: 'Bearer ' + token }
        });
    }
    async approveTransaction(id){
        const token = sessionStorage.getItem('token');
        return await axios.get(API_BASE_URL + "/api/admin/transaction/approve/"+id, {
            headers: { Authorization: 'Bearer ' + token }
        });
    }
    async allTransaction(){
        const token = sessionStorage.getItem('token');
        return await axios.get(API_BASE_URL + "/api/admin/transaction", {
            headers: { Authorization: 'Bearer ' + token }
        });
    }
}
export default new Service();