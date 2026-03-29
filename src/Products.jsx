import React, { use } from 'react';
import ProductsCard from './ProductsCard';

const Products = ({ dataPromise, cartItem, setCartItems, amount, setAmount }) => {
    const dataLoad = use(dataPromise)

    return (
        <>
            <div className=' grid grid-cols-3 gap-5'>
                {
                    dataLoad.map(data => <ProductsCard amount={amount} setAmount={setAmount} cartItem={cartItem} setCartItems={setCartItems} key={data.id} data={data} />)
                }
            </div>
        </>
    );
};

export default Products;