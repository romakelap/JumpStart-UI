import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import { header } from '../../data';
import Logo from '../../assets/img/header/logoJ.png';
import { Link } from 'react-router-dom';

const HeaderAdmin = () => {
  const [isActive, setIsActive] = useState(false);

  // Destructure header Data
  const { btnText } = header;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header>
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/admin" className="">
            <img
              src={Logo}
              alt="Logo"
              className="h-8 w-28 mr-2"
            />
          </Link>
          <span className="text-white font-semibold text-lg">Admin Dashboard</span>
        </div>

        {/* Username */}
        <div className="text-white">
          <span className="mr-2 text-black">Welcome, Admin</span>
          <Link to="/admin" className="">Back</Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderAdmin;
