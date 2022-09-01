import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Table, Tbody, Th, Thead, Tr } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import useAuth from "../../Hooks/useAuth";
import MyItem from "../MyItem/MyItem";
import { useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { FaRegPaperPlane , FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const MyItems = () => {
  const [auth] = useAuth();
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  const navigate=useNavigate();


  useEffect(() => {
    const email = user?.email;
    const getMyItems = async () => {
      const url = `https://tranquil-wildwood-06731.herokuapp.com/myItems?email=${email}`;
      try{
        const {data} = await axios.get(url,{
          headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        });
        setMyItems(data);
      }
      catch(error){
        toast(error.message);
          signOut(auth);
          navigate('/login');
         
      }
      
      
    };
    getMyItems();
  }, [user]);


  const handleDelete = (id) => {
    const agree = window.confirm("Are You sure want to Delete This Inventory");
    if (agree) {
      console.log("click", id);
      const url = `https://tranquil-wildwood-06731.herokuapp.com/myItems/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = myItems.filter((item) => item._id !== id);
            setMyItems(remaining);
            toast("Delete Sucessfully Selected items");
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
