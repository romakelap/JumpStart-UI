import React, { useState, useEffect } from 'react';
import HeaderAdmin from '../components/TableAdmin/HeaderAdmin';
import { Link, useNavigate } from 'react-router-dom';
import Service from '../service/Service';
import { useLocation } from 'react-router-dom';

const AdminManageProduct = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState(undefined);
  const [emptyImage, setEmptyImage] = useState(undefined);
  const [postImage, setPostImage] = useState(undefined);

  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state || {};

  const handleImageChange = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
    setPostImage(event.target.files[0]);
  };

  useEffect(() => {



    // get image related to the product
    Service.getImage()
      .then(response => {
        setEmptyImage(data.picture); // set image
        setImages(response.data);
        setSelectedImage(response.data[data.picture]);
      })
      .catch(error => console.error(error));

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
      let picture;
      if (postImage == undefined) {
        picture = emptyImage;
      } else {
        picture = `${data.name}-${postImage.size}-${postImage.name}`;
      }

      let productDescription = {
        id: data.id,
        name: data.name,
        picture,
        price: data.price,
        description: data.description
      };

      // Call the addProduct method from the Service
      let response = null;
      if (data.id != '') {
        response = await Service.updateProduct(productDescription);
      } else {
        response = await Service.addProduct(productDescription);
      }

      // add product image
      const image = new FormData();
      image.append("image", postImage);
      image.append("customName", productDescription.picture);

      Service.addProductImage(image)
        .then(response => console.log(response))
        .catch(error => console.error(error));

      navigate('/admin'); // Reset the form or redirect to another page
      alert(response.data);
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
              <form className="sign-in-form" onSubmit={handleFormSubmit} encType="multipart/form-data">
                <div className="heading">
                  <h2>Manage Product</h2>
                </div>
                <div className="actual-form">
                  <input type="number" style={{ display: 'none' }} id='id' name='id' />
                  {/* PRODUCT NAME */}
                  <div className="input-wrap">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                      Name
                    </label>
                    <input
                      className="appearance-none block w-full border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      name='name'
                      type="text"
                      placeholder="Product name"
                      style={{ background: "#E8F0FE", fontSize: "0.75rem", border: "1px solid black" }}
                    />
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
                      minLength={2}
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
                  <input type="submit" value="Submit" className="register" />
                  <Link to={"/admin"}>
                    <input type="submit" value="Cancel" className="cancel" />
                  </Link>
                </div>
              </form>
            </div>

            <div className="carousel">
              <div className="images-wrapper overflow-hidden flex">
                <img src={selectedImage} className="image img-1 show bg-gray-50 m-auto" alt=" " />
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
};
export default AdminManageProduct;