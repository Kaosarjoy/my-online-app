import React, { use } from 'react';

const AppProducts = ({productPromise}) => {
   const products = use(productPromise);  // data resolve

  return (
    <div>
      <h1>Apps Found: {products.length}</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(item => (
          <div key={item.id} className="p-4 border rounded-xl">
            <img src={item.image} alt="" className="w-full h-30 object-cover" />
            <h2 className="font-semibold mt-2">{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};


export default AppProducts;