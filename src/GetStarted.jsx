import React from 'react';
import User from './assets/user.png'
import Package from './assets/package.png'
import Rocket from './assets/rocket.png'

const GetStarted = () => {
    return (
        <div className='bg-gray-100 text-center my-30'>
            <div className=' container mx-auto py-24'>
                <h3 className=' text-6xl font-semibold mb-3'>Get Started in 3 Steps</h3>
                <p className=' text-[#627382FF]'>Start using premium digital tools in minutes, not hours.</p>
                <div className=' flex justify-center mt-16 gap-26'>
                    <div className='px-2 w-72 h-72 shadow rounded-2xl flex flex-col justify-center items-center space-y-2 relative'>
                        <span className='text-white rounded-full absolute right-2 top-2 bg-primary py-0.5 px-1'>01</span>
                        <img src={User} alt="" />
                        <h3 className=' text-2xl font-semibold'>Create Account</h3>
                        <p className=' text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    <div className='px-2 w-72 h-72 shadow rounded-2xl flex flex-col justify-center items-center space-y-2 relative'>
                        <span className='text-white rounded-full absolute right-2 top-2 bg-primary py-0.5 px-1'>02</span>
                        <img src={Package} alt="" />
                        <h3 className=' text-2xl font-semibold'>Choose Products</h3>
                        <p className=' text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                    <div className='px-2  w-72 h-72 shadow rounded-2xl flex flex-col justify-center items-center space-y-2 relative'>
                        <span className='text-white rounded-full absolute right-2 top-2 bg-primary py-0.5 px-1'>03</span>
                        <img src={Rocket} alt="" />
                        <h3 className=' text-2xl font-semibold'>Start Creating</h3>
                        <p className=' text-[#627382]'>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;