
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

class Service {
    async register(data){
        return (await axios.post(API_BASE_URL+"/api/base/auth/register",data)).data
    }
    async login(data){
        return (await axios.post(API_BASE_URL+"/api/base/auth/authenticate",data)).data
    }
    async profile(){
        let token = sessionStorage.getItem('token');
        return (await axios.get(API_BASE_URL+"/api/base/user/"+token)).data
    }
    async updateProfile(data){
        return (await axios.post(API_BASE_URL+"/api/base/user/profile", data))
    }
    async addProduct(data){
        const token = sessionStorage.getItem('token');
        return await axios.post(API_BASE_URL+"/api/admin/product",data,{
            headers: { Authorization: 'Bearer '+token}
        });
    }
    async updateProduct(data){
        const token = sessionStorage.getItem('token');
        return await axios.put(API_BASE_URL+"/api/admin/product",data,{
            headers: { Authorization: 'Bearer '+token}
        });
    }
    async deleteProduct(id){
        const token = sessionStorage.getItem('token');
        return await axios.delete(API_BASE_URL+"/api/admin/product/"+id,{
            headers: { Authorization: 'Bearer '+token}
        });
    }
    async allProduct(){
        return (await axios.get(API_BASE_URL+"/api/base/product")).data
    }

    async addRetail(data){
        const token = sessionStorage.getItem('token');
        return await axios.post(API_BASE_URL+"/api/admin/retail-regions",data,{
            headers: { Authorization: 'Bearer '+token}
        });
    }
    async updateRetail(data){
        const token = sessionStorage.getItem('token');
        return await axios.put(API_BASE_URL+"/api/admin/retail-regions",data,{
            headers: { Authorization: 'Bearer '+token}
        });
    }
    async deleteRetail(id){
        const token = sessionStorage.getItem('token');
        return await axios.delete(API_BASE_URL+"/api/admin/retail-regions/"+id,{
            headers: { Authorization: 'Bearer '+token}
        });
    }
    async allRetail(){
        const token = sessionStorage.getItem('token');
        return await axios.get(API_BASE_URL+"/api/admin/retail-regions",{
            headers: { Authorization: 'Bearer '+token}
        });
    }
    async allRetailProduct(retailId){
        const token = sessionStorage.getItem('token');
        return await axios.get(API_BASE_URL+"/api/admin/retail-regions/"+retailId+"/retails",{
            headers: { Authorization: 'Bearer '+token}
        });
    }
    async addRetailProduct(data){
        const token = sessionStorage.getItem('token');
        return await axios.post(API_BASE_URL+"/api/admin/retail-regions/product",data,{
            headers: { Authorization: 'Bearer '+token}
        });
    }
    async updateRetailProduct(data){
        const token = sessionStorage.getItem('token');
        return await axios.put(API_BASE_URL+"/api/admin/retail-regions/product",data,{
            headers: { Authorization: 'Bearer '+token}
        });
    }
    async deleteRetailProduct(id){
        const token = sessionStorage.getItem('token');
        return await axios.delete(API_BASE_URL+"/api/admin/retail-regions/product/"+id,{
            headers: { Authorization: 'Bearer '+token}
        });
    }
}
export default new Service();