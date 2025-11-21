import React, { Suspense, useState } from 'react';
import Products from '../Products/Products';
import AppError from '../AppError/AppError'; 
import logoImg from '../../assets/logo.png';
import { IoSearchOutline } from 'react-icons/io5';

const Apps = () => {

  const [searchText, setSearchText] = useState("");

  const appPromise = fetch('/product.json')
    .then(res => res.json());

  return (
    <div className="py-16 max-w-7xl mx-auto px-4">
      
      <div className="text-center mb-12">
        <h1 className='text-black font-bold text-4xl'>Our All Applications</h1>
        <p className='text-gray-600 font-semibold text-lg mt-3'>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {/* Search Bar */}
      <div className='flex justify-between items-center p-4 mb-8'>
        <h1 className='text-2xl font-bold'>App Found {length}</h1>

        <div className='flex items-center gap-2 border rounded-xl px-3 py-2'>
          <input
            type="text"
            placeholder='enter the apps name'
            className='outline-none'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <IoSearchOutline size={22} />
        </div>
      </div>

      {/* main content */}
      {
        searchText.trim() === '' ? (
          (
          <Suspense fallback={
            <div className="flex flex-col items-center py-20 gap-3">
              <img 
                src={logoImg} 
                alt="logo"
                className="w-14 h-14 animate-pulse"
              />
              <h1 className="text-xl font-semibold tracking-widest">
                Loading...
              </h1>
              <span className="loading loading-spinner text-info"></span>
            </div>
          }>
            <Products productPromise={appPromise} searchText={searchText} />
          </Suspense>
        )
        ) :<AppError></AppError>
      }

    </div>
  );
};

export default Apps;
