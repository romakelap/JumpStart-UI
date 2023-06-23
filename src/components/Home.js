import React, { useEffect } from "react";
import '../style/landing.css';

// Imprted assets
import banner from '../assets/productj.png'
//import AOS
import Aos from 'aos';
import 'aos/dist/aos.css'

const Home = () => {
   // Use effect animation duration
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className="home flex conainer">
            <div data-aos='fade-up' data-aos-duration='1500' className="homeImages flex">
                <div className="imageDiv">
                    <img className="vimage" src={banner} />
                </div>
            </div>
        </div>
    )
}

export default Home