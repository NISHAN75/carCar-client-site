import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Compontents/Pages/Header/Header";
import Home from "./Compontents/Pages/Home/Home";
import Login from "./Compontents/Pages/Login/Login";
import { ToastContainer } from "react-toastify";
import Register from "./Compontents/Pages/Register/Register";
import Footer from "./Compontents/Footer/Footer";
import ProductDetails from "./Compontents/ProductDetails/ProductDetails";
import RequireAuth from "./Hooks/RequireAuth";
import AllInventory from "./Compontents/Pages/AllInventory/AllInventory";
import ManageInventory from "./Compontents/ManageInventory/ManageInventory";
import Contact from "./Compontents/Pages/Contact/Contact";
import AddItems from "./Compontents/Pages/AddItems/AddItems";
import MyItems from "./Compontents/MyItems/MyItems";
import Blogs from "./Compontents/Pages/Blogs/Blogs";
import BlogDetails from "./Compontents/Pages/BlogDetails/BlogDetails";
import NotFound from "./Compontents/NotFound/NotFound";


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<AllInventory />} />
        <Route
          path="/inventory/:productId"
          element={
            <RequireAuth>
              <ProductDetails />
            </RequireAuth>
          }
        />
        <Route
          path="/manage"
          element={
            <RequireAuth>
              <ManageInventory />
            </RequireAuth>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/addItems"
          element={
            <RequireAuth>
              <AddItems />
            </RequireAuth>
          }
        />
        <Route path="/myItems" element={
        <RequireAuth>
          <MyItems></MyItems>
        </RequireAuth>
        } />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:blogId" element={<BlogDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
