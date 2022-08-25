import React from 'react';

const Product = ({product}) => {
    console.log(product);
    const {img,description,name,price,quantity}=product;
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">Name:<span className='text-primary'>{name}</span></h2>
                <p>{description}</p>
                <p className='font-bold text-left'>Price:<span className='ml-1'>${price}</span></p>
                <p className='font-bold '>Quantity:<span className='ml-1'>{quantity}</span></p>
                <div class="card-actions">
                <button class="btn btn-primary hover:bg-white hover:text-primary mt-3">Buy Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Product;