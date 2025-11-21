import React from 'react';
import logoImg from '../../assets/logo.png';
import { NavLink } from 'react-router';
import { IoLogoGithub } from 'react-icons/io';

const Navbar = () => {
  const links = <>
    <li><NavLink to='/home' className={({ isActive }) =>
    isActive ? 'text-blue-500 font-bold' : 'text-gray-700'
  }>
    Home
    </NavLink></li>
    <li>
      <NavLink to='/apps' className={({isActive})=>
        isActive ? 'text-blue-500 font-bold' : 'text-gray-700' }>Apps</NavLink>
      </li>
    <li><NavLink to='/installation' className={({isActive})=>
     isActive ? 'text-blue-500 font-bold' : 'text-gray-700' }>
    Installation</NavLink></li>
  </>;

  return (
    <div className="navbar bg-base-100 shadow-sm  w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className='menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow gap-2'>
            {links}
          </ul>
        </div>

      <NavLink to='/home' className='flex justify-between items-center'>
          <img src={logoImg} alt="LogoImage" className="w-10" />
        <h1 className='text-primary font-bold'>HERO.IO</h1>
      </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          {links}
        </ul>
      </div>

      <div className="navbar-end flex gap-3 items-center">
       
        <a href="https://github.com/Kaosarjoy/my-online-app" target='blank'>
        <button className="btn btn-primary btn-sm">
            <IoLogoGithub size={24} />
            Contribute</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
