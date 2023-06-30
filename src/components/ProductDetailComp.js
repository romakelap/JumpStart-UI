import React from 'react';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import '../style/detailProduct.css';
import banner from '../assets/laptop.jpg';
import { Link, useLocation } from 'react-router-dom';

const ProductDetailComp = () => {
  const location = useLocation();
  const { data } = location.state || {};

  if (!data) {
    // Handle the case when data is not available
    return <div>No data available.</div>;
  }

  const { name, price, description } = data;

  return (
    <div className="detailfood">
      <div className="boxfood">
        <div className="images">
          <div className="img-holder active">
            <img src={banner} alt={name} />
          </div>
        </div>
        <div className="basic-info">
          <h1>{name}</h1>
          <p className="text-yellow-500">${price}</p>
          <div className="options">
            <Link className="btnorder" to="/paymentproduct">
              <button className="btnorder bg-green-500">Order</button>
            </Link>
          </div>
        </div>
        <div className="description">
          <p>{description}</p>

          <ul className="social">
            <li>
              <a href="#">
                <MdOutlineHealthAndSafety />
              </a>
            </li>
            <li>
              <a href="#">
                <MdOutlineHealthAndSafety />
              </a>
            </li>
            <li>
              <a href="#">
                <MdOutlineHealthAndSafety />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailComp;