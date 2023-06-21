import React, { useEffect } from "react";
import '../style/landing.css'
//import AOS
import Aos from 'aos';
import 'aos/dist/aos.css'

const TextProductList = () => {
   // Use effect animation duration
   useEffect(() => {
    Aos.init({ duration: 2000 })
}, [])

return (
    <div className="support container section">
        <div className="sectionContainer">
            <div data-aos='fade-up' data-aos-duration='1600' className="titlesDiv">
                <small>jumstart product</small>
                <h2>Fast, Safe ,Accurate and Real-time </h2>
                <p>Enjoy all product from Jump Start</p>
            </div>
        </div>

    </div>
  )
}

export default TextProductList