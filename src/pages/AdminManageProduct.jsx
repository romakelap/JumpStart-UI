import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/Header";
import Footer from "../components/Footer";


const AdminManageProduct = () => {
  return(
    <>
    <Header/>
    <div className='container'>
      <div className="row">
        <div className='col-sm-6'>
          <input className='form-control' type="file"
            style={{height: '100%', minHeight: '20rem'}}/>
        </div>
        <div className='col-sm-6 row p-0 m-0'>
          <h1>MANAGE PRODUCT</h1>
          <a href='#' className='mb-4'>back to inventory</a>
          <div className='col-sm-6 p-0 mb-4'>
            <input className='form-control' type="text" placeholder='First Name'/>
          </div>
          <div className='col-sm-6 p-0 mb-4'>
            <input className='form-control' type="text" placeholder='Last sName'/>
          </div>
          <input className='form-control mb-4' type='text' placeholder='price'/>
         <textarea placeholder='Description' className='form-control  mb-4' height="30rem"/>
         <button className='btn btn-primary' style={{backgroundColor: '#F9A826', border: "none"}}>Submit</button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default AdminManageProduct;

