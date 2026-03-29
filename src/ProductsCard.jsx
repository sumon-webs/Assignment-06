import { Check } from 'lucide-react';
import React from 'react';

const ProductsCard = ({ data,cartItem, setCartItems }) => {

    const handleBuyNow = (data) =>{
        setCartItems([...cartItem, data])
        
    }

    return (
        <div className="card  bg-base-100 shadow-lg border border-gray-200">
            <div className="card-body relative space-y-1">
                <p
                    className={` absolute right-2 top-2 badge badge-soft 
                ${data.tag === 'best seller'
                            ? 'badge-warning' : data.tag === 'new' ? 'badge-accent' : data.tag === 'popular' ? 'badge-primary' : null}`}>
                    {data.tag}
                </p>
                <span className=' border border-gray-300 rounded-full w-fit p-0.5'>{data.icon}</span>
                <h3 className=' text-2xl font-semibold'>{data.name}</h3>
                <p className=' text-[#627382FF]'>{data.description}</p>
                <p><span className=' text-2xl font-semibold'>${data.price}</span>/Month</p>
                <div className=' space-y-0.5 '>
                    {
                        data.features.map((f, index) =>
                            <div key={index} className=' flex space-x-1.5'>
                                <Check className='text-green-400 w-4' /> <p >{f}</p>
                            </div>)
                    }
                </div>
                <button
                    onClick={() => handleBuyNow(data)}
                    className='btn btn-primary w-full rounded-full'>Buy Now</button>
            </div>
        </div>
    );
};

export default ProductsCard;