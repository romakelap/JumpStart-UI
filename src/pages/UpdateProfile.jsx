import React, { useState } from 'react';
import Footer from '../components/Footer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Service from '../service/Service';
const UpdateProfile = () => {
  const location = useLocation();
  const [profileData, setProfileData] = useState(location.state.profileData);
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfileData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveProfile = async (event) => {
    try {
      const response = await Service.updateProfile(profileData);
      navigate("/profile")
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <br />
      <br />
      <br />

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


            {/* BUTTON SAVE AND CANCEL */}
            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <button onClick={handleSaveProfile} className="text-white py-2 px-4 uppercase rounded bg-green-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Save
              </button>


              <Link to="/profile">
                <button className="text-white py-2 px-4 uppercase rounded bg-red-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  Cancel
                </button>
              </Link>


            </div>
          </div>
          <div className="mt-20 text-left border-b pb-12">
            <form className="w-full max-w-lg">
              <div className="flex flex-wrap -mx-3 mb-6">
                {/* FIRSTNAME */}
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    First Name
                  </label>
                  <input name="firstname"
                    onChange={handleChange} value={profileData.firstname} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                </div>

                {/* LASTNAME */}
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                    Last Name
                  </label>
                  <input name="lastname"
                    onChange={handleChange} value={profileData.lastname} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                </div>

                {/* AGE */}
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Age
                  </label>
                  <input name="age"
                    onChange={handleChange} value={profileData.age} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="number" placeholder="22" />
                </div>

                {/* GENDER */}
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                    Gender
                  </label>
                  <select name="gender"
                    onChange={handleChange} value={profileData.gender}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

              </div>
              <div className="flex flex-wrap -mx-3 mb-6">

                {/* ADDRESS */}
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                    Address
                  </label>
                  <input name="address"
                    onChange={handleChange} value={profileData.address} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Bali Indonesia" />
                  <p className="text-gray-600 text-xs italic">Make sure the address is filled in correctly so that there are no mistakes during delivery</p>
                </div>
              </div>
            </form>
          </div>
          <div className="mt-12 flex flex-col justify-center">
            <p className="text-gray-600 text-center font-light lg:px-16">Welcome to jumpstart, hope you enjoy shopping here</p>
            <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
              Show more
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>

  );
}

export default UpdateProfile;