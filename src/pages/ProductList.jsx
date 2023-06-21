import React from 'react'
import Header from '../components/Header'
import Home from '../components/Home'
import TextProductList from '../components/TextProductList'
import banner from '../assets/productj.png'
import '../style/ProductCard.css'
import Cta from '../components/Cta'
import Footer from '../components/Footer'

const ProductList = () => {
  return (
    <>
      <Header />
      <Home />
      <TextProductList />

      {/* CARD PRODUCT START */}
      <div data-aos='fade-up' data-aos-duration='2000' className="kotak">
        <div className="box-stock">
          <img src={banner} alt="" />
          <h4>Kacamata</h4>
          <p className="text-yellow-500">$110</p>
          <button className="btn-food text-center">More</button>
        </div>
      </div>
      {/* CARD PRODUCT END */}
      <Cta />
      <Footer />
    </>
  )
}

export default ProductList