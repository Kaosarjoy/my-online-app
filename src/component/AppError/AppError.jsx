import React from 'react';
import AppErrorImg from '../../assets/App-Error.png'
import { NavLink, useNavigate } from 'react-router';
const AppError = () => {
     const navigate = useNavigate()
    return (
        <div className='flex flex-col min-h-screen bg-base-200'>
            <div className=" flex flex-col items-center justify-center text-center p-4">
                <img src={AppErrorImg} alt="AppErrorImg"  className="mb-6" />
            <h1 className='text-4xl font-bold'>OPPS!! APP NOT FOUND</h1>
            <p className='font-semibold'>The App you are requesting is not found on our system.  please try another apps</p>
          <NavLink to='/apps'>
              <button
           onClick={() => navigate(-1)} className='btn btn-gradient'>Go Back </button>
          </NavLink>
            </div>
        </div>
    );


};

export default AppError;



      
      
     
        
     