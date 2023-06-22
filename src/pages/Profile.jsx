import 'bootstrap/dist/css/bootstrap.min.css';
import Product from '../assets/productj.png';
import '../style/profile.css'
import Header from '../components/Header';
import Footer from '../components/Footer';


const Profile = () => {
  return(
		<>
			<Header/>
			<div className='profile'>
				<img className='img-fluid' src={Product}
					style={{maxHeight: '280px'}}
				/>
				<div className='profile_picture'>
						<img className='rounded-circle img-fluid mb-4'
							src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
							style={{maxWidth:'200px',height:'200px'}}
						/>
					<div className='mb-4'>
						<p className='m-0'>Name: <span className='text-muted'>James</span></p>
						<p className='m-0'>Age: <span className='text-muted'>24</span></p>
						<p className='m-0'>Gender: <span className='text-muted'>Male</span></p>
						<p className='m-0'>Number: <span className='text-muted'>+62 5958996578</span></p>
					</div>
					<button className='btn btn-primary'>Edit Profile</button>
				</div>
			
				<div>
				</div>
			</div>
			<Footer/>
		</>
	)
}

export default Profile