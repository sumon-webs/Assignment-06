import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className=' bg-neutral'>
            <div className=' container mx-auto text-[#c5c1c1] py-20'>
                <div className=' grid grid-cols-7 mx-auto mb-10 pb-6 border-b border-gray-50'>
                    <div className=' col-span-2 pr-20 space-y-2'>
                        <h1 className=' text-4xl text-white font-semibold'>DigiTools</h1>
                        <p>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>
                    <div className=' space-y-2'>
                        <h3 className=' text-2xl text-white font-semibold'>Product</h3>
                        <ul className="space-y-2">
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Templates</li>
                            <li>Integrations</li>
                            <li>Integrations</li>
                        </ul>
                    </div>
                    <div className=' space-y-2'>
                        <h3 className=' text-2xl text-white font-semibold'>Company</h3>
                        <ul className="space-y-1">
                            <li>About</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Press</li>
                        </ul>
                    </div>
                    <div className=' space-y-2'>
                        <h3 className=' text-2xl text-white font-semibold'>Resources</h3>
                        <ul>
                            <li>Documentation</li>
                            <li>Help Center</li>
                            <li>Community</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className=' col-span-2 space-y-4'>
                        <h3 className=' text-2xl text-white font-semibold'>Social Media</h3>
                        <ul className=' flex space-x-3'>
                            <li className=' bg-white rounded-full'><a className=' cursor-pointer ' href=""> <FontAwesomeIcon icon={faInstagram} className=' text-black'/> </a></li>
                            <li className=' bg-white rounded-full'><a className=' cursor-pointer ' href=""> <FontAwesomeIcon icon={faFacebook} className=' text-black'/></a></li>
                            <li className=' bg-white rounded-full'><a className=' cursor-pointer' href=""> <FontAwesomeIcon icon={faTwitter} className=' text-black'/></a></li>
                        </ul>
                    </div>
                </div>

                <div className=' flex justify-between'>
                    <p><small>© 2026 Digitools. All rights reserved.</small></p>
                    <div>
                        <ul className=' flex space-x-4'>
                            <li>Privacy Policy </li>
                            <li> Terms of Service </li>
                            <li>Cookies </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;