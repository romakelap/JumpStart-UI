import React from 'react';
import { copyright } from '../data';


const Copyright = () => {

  const{link1,link2,copyText,social} = copyright;
  return (
    <div data-aos='fade-up' data-aos-offset='200' data-aos-delay='500' className='flex flex-col items-center text-center lg:flex-row 
    lg-items-start lg:text-left lg:justify-between gap-y-2'>
      {/* Links */}
      <div  className='flex gap-x-6'>
        <a className='hover:text-accent transition' href={link1.href}>{link1.name}</a>
        <a className='hover:text-accent transition' href={link2.href}>{link2.name}</a>
      </div>
      {/* copyright */}
      <div>{copyText}</div>
      {/* social */}
      <ul className='flex gap-x-[22px]'>
        {social.map((item, index) =>{
          // Destructure icon
          const{href, icon} = item;
          return(
            <li key={index}>
              <a href={href}>
                <img src={icon}></img>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Copyright;
