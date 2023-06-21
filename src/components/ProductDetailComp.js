import React from 'react'
import { MdOutlineHealthAndSafety } from 'react-icons/md'
import '../style/detailProduct.css'
import banner from '../assets/laptop.jpg'

const ProductDetailComp = () => {
  return (
    <div className="detailfood">
        <div className="boxfood">
          <div className="images">
            <div className="img-holder active">
              <img src={banner}/>
            </div>
          </div>
          <div className="basic-info">
            <h1>Kacamata</h1>
            <p className="text-yellow-500">$110</p>
            <div className="options">
              <button className="btnorder bg-green-500">Order</button> 
            </div>
          </div>
          <div className="description">
            <p>Untuk mengatur teks agar berada di tengah menggunakan Tailwind CSS, Anda dapat menggunakan kelas text-center. Berikut adalah contoh kode HTML dengan Tailwind CSS yang akan menerapkan penempatan teks di tengah pada elemen</p>

            <ul className="social">
              <li><a href="#"><MdOutlineHealthAndSafety /></a></li>
              <li><a href="#"><MdOutlineHealthAndSafety /></a></li>
              <li><a href="#"><MdOutlineHealthAndSafety /></a></li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default ProductDetailComp