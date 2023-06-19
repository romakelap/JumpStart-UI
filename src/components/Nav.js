import React from 'react'
import {nav} from '../data'
import { Link } from 'react-router-dom'

const Nav = () => {
  return <nav>
    <ul className='flex gap-x-10'>
        {nav.map((item, index) => {
          // Destructure item
          const { href, name } = item;
          return (
            <li key={index}>
              <Link className=' hover:text-accent transition' to={href}>{name}</Link>
            </li>
          );
        })}
      </ul>
  </nav>;
};

export default Nav;
