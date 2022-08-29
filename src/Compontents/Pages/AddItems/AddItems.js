import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAuth from '../../../Hooks/useAuth';

const AddItems = () => {
    const [auth] = useAuth();
  const [user] = useAuthState(auth);
  console.log(user);
  const handleInventory = (event) => {
    event.preventDefault();
    const email = user.email;
    const name = event.target.Carname.value;
    const description = event.target.description.value;
    const price = event.target.priceNumber.value;
    const quantity = event.target.quantityNumber.value;
    const supplier = event.target.supplierName.value;
    const img = event.target.photoUrl.value;


    const newInventory = {
      email,
      name,
      description,
      price,
      quantity,
      supplier,
      img,
    };
    console.log(newInventory);
    fetch("https://tranquil-wildwood-06731.herokuapp.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newInventory),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("Add A Inventory Successfully");
        event.target.reset();
      });
  };
    return (
        <div className='text-center my-20'>
            <h2 className="text-primary text-5xl mb-10">Add Items</h2>
            <form onSubmit={handleInventory}>
            <input type="email" disabled
                value={user.email}
                readOnly placeholder="Enter Your Email" name='email' class="input input-bordered input-primary w-full max-w-xs" required/><br/>
            <input type="text" placeholder="Enter Car Name" name='Carname' class="input input-bordered input-primary w-full max-w-xs mt-5" required /><br/>
            <input type="text" placeholder="Enter Description" class="input input-bordered input-primary w-full max-w-xs mt-5" name='description' required /><br/>
            <input type="number" placeholder="Enter Price" name='priceNumber' class="input input-bordered input-primary w-full max-w-xs mt-5" required /><br/>
            <input type="number" placeholder="Enter Quantity" name='quantityNumber' class="input input-bordered input-primary w-full max-w-xs mt-5" required /><br/>
            <input type="text" placeholder="Enter Supplier Name" name='supplierName' class="input input-bordered input-primary w-full max-w-xs mt-5" required /><br/>
            <input type="text" placeholder="Enter Phote Url" name='photoUrl' class="input input-bordered input-primary w-full max-w-xs mt-5" required /><br/>
            <input type="submit" value="Submit" class="btn btn-primary w-1/4 mt-5" required />
            </form>
            
        </div>
    );
};

export default AddItems;