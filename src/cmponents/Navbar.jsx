import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Navbar = ({ cartCount }) => {
    return (
        <div className=' shadow'>
            <div className="container mx-auto navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a href="">Products</a></li>
                            <li><a href="">Features</a></li>
                            <li><a href="">Pricing</a></li>
                            <li><a href="">Testimonials</a></li>
                            <li><a href="">FAQ</a></li>
                        </ul>
                    </div>
                    <a className="  text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 pb-2.5">DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[#101727FF] font-semibold">
                        <li><a href="">Products</a></li>
                        <li><a href="">Features</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Testimonials</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    <div className="relative inline-block">
                        <ShoppingCart className="w-4 h-4 sm:w-6 sm:h-6 cursor-pointer text-gray-700 hover:text-indigo-500 transition" />
                        {
                            cartCount > 0 && <div className=' 
                            w-3 h-3 sm:w-4 sm:h-4 bg-orange-400 rounded-full absolute -top-2 right-0 '><p className='absolute -bottom-1 left-1 text-black text-[12px] sm:text-1xl'>{cartCount}</p></div>
                        }
                    </div>
                    <p className='text-[#101727FF] font-semibold cursor-pointer hover:text-[#525c74]'>Log in</p>
                    <a className=" text-[12px] sm:text-[16px] btn rounded-full  btn-primary" >Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;