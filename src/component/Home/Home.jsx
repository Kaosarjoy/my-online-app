import React, { Suspense } from 'react';
import googleAppImg from '../../assets/playstore.png'
import appStoreImg from '../../assets/app.png'
import bannerImg from '../../assets/hero.png'
import Products from '../Products/Products';
import { NavLink } from 'react-router';

const Home = () => {
  // এখানে promise টা return করতে হবে!
  const productPromise = fetch('/public/product.json').then(res => res.json());

  return (
    <div className="hero-section">
      {/* Hero Text */}
      <div className="hero-text text-center">
        <h1 className='text-6xl font-bold text-[#001931] mt-3'>
          We Build <br /><span className="text-primary">Productive</span> Apps
        </h1>
        <p className="text-center mt-4 text-[#627382] mx-auto max-w-3xl">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter,
          and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>
        <div className="hero-buttons mt-6 flex justify-center gap-4">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg flex items-center gap-2">
            <img src={googleAppImg} alt="Google Play" className="w-10 h-10" />
            Google Play
          </button>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg flex items-center gap-2">
            <img src={appStoreImg} alt="App Store" className="w-10 h-10" />
            App Store
          </button>
        </div>
      </div>

      {/* Hero Image + Stats */}
      <div className="hero-image mt-10 relative">
        <img src={bannerImg} alt="Banner" className="mx-auto w-full max-w-4xl" />
        <div className="bg-primary text-white mb-8 p-6 rounded-lg shadow-lg max-w-4xl mx-auto -mt-32 relative z-10">
          <h2 className="text-center font-bold text-3xl mb-6">Trusted by Millions, Built for You</h2>
          <div className="stats shadow grid grid-cols-3 gap-4">
            <div className="stat place-items-center">
              <div>Total Downloads</div>
              <div className="stat-value">29.6M</div>
              <div>21% more than last month</div>
            </div>
            <div className="stat place-items-center">
              <div>Total Reviews</div>
              <div className="stat-value">906k</div>
              <div>46% more than last month</div>
            </div>
            <div className="stat place-items-center">
              <div>Active Apps</div>
              <div className="stat-value">132+</div>
              <div>31 more will Launch</div>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Apps */}
      <div className="py-20">
        <h1 className='text-black text-center font-bold text-4xl mb-4'>Trending Apps</h1>
        <p className='text-center font-semibold text-gray-500 mb-10'>
          Explore All Trending Apps on the Market developed by us
        </p>

        <Suspense fallback={
          <div className="flex justify-center py-20">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        }>
          <Products productPromise={productPromise} limit={8} />
        </Suspense>

        <div className="text-center mt-12">
          <NavLink to="/apps">
            <button className='btn btn-primary btn-lg'>All APPS</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;