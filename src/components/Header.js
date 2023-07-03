import React, { useEffect, useState } from 'react';
import { HiOutlineX, HiMenuAlt4 } from 'react-icons/hi';
import MobileNav from '../components/MobileNav';
import Nav from '../components/Nav';
import { header } from '../data';
import { Link, Navigate } from 'react-router-dom';

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('token')); // Tambahkan state untuk menentukan apakah pengguna sudah login

  // Destructure header Data
  const { logo, btnText } = header;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  // Fungsi untuk handle logout
  const handleLogout = () => {
    // Hapus token dari local storage atau lakukan tindakan lain yang sesuai dengan logout
    sessionStorage.removeItem('token'); // Ubah 'token' dengan key penyimpanan token Anda
    setIsLoggedIn(false); // Set pengguna sebagai belum login
  };

  return (
    <div
      className={`${isActive ? 'lg:top-0 bg-white shadow-2xl' : 'lg:top-[60px]'} py-6 lg:py-4 fixed w-full transition-all z-10`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" data-aos="fade-down" data-aos-duration="1000">
          <img src={logo} alt="logo jumpstart" />
        </Link>

        {/* nav initialy hidden - show min desktop */}
        <div className="hidden lg:flex" data-aos="fade-down" data-aos-duartion="1200">
          <Nav />
        </div>

        {/* Tampilkan tombol logout jika sudah login, atau tombol login jika belum */}
        {
          isLoggedIn &&
          <button
            className="btn btn-sm btn-red hidden lg:flex"
            data-aos="fade-down"
            data-aos-duration="1400"
            onClick={handleLogout}
          >
            Logout
          </button>
        }

        {/* Mobile nav humberger */}
        <button className="lg:hidden" onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? (
            <HiOutlineX className="text-3xl text-accent" />
          ) : (
            <HiMenuAlt4 className="text-3xl text-accent" />
          )}
        </button>

        {/* mobile nav - hidden on desktop */}
        <div className={`${mobileNav ? 'left-0' : '-left-full'} fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all`}>
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
