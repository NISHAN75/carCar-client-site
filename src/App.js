import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Compontents/Pages/Header/Header';
import Home from './Compontents/Pages/Home/Home';
import Login from './Compontents/Pages/Login/Login';
import { ToastContainer } from 'react-toastify';
import Register from './Compontents/Pages/Register/Register';
import Footer from './Compontents/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
       
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
