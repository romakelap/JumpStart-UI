import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/profile.css'
import cover from '../assets/productj.png'
import Footer from '../components/Footer';

const UpdateProfile = () => {
  return(
  <>
    <div className='profile'>
      <img className='img-fluid' src={cover}
        style={{maxHeight: '280px'}}
      />
      <div className='profile_picture'>
          <img className='rounded-circle img-fluid mb-4'
            src='https://mdbcdn.b-cdn.net/img/new/avatars/9.webp'
            style={{maxWidth:'200px'}}
          />
        <div className='row mb-4'>
          <div  className='col-sm-4 col-lg-3 mb-4'>
            <p className='m-0'>Name: <span className='text-muted'>James Vincent Escartin</span></p>
            <p className='m-0'>Age: <span className='text-muted'>18</span></p>
            <p className='m-0'>Gender: <span className='text-muted'>Male</span></p>
            <p className='m-0'>Address: <span className='text-muted'>Cebu, Philippines </span></p>
            
          </div>
          <div className='row col-sm-8 col-lg-9'>
            <h2>Update Profile</h2>
            <form className='col-sm-12'>
            <div className='row'>
              <div className='col-sm-6 mb-4'>
                <label className='form-label'>First Name</label>
                <input className='form-control' type='text'  required/>
              </div>
              <div className='col-sm-6 mb-4'>
                <label className='form-label'>Last Name</label>
                <input className='form-control' type='text'  required/>
              </div>
              <div className='col-sm-6 mb-4'>
                <label className='form-label'>Age</label>
                <input className='form-control' type='text' required/>
              </div>
              <div className='col-sm-6 mb-4'>
                  <label className='form-label'>Gender</label>
                  <input className='form-control' type='text' required/>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-12 mb-4'>
                  <label className='form-label'>Address</label>
                  <input className='form-control' type='text' required/>
                </div>
              </div>
              <button type='submit' className='btn btn-primary'>Update</button>

            </form>
          </div>
        </div>
        </div>
    </div>
    <Footer/>
  </>
  )
}

export default UpdateProfile;