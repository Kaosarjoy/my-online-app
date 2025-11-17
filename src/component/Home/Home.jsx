import React from 'react';
import googleAppImg from '../../assets/playstore.png'
import appStoreImg from '../../assets/app.png'
import bannerImg from '../../assets/hero.png'
const Home = () => {
    return (
      <div className="hero-section">
  <div className="hero-text text-center">
    <h1 className='text-6xl font-bold text-[#001931] mt-3'> 
      We Build  <br /><span className="text-primary">Productive</span> Apps
    </h1>
    <p className="text-center mt-4 text-[#627382] mx-auto">
      At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, 
      and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
    </p>
    <div className="hero-buttons mt-6 flex justify-center gap-4">
      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl flex items-center gap-2">
        <img src={googleAppImg} alt="Google Play" className="w-10 h-10" />
        Google Play
      </button>
      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl flex items-center gap-2">
        <img src={appStoreImg} alt="App Store" className="w-10 h-10" />
        App Store
      </button>
    </div>
  </div>

  <div className="hero-image mt-10 relative">
    <img src={bannerImg} alt="Banner" className="mx-auto" />

    <div className="bg-primary text-white mb-4 p-6 rounded-lg shadow-lg">
      <h2 className="text-center font-bold text-3xl mb-6">Trusted by Millions, Built for You</h2>
      
      <div className="stats shadow">
        <div className="stat place-items-center">
          <div className="text-white">Total Downloads</div>
          <div className="stat-value">29.6M</div>
          <div className="text-white">21% more than last month</div>
        </div>

        <div className="stat place-items-center">
          <div className="text-white">Total Reviews</div>
          <div className="stat-value">906k</div>
          <div className="text-white">46% more than last month</div>
        </div>

        <div className="stat place-items-center">
          <div className="text-white">Active Apps</div>
          <div className="stat-value">132+</div>
          <div className="text-white">31 more will Launch</div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <h1 className='text-black text-center font-bold text-2xl '>Trending Apps</h1>
    <p className='font-semibold text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
  </div>
</div>

    );
};

export default Home;