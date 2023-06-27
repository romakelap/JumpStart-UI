import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

class Service {
    async register(data){
        return (await axios.post(API_BASE_URL+"/api/base/auth/register",data))
    }
    async login(data){
        return (await axios.post(API_BASE_URL+"/api/base/auth/authenticate",data)).data
    }
    async profile(){
        let token = sessionStorage.getItem('token');
        return (await axios.get(API_BASE_URL+"/api/base/user/"+token)).data
    }
}
export default new Service();