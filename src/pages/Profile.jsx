import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
const Profile = () => {
	return (
		<>
		<Header/>
		<br/>
		<br/>
		<br/>
		<div className="p-16">
			<div className="p-8 bg-white shadow mt-24">
				<div className="grid grid-cols-1 md:grid-cols-3">
					<div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
						<div>
							<p className="font-bold text-gray-700 text-xl">22</p>
							<p className="text-gray-400">History order</p>
						</div>
						<div>
							<p className="font-bold text-gray-700 text-xl">10</p>
							<p className="text-gray-400">product purchased</p>
						</div>
						<div>
							<p className="font-bold text-gray-700 text-xl">Indonesia</p>
							<p className="text-gray-400">citizen</p>
						</div>
					</div>
					<div className="relative">
						<div className="w-48 h-48 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24">
							<img src="https://i.ibb.co/F5tyqmJ/profile.png" alt="Profile" className="w-full h-full object-cover rounded-full" />
						</div>
					</div>


					{/* BUTTON UPDATE */}
					<div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
						<Link to="/updateprofile">
							<button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
								Update
							</button>
						</Link>
					</div>
				</div>
				<div className="mt-20 text-center border-b pb-12">

					{/* Firstname and Lastname  and age*/}
					<h1 className="text-4xl font-medium text-gray-700">Dimas Sumanto, <span className="font-light text-gray-500">27</span></h1>

					{/* Address */}
					<p className="font-light text-gray-600 mt-3">Bali Indonesia</p>

					{/* Gender */}
					<p className="mt-8 text-gray-500">Male</p>
				</div>
				<div className="mt-12 flex flex-col justify-center">
					<p className="text-gray-600 text-center font-light lg:px-16">Welcome to jumpstart, hope you enjoy shopping here</p>
					<button className="text-indigo-500 py-2 px-4  font-medium mt-4">
						Show more
					</button>
				</div>
			</div>
		</div>
		<Footer/>
		</>
		
	);
}

export default Profile