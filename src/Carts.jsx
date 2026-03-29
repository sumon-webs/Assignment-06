import React from 'react';
import CartCard from './CartCard';

const Carts = ({cartItem}) => {
    return (
        <>
            {
                cartItem.map(item => <CartCard key={item.id} item = {item}/>)
            }
        </>
    );
};

export default Carts;