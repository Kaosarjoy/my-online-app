import React, { useEffect, useState } from 'react';

const Installation = () => {
  const [apps, setApps] = useState([]);
  const [sortType, setSortType] = useState("");

  // Load installed apps from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
    setApps(stored);
  }, []);

  // Uninstall function
  const handleUninstall = (id) => {
    const updated = apps.filter(a => a.id !== id);
    setApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
  };

  // Sorting logic
  const sortedApps = [...apps].sort((a, b) => {
    if (sortType === "small") return a.size - b.size;
    if (sortType === "large") return b.size - a.size;
    return 0;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <h1 className="text-center text-3xl font-bold">
        Your Installed Apps
      </h1>

      <p className="text-gray-500 text-center mt-2">
        Explore All Trending Apps on the Market developed by us
      </p>

      {/* apps count + sort */}
      <div className="flex justify-between items-center mt-8 mb-4">

        <div className="font-semibold bg-gray-200 px-3 py-2 rounded">
          Apps Found: {apps.length}
        </div>

        <details className="dropdown">
          <summary className="btn">Sort by Size</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box w-40 p-2 shadow">
            <li><a onClick={() => setSortType("small")}>Small</a></li>
            <li><a onClick={() => setSortType("large")}>Large</a></li>
          </ul>
        </details>

      </div>

      {/* installed app list */}
      <div className="space-y-4">
        {sortedApps.map(app => (
          <div
            key={app.id}
            className="border rounded-xl p-4 flex items-center justify-between shadow-sm"
          >
            <div className="flex items-center gap-4">
              <img 
                className="w-12 h-12 rounded-lg bg-gray-200" 
                src={app.image}
                alt={app.companyName}
              />

              <div>
                <h3 className="font-semibold text-lg">{app.companyName}</h3>

                <div className="flex gap-4 mt-1 text-sm text-gray-600">
                  <span>{app.downloads} Downloads</span>
                  <span>{app.ratingAvg}</span>
                  <span>{app.size} MB</span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => handleUninstall(app.id)}
              className="btn btn-error text-white">
              Uninstall
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Installation;
