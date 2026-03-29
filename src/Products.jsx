import React, { use } from 'react';
import ProductsCard from './ProductsCard';

const Products = ({ dataPromise }) => {
    const dataLoad = use(dataPromise)

    return (
        <>
            <div className=' grid grid-cols-3 gap-5'>
                {
                    dataLoad.map(data => <ProductsCard key={data.id} data={data} />)
                }
            </div>
        </>
    );
};

export default Products;