import { Check } from 'lucide-react';
import React from 'react';

const Pricing = () => {
    return (
        <div className=' container mx-auto my-26 space-y-28'>
            <div className='text-center'>
                <h3 className=' text-6xl font-semibold mb-3'>Simple, Transparent Pricing</h3>
                <p className=' text-[#627382FF]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className=' flex  justify-evenly'>
                <div className="card w-72  bg-base-100 shadow-sm">
                    <div className="flex flex-col h-full justify-between   p-4">
                        <div className='space-y-2'>
                            <div className=' space-x-1'>
                                <h4 className=' text-2xl font-semibold'>Starter</h4>
                                <p>Perfect for getting started</p>
                            </div>
                            <p><span className=' text-2xl font-semibold'>$29</span>/month</p>
                            <ul className="space-y-1">

                                <li className="flex items-center space-x-2">
                                    <Check className="text-green-500 w-4" />
                                    <span>1 project per month</span>
                                </li>

                                <li className="flex items-center space-x-2">
                                    <Check className="text-green-500 w-4" />
                                    <span>Community support</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <Check className="text-green-500 w-4" />
                                    <span>Basic templates</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <Check className="text-green-500 w-4" />
                                    <span>Access to 10 free tools</span>
                                </li>
                            </ul>
                        </div>
                        <button className=' btn btn-primary rounded-full w-full item-end'>Get Started Free</button>
                    </div>
                </div>
                <div className="relative card w-72 text-white shadow-sm bg-primary">
                    <span className=' badge badge-warning absolute right-[32%] -top-2'>Most Popular</span>
                    <div className=" flex flex-col h-full justify-between   p-4">
                        <div className='space-y-2'>
                            <div className=' space-x-1'>
                                <h4 className=' text-2xl font-semibold'>pro</h4>
                                <p className = 'text-[#ebe6e6]"'>Best for professionals</p>
                            </div>
                            <p><span className=' text-2xl font-semibold'>$0</span>/month</p>
                            <ul className="space-y-1 text-[#ebe6e6]">
                                <li className="flex items-center space-x-2">
                                    <Check className="text-green-500 w-4" />
                                    <span>Advanced analytics</span>
                                </li>

                                <li className="flex items-center space-x-2">
                                    <Check className="text-green-500 w-4" />
                                    <span>Cloud sync</span>
                                </li>

                                <li className="flex items-center space-x-2">
                                    <Check className="text-green-500 w-4" />
                                    <span>Unlimited projects</span>
                                </li>

                                <li className="flex items-center space-x-2">
                                    <Check className="text-green-500 w-4" />
                                    <span>Priority support</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <Check className="text-green-500 w-4" />
                                    <span>Unlimited templates</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <Check className="text-green-500 w-4" />
                                    <span>Access to all premium tools</span>
                                </li>
                            </ul>
                        </div>
                        <button className=' btn  rounded-full w-full item-end'>Get Started Free</button>
                    </div>
                </div>

                <div className="card w-72  bg-base-100 shadow-sm">
                    <div className="flex flex-col h-full justify-between   p-4">
                        <div className='space-y-2'>
                            <div className=' space-x-1'>
                                <h4 className=' text-2xl font-semibold'>Enterprise</h4>
                                <p>For teams and businesses</p>
                            </div>
                            <p><span className=' text-2xl font-semibold'>$0</span>/month</p>
                            <ul className="space-y-1">
                                <li className="flex items-center space-x-2">
                                    <Check className="text-green-500 w-4" />
                                    <span>Everything in Pro</span>
                                </li>

                                <li className="flex items-center space-x-2">
                                    <Check className="text-green-500 w-4" />
                                    <span>Team collaboration</span>
                                </li>

                                <li className="flex items-center space-x-2">
                                    <Check className="text-green-500 w-4" />
                                    <span>Custom integrations</span>
                                </li>

                                <li className="flex items-center space-x-2">
                                    <Check className="text-green-500 w-4" />
                                    <span>Dedicated support</span>
                                </li>
                            </ul>
                        </div>
                        <button className=' btn btn-primary rounded-full w-full item-end'>Get Started Free</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;