import React, { useState,useEffect } from 'react';
import HeaderAdmin from '../components/TableAdmin/HeaderAdmin';
import { Link,useNavigate } from 'react-router-dom';
import Service from '../service/Service';
import { useLocation } from 'react-router-dom';
const AdminManageProduct = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state || {};
  const handleImageChange = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };
  useEffect(() => {
    if (data) {
      // Set the form field values using the received data
      document.getElementById('grid-first-name').value = data.name || '';
      document.getElementById('grid-price').value = data.price || '';
      document.getElementById('grid-description').value = data.description || '';
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
      let productDescription={
        id:data.id,
        name:data.name,
        picture:data.picture.name,
        price: data.price,
        description:data.description
      }
      // Call the addProduct method from the Service
      // console.log(productDescription)
      let response=null;
      if(data.id != ''){
        response = await Service.updateProduct(productDescription);
      }else{
        response = await Service.addProduct(productDescription);
      }
      navigate('/admin')
      alert(response.data);
      // Reset the form or redirect to another page
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <HeaderAdmin />
      <main style={{ marginTop: '-190px' }} >
        <div className="box">
          <div className="inner-box">
            <div className="forms-wrap">
              {/* FORM START */}
              <form className="sign-in-form" onSubmit={handleFormSubmit}>
                <div className="heading">
                  <h2>Manage Product</h2>
                </div>
                <div className="actual-form">
                    <input type="number" style={{display:'none'}} id='id' name='id' />
                  <div className="flex flex-wrap -mx-3 mb-6">
                    {/* PRODUCT NAME */}
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-blue-100 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        name='name'
                        type="text"
                        placeholder="Product name"
                        style={{ background: "#E8F0FE", fontSize: "0.75rem", border: "1px solid black" }}
                      />
                    </div>

                    {/* STOCK PRODUCT */}
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        Stock
                      </label>
                      <input
                        className="appearance-none block w-full bg-blue-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        placeholder="999"
                        style={{ background: "#E8F0FE", fontSize: "0.75rem", border: "1px solid black" }}
                      />
                    </div>
                  </div>

                  {/* FILE UPLOAD */}
                  <div className="input-wrap">
                    <label className="label">Image</label>
                    <input
                      type="file"
                      name='picture'
                      accept="image/*"
                      className="input-field"
                      onChange={handleImageChange}
                    />
                  </div>

                  {/* PRICE */}
                  <div className="input-wrap">
                    <label className="label">Price</label>
                    <input
                    id='grid-price'
                      type="float"
                      placeholder="2000"
                      minLength={4}
                      name='price'
                      className="input-field"
                      autoComplete="off"
                      required
                    />
                  </div>

                  {/* DESCRIPTION */}
                  <div className="input-wrap">
                    <label className="label">Description</label>
                    <input
                      type="text"
                      id='grid-description'
                      placeholder="description"
                      minLength={4}
                      className="input-field"
                      autoComplete="off"
                      name='description'
                      required
                      style={{ height: "100px" }}
                    />
                  </div>


                  {/* UPDATE*/}
                  <br />
                  <br />
                  <br />
                  <input type="submit" value="Update" className="register" />
                  <Link to={"/admin"}>
                    <input type="submit" value="Cancel" className="cancel" />
                  </Link>
                </div>
              </form>
            </div>
            <div className="carousel">
              <div className="images-wrapper">
                <img src={selectedImage} className="image img-1 show" alt="" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>

  )
}

export default AdminManageProduct;

