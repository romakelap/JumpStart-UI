import React from 'react';
import {overview} from '../data';

const Overview = () => {
  // destructure overview data
  const {productImg} = overview
  return <section className='lg:min-h-[712]
  bg-overview bg-cover bg-left-top pt-[20px] lg:pt-[87px]
  '>
    <div className='container mx-auto flex justify-end overflow-hidden'>
      <img src={productImg} data-aos='fade-up' data-aos-offset='300'></img>
    </div>

  </section>;
};

export default Overview;
