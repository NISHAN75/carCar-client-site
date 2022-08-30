import 'animate.css';
import React from "react";
import { Link } from "react-router-dom";
import { Td, Tr } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const ManageDetails = ({product,handleDelete}) => {
    const {img,name,price,quantity,_id,supplier,email}=product;
    const totalPrice = parseInt(quantity) * parseInt(price);
    
   
  return (
    <Tr className="my-5 border-primary p-5">
      <Td className=" font-bold border-b-4  border-primary">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} className="w-full h-auto" />
          </div>
        </div>
      </Td>
      <Td className=" font-bold border-b-4  border-primary"><h2 className="text-xl text-primary ">{name}</h2></Td>
      <Td className=" font-bold border-b-4 border-primary">{email}</Td>
      <Td className=" font-bold border-b-4 border-primary"><p>${price}</p></Td>
      <Td className=" font-bold border-b-4 border-primary"><p>{quantity}</p></Td>
      <Td className=" font-bold border-b-4 border-primary"><p>${totalPrice}</p></Td>
      <Td className=" font-bold border-b-4  border-primary "><h5>{supplier}</h5></Td>
      <Td className=" font-bold border-b-4  border-primary">
        <button className="btn btn-primary text-white hover:bg-white hover:text-primary  mt-3 animate__animated animate__backInUp animate__delay-2s"><Link to={`/inventory/${_id}`}>Update</Link></button><br/>
        <button onClick={()=> handleDelete(_id)} className="btn btn-primary text-white hover:bg-white hover:text-primary mt-3 animate__animated animate__backInUp animate__delay-3s mb-4">Delete</button>
      </Td>
    </Tr>
  );
};

export default ManageDetails;
