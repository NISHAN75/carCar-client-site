import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Table, Thead, Tbody, Tr, Th } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import useAuth from "../../Hooks/useAuth";
import MyItem from "../MyItem/MyItem";

const MyItems = () => {
  const [auth] = useAuth();
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    const email = user?.email;
    const getMyItems = async () => {
      const url = `http://localhost:5000/myItems?email=${email}`;
      const {data} = await axios.get(url);
      setMyItems(data);
    };
    getMyItems();
  }, [user]);
  console.log(myItems);

  const handleDelete = (id) => {
    const agree = window.confirm("Are You sure want to Delete This Inventory");
    if (agree) {
      console.log("click", id);
      const url = `http://localhost:5000/myItems/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = myItems.filter((item) => item._id !== id);
            setMyItems(remaining);
          }
        });
    }
  };

  return (
    <div className="my-10 mx-10">
      <Table className="text-center">
        <Thead>
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
          {myItems.map((item) => (
            <MyItem
            item={item}
              key={item._id}
              handleDelete={handleDelete}
            ></MyItem>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default MyItems;
