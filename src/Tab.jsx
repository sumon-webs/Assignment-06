import React, { act, Suspense, useState } from 'react';
import Products from './Products';
import Carts from './Carts';

const Tab = () => {

    const [active, setActive] = useState('Products')

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
            {
                active === 'Products'
                && <Suspense>
                    <Products dataPromise = {dataPromise}/>
                </Suspense>
            }
            {
                active === 'Cart' && <Carts />
            }
        </div>
    );
};

export default Tab;