import React, { Suspense } from 'react';
import Products from '../Products/Products';

const Apps = () => {

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

      {/* count দেখাতে চাইলে Suspense এর ভিতরে করতে হবে */}

      <Suspense fallback={
        <div className="flex justify-center py-20">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      }>
        <Products productPromise={appPromise} />
      </Suspense>

    </div>
  );
};

export default Apps;
