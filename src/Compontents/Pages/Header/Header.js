import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
  const [auth] =useAuth();
  const [user] =useAuthState(auth);
  const logOut =() =>{
    signOut(auth);
  }
    return (
        <div>
           <div className="navbar bg-[#242931]">
  <div className="navbar-start ">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li tabIndex="0">
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl text-white">CarCare</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><Link to="/" className='font-bold text-white hover:bg-white hover:text-black active:bg-red'>Home</Link></li>
      <li><Link to="/inventory" className='font-bold text-white hover:bg-white hover:text-black active:bg-red'>Inventory</Link></li>
      <li><Link to="/manage" className='font-bold text-white hover:bg-white hover:text-black active:bg-red'>Manage Items</Link></li>
      <li><Link to="/addItems" className='font-bold text-white hover:bg-white hover:text-black active:bg-red'>Add Items</Link></li>
      <li><Link to="/myItems" className='font-bold text-white hover:bg-white hover:text-black active:bg-red'>My items</Link></li>
      <li><Link to="/" className='font-bold text-white hover:bg-white hover:text-black active:bg-red'>About us</Link></li>
      <li><Link to="/contact" className='font-bold text-white hover:bg-white hover:text-black active:bg-red'>Contact us</Link></li>
      <li className='ml-2'>
      {
                user? <button className='font-bold bg-white text-primary' onClick={logOut}>Logout</button> : <Link className='font-bold bg-white text-primary' to="/login">Login</Link>
              }
      </li>
    </ul>
  </div>
  
</div> 
        </div>
    );
};

export default Header;