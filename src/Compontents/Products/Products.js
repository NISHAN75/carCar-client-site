import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
    return (
        <div>
            <h2 className='text-center font-bold text-4xl text-primary my-10'>Our Lastest Collection</h2>
            <div className='grid lg:grid-cols-3 gap-5'>
            {
                products.map(product => <Product product={product} key={product._id}></Product>)
            }
            </div>
        </div>
    );
};

export default Products;