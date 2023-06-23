import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import ProductList from './pages/ProductList';
import DetailProduct from './pages/DetailProduct';
import PaymentProduct from './pages/PaymentProduct';
import AdminDashboard from './pages/AdminDashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import AdminManageProduct from './pages/AdminManageProduct';
import Profile from './pages/Profile';
import UpdateProfile from './pages/UpdateProfile';


const WebRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/products' element={<ProductList/>}></Route>
        <Route path='/detaill' element={<DetailProduct/>}></Route>
        <Route path='/paymentproduct' element={<PaymentProduct/>}></Route>
        <Route path='/admin' element={<AdminDashboard/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/manageproduct" element={<AdminManageProduct/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/updateprofile" element={<UpdateProfile/>}></Route>
    </Routes>
  )
}

export default WebRouter