import React from 'react';

const RattingCard = () => {
    return (
        <div className='bg-gradient-to-b from-[#4f39f6] to-[#9514fa] md:mt-10 mb-16 lg:mb-30'>
            <div className=' container mx-auto flex justify-around flex-wrap py-6 md:py-16'  >
                <div className=' space-y-2'>
                    <h2 className=' text-3xl md:text-5xl text-white font-bold'>50K+</h2>
                    <p className=' text-white'>Active Users</p>
                </div>
                <div className=' space-y-2'>
                    <h2 className=' text-3xl md:text-6xl text-white font-bold'>200+</h2>
                    <p className=' text-white'>Premium Tools</p>
                </div>
                <div className=' space-y-2'>
                    <h2 className=' text-3xl md:text-6xl text-white font-bold'>4.9+</h2>
                    <p className=' text-white'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default RattingCard;