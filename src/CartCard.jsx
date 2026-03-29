import React from 'react';
import { toast } from 'react-toastify';

const CartCard = ({ item, cartItem, setCartItems, amount, setAmount }) => {

    const handleDelete = () => {
        const filterData = cartItem.filter(c => c.id !== item.id)
        setCartItems(filterData)
        setAmount (amount - item.price)
        toast.warning(`${item.name}'s Delete success`)
    }

    return (
        <div className=' bg-base-200 shadow shadow-gray-200 p-6 rounded-2xl  flex justify-between'>
            <div className=' flex space-x-3 items-center'>
                <span className=' bg-white  rounded-full p-0.5 '>{item.icon}</span>
                <div>
                    <h4 className=' font-semibold'>{item.name}</h4>
                    <p className='text-[#615e5e]'>${item.price}</p>
                </div>
            </div>
            <button onClick={() => handleDelete(cartItem)} className=' text-[#ff3980] cursor-pointer hover:text-[#fc006d]'>Remove</button>
        </div>
    );
};

export default CartCard;