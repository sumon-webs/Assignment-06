import React from 'react';
import Banners from './assets/banner.png'
import { Play } from 'lucide-react';

const Banner = () => {
    return (
        <div className="  hero py-10 md:my-20">
            <div className="hero-content space-y-12 lg:space-y-0 flex-col lg:flex-row-reverse container mx-auto">
                <img
                    src={Banners}
                    className=" rounded-lg shadow-2xl  object-cover"
                />
                <div className=' text-left  xl:pr-72'>
                    <div className=' badge badge-soft badge-primary flex items-center rounded-full'>
                        <div className=' w-1.5 h-1.5 rounded-full bg-gradient-to-b from-[#4f39f6] to-[#9514fa]   '></div>
                        <p>New: AI-Powered Tools Available</p>
                    </div>
                    <div className=' space-y-2 lg:pt-3'>
                        <h1 className=" text-3xl md:text-6xl font-semibold leading-12 md:leading-16">Supercharge Your Digital Workflow</h1>
                        <p className="text-[#627382FF] md:leading-8 ">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <div className=' space-x-4'>
                            <button className=' btn btn-primary rounded-full'>Explore Products</button>
                            <button className=' btn btn-outline btn-primary rounded-full'><Play/> Watch Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;