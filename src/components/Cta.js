import React from 'react'
import { cta } from '../data';

const Cta = () => {
  // Destrycture cta data
  const {title, subtitle, btnText, img1, img2} = cta;
  return <section className='section bg-cta bg-cover bg-left-top'>
    <div className='max-w-[1340px] mx-auto px-[25px]'>
      {/* Text */}
      <div className='max-w-[920px] mx-auto text-center'>
        <h2 className='h2 text-white mb-6'
        data-aos='fade-up'
        data-aos-delay='200'
        >{title}</h2>
        <p className='text-2xl lg:text-4xl text-white'
        data-aos='fade-up'
        data-aos-delay='300'
        >{subtitle}</p>
      </div>

      {/* Btn and images */}
      <div className='flex justify-between'>
        <img className='hidden xl:flex w-1/4 xl:w-1/3' 
        data-aos='zoom-out-right'
        data-aos-delay='700'
        src={img1}/>
        <button className='btn btn-md btn-white mt-[40px] lg:text-[22px] gap-x-[10px] mx-auto'
        data-aos='fade-up'
        data-aos-delay='500'
        >
          {btnText}
        </button>
        <img className='hidden xl:flex w-1/4 xl:w-1/3'
        data-aos='zoom-out-left'
        data-aos-delay='700'
        src={img2}/>
      </div>
    </div>
  </section>
};

export default Cta;
