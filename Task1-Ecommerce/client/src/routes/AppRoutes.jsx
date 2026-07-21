import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
 import Cart from "../pages/Cart";
 import Checkout from "../pages/Checkout";
 import ProductDetails from "../pages/ProductDetails";
 import Profile from "../pages/Profile";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
       <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<ProductDetails />} />
     <Route path="/profile" element={<Profile />} /> 
        </Route>

       <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} /> 
    

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;