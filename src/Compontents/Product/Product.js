import 'animate.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {img,description,name,price,quantity,_id,supplier}=product;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name:<span className='text-primary'>{name}</span></h2>
                <p>{description}</p>
                <p className='font-bold'>supplier: <span className='text-primary ml-2'>{supplier}</span></p>
                <p className='font-bold text-left'>Price:<span className='ml-1'>${price}</span></p>
                <p className='font-bold'>Quantity:<span className='ml-1'>{quantity}</span></p>
                <div className="card-actions">
                <button className="btn btn-primary hover:bg-white hover:text-black mt-3 animate__animated animate__backInUp animate__delay-3s"><Link to={`/inventory/${_id}`}>Update</Link></button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Product;