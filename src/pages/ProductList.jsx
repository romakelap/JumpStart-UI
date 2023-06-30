import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import TextProductList from '../components/TextProductList';
import banner from '../assets/productj.png';
import '../style/ProductCard.css';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import Service from '../service/Service';
import { useState, useEffect } from 'react';
const ProductList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [images, setImages] = useState({});

  useEffect(() => {
    // Fetch all products
    const fetchProducts = async () => {
      try {
        const response = await Service.allProduct();
        setProducts(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();

    // get image related to the product
    Service.getImage()
      .then(response => setImages(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleProductClick = (data) => {
    const image = images[data.picture];
    navigate(`/detail`, { state: { data, image } });
  };

  return (
    <>
      <Header />
      <Home />
      <TextProductList />

      {/* Search start */}
      <div>
        <div className="flex flex-col p-2 py-6 m-h-screen">
          <div className="bg-white items-center justify-between w-full flex rounded-full shadow-lg p-2 mb-5 sticky" style={{top: '5px'}}>
            <div>
              <div className="p-2 mr-1 rounded-full hover:bg-gray-100 cursor-pointer">
              </div>
            </div>

            {/* Input */}
            <input className="font-bold uppercase rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs" type="text" placeholder="Search product here" />

            {/* Icon Search */}
            <div className="bg-gray-600 p-2 cursor-pointer mx-2 rounded-full">
              <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Search end */}

      {/* CARD PRODUCT START */}
      {products.map((product) => (
        <div key={product.id} data-aos='fade-up' data-aos-duration='2000' className="kotak">
          <div className="box-stock">
            <img src={images[product.picture]} alt="image" />
            <h4>{product.name}</h4>
            <p className="text-yellow-500">${product.price}</p>
            <button className="btn-food text-center" onClick={() => handleProductClick(product)}>More</button>
          </div>
        </div>
      ))}
      {/* CARD PRODUCT END */}
      <Cta />
      <Footer />
    </>
  );
};

export default ProductList;