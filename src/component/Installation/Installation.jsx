import React from 'react';

const Installation = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <h1 className="text-center text-3xl font-bold">
        Your Installed Apps
      </h1>

      <p className="text-gray-500 text-center mt-2">
        Explore All Trending Apps on the Market developed by us
      </p>

      {/* apps found + sort */}
      <div className="flex justify-between items-center mt-8 mb-4">

        <div className="font-semibold bg-gray-200 px-3 py-2 rounded">
           Apps Found
        </div>

        <details className="dropdown">
          <summary className="btn">Sort by Size</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box w-40 p-2 shadow">
            <li><a>Small</a></li>
            <li><a>Large</a></li>
          </ul>
        </details>

      </div>

      {/* installed app list */}
      <div className="space-y-4">
        <div className="border rounded-xl p-4 flex items-center justify-between shadow-sm">

          <div className="flex items-center gap-4">
            <img 
              className="w-12 h-12 rounded-lg bg-gray-200" 
              src="/dummy.png"
            />

            <div>
              <h3 className="font-semibold text-lg">Forest: Focus For Productivity</h3>

              <div className="flex gap-4 mt-1 text-sm text-gray-600">
                <span>8M Downloads</span>
                <span>⭐ 5</span>
                <span>256 MB</span>
              </div>
            </div>
          </div>

          <button className="btn btn-error text-white">Uninstall</button>
        </div>
      </div>

    </div>
  );
};

export default Installation;
