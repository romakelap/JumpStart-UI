import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import ProductList from './pages/ProductList';
import DetailProduct from './pages/DetailProduct';
import PaymentProduct from './pages/PaymentProduct';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import Register from './pages/Register';
import Login from './pages/Login';


const WebRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/products' element={<ProductList/>}></Route>
        <Route path='/detaill' element={<DetailProduct/>}></Route>
        <Route path='/paymentproduct' element={<PaymentProduct/>}></Route>
        <Route path='/loginadmin' element={<AdminLogin/>}></Route>
        <Route path='/admin' element={<AdminDashboard/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        

    </Routes>
  )
}

export default WebRouter