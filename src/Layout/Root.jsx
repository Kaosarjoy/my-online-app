import React from 'react';

import Navbar from '../component/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
           <Navbar className="glass"></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;