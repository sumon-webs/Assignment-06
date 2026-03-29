import React, { act, Suspense, useState } from 'react';
import Products from './Products';
import Carts from './Carts';

const Tab = () => {

    const [active, setActive] = useState('Products')

    const [cartItem, setCartItems] = useState([])

    const dataPromise = fetch('tools.json')
        .then(res => res.json())

    return (
        <div className=' container mx-auto space-y-6'>
            <div className=' text-center  space-y-3.5 '>
                <h2 className=' text-6xl font-semibold'>Premium Digital Tools</h2>
                <p className=' text-[#627382FF]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>
            <div className=" flex justify-center pb-16">
                <button
                    onClick={() => setActive('Products')}
                    className={`btn  rounded-full rounded-r-none px-8 ${active === 'Products' && 'btn-primary'}`}>
                    Products
                </button>
                <button
                    onClick={() => setActive('Cart')}
                    className={`btn  rounded-full rounded-l-none px-8 ${active === 'Cart' && 'btn-primary'}`}>
                    Cart
                </button>


            </div>
            <div className=' container mx-auto'>
                {
                    active === 'Products'
                    && <Suspense fallback={<span className="loading loading-spinner"></span>}>
                        <Products cartItem = {cartItem} setCartItems = {setCartItems} dataPromise={dataPromise} />
                    </Suspense>
                }
            </div>
            {
                active === 'Cart' && <Carts cartItem = {cartItem}/>
            }
        </div>
    );
};

export default Tab;