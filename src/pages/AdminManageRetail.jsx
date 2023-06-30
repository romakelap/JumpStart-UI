import React, { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import HeaderAdmin from '../components/TableAdmin/HeaderAdmin';
import Logo from '../assets/img/header/logoJ.png';
import '../style/form.css';
import Service from '../service/Service';
import { useLocation } from 'react-router-dom';

const AdminManageRetail = () => {
//   
const location = useLocation();
const navigate = useNavigate();
const { data } = location.state || {};


useEffect(() => {
  if (data) {
    // Set the form field values using the received data
    document.getElementById('name').value = data.name || '';
    document.getElementById('description').value = data.description || '';
    document.getElementById('location').value = data.location || '';
    document.getElementById('id').value = data.id || '';
  }
}, [data]);

const handleFormSubmit = async (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  const data = {};
  for (let [name, value] of formData) {
    data[name] = value;
  }

  try {
    const retailDescription = {
      id: data.id,
      name: data.name,
      location: data.location,
    };

    let response = null;
    if (data.id !== '') {
      response = await Service.updateRetail(retailDescription);
    } else {
      response = await Service.addRetail(retailDescription);
    }

    navigate('/admin');
    alert(response.data);
  } catch (error) {
    console.error(error);
  }
};

  return (
    <>
      <HeaderAdmin />
      <main style={{ marginTop: '-190px' }}>
        <div className="box">
          <div className="inner-box">
            <div className="forms-wrap">
              {/* FORM START */}
              <form className="sign-in-form" onSubmit={handleFormSubmit}>
              <input type="number" style={{display:'none'}} id='id' name='id' />
                <div className="logo">
                  <img src={Logo} />
                </div>
                <div className="heading">
                  <h2>Manage Retail</h2>
                  <h6>*make sure to add the correct information</h6>
                </div>
                <div className="actual-form">
                  {/* Retail name */}
                  <div className="input-wrap">
                    <label className="label">Retail Name</label>
                    <input
                    id='name'
                      type="text"
                      name="name"
                      placeholder="Retail Name"
                      minLength={4}
                      className="input-field"
                      autoComplete="off"
                      required
                      
                    />
                  </div>

                  {/* Description */}
                  <div className="input-wrap">
                    <label className="label">Description</label>
                    <input
                    id='description'
                      type="text"
                      name="description"
                      placeholder="Description"
                      minLength={4}
                      className="input-field"
                      autoComplete="off"
                      required
                    />
                  </div>

                  {/* Location */}
                  <div className="input-wrap">
                    <label className="label">Location</label>
                    <input
                    id='location'
                      type="text"
                      name="location"
                      placeholder="Location"
                      minLength={4}
                      className="input-field"
                      autoComplete="off"
                      required
                    />
                  </div>

                  {/* Submit */}
                  <input type="submit" value="Submit" className="register" />
                  <Link to={"/admin"}>
                    <input type="submit" value="Cancel" className="cancel" />
                  </Link>
                </div>
              </form>
            </div>
            <div className="carousel">
              <div className="images-wrapper">
                <img
                  src="https://img.freepik.com/free-vector/product-presentation-concept-illustration_114360-8416.jpg"
                  className="image img-1 show"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AdminManageRetail;
