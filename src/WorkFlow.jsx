import React from 'react';

const WorkFlow = () => {
    return (
        <div className='bg-gradient-to-b from-[#4f39f6] to-[#9514fa] mt-10 '>
            <div className=' container mx-auto text-center py-8 md:py-16 space-y-4'  >
                <h2 className=' text-3xl md:text-5xl font-semibold text-white'>Ready to Transform Your Workflow?</h2>
                <p className = 'text-[#ebebeb]'>Join thousands of professionals who are already using Digitools to work smarter.  <br />Start your free trial today.</p>
                <div className=' space-x-4'>
                    <button className=' btn rounded-full'>Explore Products</button>
                    <button className=' btn btn-outline rounded-full text-white'>View Pricing</button>
                </div>
                <p className = 'text-[#ebebeb] text-[12px] md:text-1xl'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default WorkFlow;