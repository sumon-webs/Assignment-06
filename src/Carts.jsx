import React, { useState } from 'react';
import CartCard from './CartCard';
import { toast } from 'react-toastify';

const Carts = ({ cartItem, setCartItems, amount, setAmount }) => {

    const handleProceed = () =>{
        setCartItems([])
        toast.success("Order success")
    }

    return (
        <>
            <div className=' shadow p-4 rounded-2xl space-y-3'>
                <h3 className=' text-2xl font-semibold '>Your Cart</h3>
                {
                    cartItem.length === 0
                        ? <div className=' py-16 text-center text-2xl'>
                            <p>Cart is empty</p>
                        </div>
                        : <div className=' space-y-6'>
                            <div className=' space-y-6'>
                                {
                                    cartItem.map(item => <CartCard  key={item.id} cartItem={cartItem} setCartItems={setCartItems} amount = {amount} setAmount = {setAmount} item={item} />)
                                }
                            </div>
                            <div className=' flex justify-between'>
                                <p className='text-[#383737]'>Total</p>
                                <p className='text-2xl font-semibold'>${amount}</p>
                            </div>
                            <button onClick={() => handleProceed()} className=' btn btn-primary w-full rounded-full'>Proceed to Checkout</button>
                        </div>
                }

            </div>
        </>
    );
};

export default Carts;