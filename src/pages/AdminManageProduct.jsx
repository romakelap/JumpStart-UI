import React, { useState } from 'react';
import HeaderAdmin from '../components/TableAdmin/HeaderAdmin';
import { Link } from 'react-router-dom';

const AdminManageProduct = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <>
      <HeaderAdmin />
      <main style={{ marginTop: '-190px' }} >
        <div className="box">
          <div className="inner-box">
            <div className="forms-wrap">
              {/* FORM START */}
              <form className="sign-in-form">
                <div className="heading">
                  <h2>Manage Product</h2>
                </div>
                <div className="actual-form">
                  <div className="flex flex-wrap -mx-3 mb-6">

                    {/* PRODUCT NAME */}
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-blue-100 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
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
                      accept="image/*"
                      className="input-field"
                      onChange={handleImageChange}
                    />
                  </div>

                  {/* PRICE */}
                  <div className="input-wrap">
                    <label className="label">Price</label>
                    <input
                      type="number"
                      placeholder="2000"
                      minLength={4}
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
                      placeholder="description"
                      minLength={4}
                      className="input-field"
                      autoComplete="off"
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

