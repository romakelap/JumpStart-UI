import React from 'react';
import { testimonials } from '../data';
import ClientSlider from '../components/ClientSlider';

const Testimonials = () => {
  // Destructure testimonials
  const {title,clients} = testimonials
  return (
    <section className='section'>
    <div className='container mx-auto'>
      {/* Title */}
      <h2 className='title mb-10 lg:mb-20 text-center max-w-[920px] 
      mx-auto' data-aos='fade-up' data-aos-delay='200'>{title}</h2>
    </div>

    {/* Slider */}
    <div data-aos='fade-up' data-aos-delay='400'>
      <ClientSlider clients={clients}/>
    </div>
  </section>
  );
};

export default Testimonials;
