import React from 'react';
import {footer} from '../data';
import Copyright from '../components/Copyright';
import { Link } from 'react-router-dom';

const Footer = () => {
  // destructure footer data
  const{logo, links, legal, newsletter, form} = footer
  return <footer className='pt-[142px] pb-[60px]'>
    <div className='container mx-auto'>
      <div className='flex flex-col items-center text-center lg:flex-row 
      lg:items-start lg:text-left lg:justify-between gap-y-8'>
        {/* LOGO */}
        <div data-aos='fade-up'  data-aos-duration='300'>
          <img src={logo}></img>
        </div>
        {/* List 1 */}
        <div data-aos='fade-up'  data-aos-duration='400'>
          <div className='text-2xl uppercase font-medium'>Links</div>
          <ul className='flex flex-col gap-y-3'>
            {
              links.map((item,index) => {
                // Destrucutre item
                const {href, name} = item;
                return(
                  <li key={index}>
                    <Link className='font-medium
                    hover:text-accent transition
                    ' to={href}>{name}</Link>
                  </li>
                )
              })
            }
          </ul>
        </div>

         {/* List 2 */}
         <div data-aos='fade-up'  data-aos-duration='500'>
          <div className='text-2xl uppercase font-medium'>Legal</div>
          <ul className='flex flex-col gap-y-3'>
            {
              legal.map((item,index) => {
                // Destrucutre item
                const {href, name} = item;
                return(
                  <li key={index}>
                    <Link className='font-medium
                    hover:text-accent transition
                    ' to={href}>{name}</Link>
                  </li>
                )
              })
            }
          </ul>
        </div>

        {/* NewsLetter */}
        <div data-aos='fade-up' data-aos-duration='600'>
          <div className='text-2xl uppercase font-medium mb-6'>{newsletter.title}</div>
          <div className='text-xl text-light mb-[18px]'>{newsletter.subtitle}</div>

          {/* form */}
          <form  className='max-w-[349px] mb-[10px]'>
            <div className='h-[62px] p-[7px] flex border border-dark rounded-lg'>
              <input
              className='
              w-full
              h-full
              pl-6
              border-none outline-none placeholder:text-dark
              '
              type='email' placeholder={form.placeholder}/>
              <button
              className='btn btn-sm bg-accent hover:bg-accentHover w-[102px] text-white'
              >{form.btnText}</button> 
            </div>
          </form>
          <span className='text-sm text-light'>{form.smallText}</span>
        </div>
      </div>
      <hr className='mt-10 mb-5'/>
      <Copyright/>
    </div>
  </footer>;
};

export default Footer;
