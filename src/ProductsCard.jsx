import { Check } from 'lucide-react';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const ProductsCard = ({ data, cartItem, setCartItems, amount, setAmount }) => {
    const [click, setClick] = useState(true)


    const handleBuyNow = (data) => {
        const exist = cartItem.some(c => c.id === data.id)
        if (!exist) {
            setCartItems([...cartItem, data])
            toast.success(`${data.name}'s add success`)
            setAmount(amount + data.price)
            setClick(false)
        } else {
            toast.warning(`${data.name}'s already have cart`)
        }
    }

    return (
        <>
            <div className="card bg-base-100 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">

                <div className="card-body relative space-y-2 p-4 sm:p-5 md:p-6">

                    {/* Tag */}
                    <p
                        className={`absolute right-2 top-2 text-xs sm:text-sm badge badge-soft 
            ${data.tag === 'best seller'
                                ? 'badge-warning'
                                : data.tag === 'new'
                                    ? 'badge-accent'
                                    : data.tag === 'popular'
                                        ? 'badge-primary'
                                        : ''}`}
                    >
                        {data.tag}
                    </p>

                    {/* Icon */}
                    <span className='border border-gray-300 rounded-full w-fit p-1 sm:p-2 text-lg'>
                        {data.icon}
                    </span>

                    {/* Title */}
                    <h3 className='text-lg sm:text-xl md:text-2xl font-semibold'>
                        {data.name}
                    </h3>

                    {/* Description */}
                    <p className='text-sm sm:text-base text-[#627382FF]'>
                        {data.description}
                    </p>

                    {/* Price */}
                    <p>
                        <span className='text-xl sm:text-2xl font-semibold'>
                            ${data.price}
                        </span>
                        <span className="text-sm sm:text-base">/Month</span>
                    </p>

                    {/* Features */}
                    <div className='space-y-1'>
                        {
                            data.features.map((f, index) => (
                                <div key={index} className='flex items-start space-x-2 text-sm sm:text-base'>
                                    <Check className='text-green-400 w-4 mt-1' />
                                    <p>{f}</p>
                                </div>
                            ))
                        }
                    </div>

                    {/* Button */}
                    <button
                        onClick={() => handleBuyNow(data)}
                        className='btn btn-primary w-full rounded-full mt-3 text-sm sm:text-base'
                    >
                        {click ? 'Buy Now' : 'Added to Cart'}
                    </button>

                </div>
            </div>
        </>
    );
};

export default ProductsCard;