import 'animate.css';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `https://tranquil-wildwood-06731.herokuapp.com/products/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const totalPrice = parseInt(product.quantity) * parseInt(product.price);
  const deliveredHandle = (event) => {
    event.preventDefault();
    const fieldQuantity = parseInt(product.quantity);
    const addQuantity = fieldQuantity - 1;
    const updateQuantity = { addQuantity };
    const url = `https://tranquil-wildwood-06731.herokuapp.com/products/${product._id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        const quantity = updateQuantity.addQuantity;
        const newProduct = { ...product, quantity };
        setProduct(newProduct);
      });
  };
  const handleAddQuantity = (event) => {
    event.preventDefault();
    const fieldQuantity = parseInt(product.quantity);
    const inputQuantity = parseInt(event.target.number.value);
    const addQuantity = fieldQuantity + inputQuantity;
    const updateQuantity = { addQuantity };
    const url = `https://tranquil-wildwood-06731.herokuapp.com/products/${product._id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const quantity = updateQuantity.addQuantity;
          const newProduct = { ...product, quantity };
          setProduct(newProduct);
          event.target.reset();
        }
      });
    
    
  };

  return (
    <div className="my-28 mx-10 grid lg:grid-cols-2 gap-14 justify-center items-center">
      <div className="card w-full bg-base-100 shadow-xl animate__animated animate__backInLeft animate__delay-0.5s">
        <figure className="px-10 pt-10">
          <img src={product.img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            Name:<span className="text-primary">{product.name}</span>
          </h2>

          <p className="font-bold">
            supplier:{" "}
            <span className="text-primary ml-2">{product.supplier}</span>
          </p>
          <p className="font-bold text-left">
            Price:<span className="ml-1">${product.price}</span>
          </p>
          <p className="font-bold">
            Quantity:<span className="ml-1">{product.quantity}</span>
          </p>
          <p className="font-bold">
          totalPrice:<span className="ml-1">${totalPrice}</span>
          </p>
          <div className="card-actions">
                <button onClick={deliveredHandle} className="btn btn-primary px-10 hover:bg-white hover:text-primary mt-3">Delivered</button>
                </div>
        </div>
      </div>
      
      <div>
        <form onSubmit={handleAddQuantity}>
          <input
            type="number"
            name="number"
            required
            placeholder=" Add Quantity"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <br/>
          <button className="btn btn-primary mt-5 px-10">Add quantity</button>
        </form>
      </div>
    </div>
  );
};

export default ProductDetails;
