import React from 'react';

const CartCard = ({item}) => {
    console.log(item);
    return (
        <div className=' bg-base-200 shadow shadow-gray-200 p-6 rounded-2xl  flex justify-between'>
            <div className=' flex space-x-3 items-center'>
                <span className=' bg-white  rounded-full p-0.5 '>{item.icon}</span>
                <div>
                    <h4 className=' font-semibold'>{item.name}</h4>
                    <p className = 'text-[#615e5e]'>${item.price}</p>
                </div>
            </div>
            <button className = ' text-[#ff3980] cursor-pointer hover:text-[#fc006d]'>Remove</button>
        </div>
    );
};

export default CartCard;