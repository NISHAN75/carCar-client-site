import React, { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import ManageDetails from "./ManageDetails";

const ManageInventory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://tranquil-wildwood-06731.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleDelete = (id) => {
    console.log(id);
    const agree = window.confirm("Are You sure want to Delete This Inventory");
    if (agree) {
      console.log("click", id);
      const url = `http://localhost:5000/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          }
        });
    }
  };
  return (
    <div className="my-10 mx-10">
       
      <Table className="text-center">
        <Thead >
          <Tr className="p-10 bg-primary mb-10">
            <Th></Th>
            <Th className="mr-2">Car Name</Th>
            <Th>Email</Th>
            <Th>Price</Th>
            <Th>Quantity</Th>
            <Th>total</Th>
            <Th>Supplier</Th>
          </Tr>
        </Thead>
        <Tbody className="my-20">
          {products.map((product) => (
            <ManageDetails product={product} key={product._id} handleDelete={handleDelete}></ManageDetails>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default ManageInventory;
