import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Compontents/Pages/Header/Header';
import Home from './Compontents/Pages/Home/Home';
import Login from './Compontents/Pages/Login/Login';
import { ToastContainer } from 'react-toastify';
import Register from './Compontents/Pages/Register/Register';
import Footer from './Compontents/Footer/Footer';
import Products from './Compontents/Products/Products';
import ProductDetails from './Compontents/ProductDetails/ProductDetails';
import RequireAuth from './Hooks/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Products />} />
        <Route path="/inventory/:productId" element={<RequireAuth>
          <ProductDetails />
        </RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
       
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
