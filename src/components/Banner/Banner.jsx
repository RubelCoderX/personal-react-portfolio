import React from 'react';
import profilePic from '../../assets/images/user.png';

const Banner = () => {
    return (
        <div className='mt-24 bg-bgShade '>
            <div className='flex flex-col md:flex-row-reverse items-center justify-between container mx-auto '>
                <div className='md:1/2 '>
                    <img src={profilePic} alt="" className=''/>
                </div>
                <div className='md:w-1/3 w-full mt-5 ml-10'>
                    <h1 className='text-6xl font-bold mb-4'>One Step Closer To Your <span className='text-primary'>Dream Job</span></h1>
                    <h4 className='text-xl font-semibold text-gray-400 mb-5 w-full'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</h4>
                    <button className='btnPrimary'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;