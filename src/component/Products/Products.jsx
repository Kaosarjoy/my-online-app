import React, { use } from 'react';
import { FcDownload, FcRating } from 'react-icons/fc';
import { NavLink } from 'react-router';


const Products = ({ productPromise,  limit }) => {

  const promise = productPromise 
  const products = use(promise);  

  const displayProducts = limit ? products.slice(0, limit) : products;

  return (
  //  
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
      {displayProducts.map((product) => (
        <NavLink key={product.id} to={`/bookDetails/${product.id}`}>
          <div key={product.id} className="bg-white rounded-xl border-gray-500 shadow-md border overflow-hidden hover:shadow-xl transition-shadow">
          <div className="w-full h-48 bg-gray-200">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-3">
            <h2 className="font-bold text-sm truncate">{product.title}</h2>
            <p className="text-xs text-gray-500 truncate">{product.companyName}</p>
            
            <div className="flex justify-between mt-3">
              <span className="flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                <FcDownload /> {product.downloads}
              </span>
              <span className="flex items-center gap-1 text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">
                <FcRating /> {product.ratingAvg}
              </span>
            </div>
          </div>
        </div>
        </NavLink>
      ))}
    </div>
   
  );
};

export default Products;