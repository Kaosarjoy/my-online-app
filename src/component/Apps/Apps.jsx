// Apps.jsx
import React, { useState, useEffect } from 'react';
import AppError from '../AppError/AppError'; 
import logoImg from '../../assets/logo.png';
import { IoSearchOutline } from 'react-icons/io5';
import { Link } from "react-router";

const Apps = () => {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch products
  useEffect(() => {
    fetch('/product.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // filtered products based on search
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex flex-col items-center py-20 gap-3">
        <img src={logoImg} alt="logo" className="w-14 h-14 animate-pulse" />
        <h1 className="text-xl font-semibold tracking-widest">Loading...</h1>
        <span className="loading loading-spinner text-info"></span>
      </div>
    );
  }

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
        <h1 className='text-2xl font-bold'>App Found {filteredProducts.length}</h1>
        <div className='flex items-center gap-2 border rounded-xl px-3 py-2'>
          <input
            type="text"
            placeholder='Enter the app name'
            className='outline-none'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <IoSearchOutline size={22} />
        </div>
      </div>

      {/* App Cards */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <Link to={`/app/${product.id}`} key={product.id}>
              <div className="border p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-40 object-cover mb-2" 
                />
                <h2 className="font-bold text-lg">{product.title}</h2>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <AppError />
      )}
    </div>
  );
};

export default Apps;
