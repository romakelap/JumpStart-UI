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