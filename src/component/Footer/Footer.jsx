import React from 'react';
import logoImg from '../../assets/logo.png';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';
const Footer = () => {
    return (
        <footer>
            <footer className="bg-[#001931] text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4">
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="Logo" className="w-10" />
            <h4 className="font-bold text-lg">HERO.IO</h4>
          </div>

          <div className="flex gap-4 text-2xl">
            <RiTwitterXLine />
            <FaLinkedin />
            <FaFacebook />
          </div>
        </div>

        <div className="border-t border-gray-700 py-2 text-center text-sm">
          Copyright © 2025 - All rights reserved
        </div>
      </footer>
        </footer>
    );
};

export default Footer;