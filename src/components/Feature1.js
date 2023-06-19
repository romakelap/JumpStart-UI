import React from 'react'
import {features} from '../data'

const Feature1 = () => {
  // destructure features
  const {feature1}  = features;

  // destructure features1
  const {pretitle, title, subtitle, btnLink, btnIcon, image} = feature1;
  return <section className='section'>
    <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]'>
      {/* image */}
      <div className='flex-1' data-aos='fade-right' data-aos-offset='400'><img src={image}></img></div>

       {/* text */}
       <div className='flex-1' data-aos='fade-left' data-aos-offset='300'>
        <div className='pretitle'>{pretitle}</div>
        <h2 className='title'>{title}</h2>
        <p className='lead'>{subtitle}</p>
        <button className='btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all'>{btnLink} <img src={btnIcon}></img></button>
      </div>

    </div>
    </div>
  </section>;
};

export default Feature1;
