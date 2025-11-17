import React from 'react';
import AppErrorImg from '../../assets/App-Error.png'
const AppError = () => {
    return (
        <div className=''>
            <img src={AppErrorImg} alt="AppErrorImg" />
            <h1 className='text-4xl font-bold'>OPPS!! APP NOT FOUND</h1>
            <p className='font-semibold'>The App you are requesting is not found on our system.  please try another apps</p>
            <button className='btn btn-gradient'>Go Back </button>
        </div>
    );
};

export default AppError;