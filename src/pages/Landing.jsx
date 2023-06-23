import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Overview from '../components/Overview';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Feature1 from '../components/Feature1';
import Testimonials from '../components/Testimonials';
import Cta from '../components/Cta';
import Footer from '../components/Footer';

const Landing = () => {
Aos.init({
  duration:1800,
  offset:100
});
  return (
    <>
    <Header/>
    <Hero/>
    <Overview/>
    <Feature1/>
    <Testimonials/>
    <Cta/>
    <Footer/>
    </>
    

  )
}

export default Landing