import React from 'react';
import {Link} from 'react-router-dom';
import 'animate.css';

const Product = ({product}) => {
    const {img,description,name,price,quantity,_id,supplier}=product;
    return (
        <div>
            <div class="card w-full bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">Name:<span className='text-primary'>{name}</span></h2>
                <p>{description}</p>
                <p className='font-bold'>supplier: <span className='text-primary ml-2'>{supplier}</span></p>
                <p className='font-bold text-left'>Price:<span className='ml-1'>${price}</span></p>
                <p className='font-bold'>Quantity:<span className='ml-1'>{quantity}</span></p>
                <div class="card-actions">
                <button class="btn btn-primary hover:bg-white hover:text-black mt-3 animate__animated animate__backInUp animate__delay-3s"><Link to={`/inventory/${_id}`}>Update</Link></button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Product;