import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Product from "./Components/Product";
import ErrorPage from "./Components/ErrorPage";
import Wishlist from "./Components/Wishlist";
import Cart from "./Components/Cart";

function App() {
  return(<>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about-us" element={<AboutUs/>} />    
      <Route path="/product" element={<Product/>} />   
      <Route path="/wishlist" element={<Wishlist/>} /> 
      <Route path="/cart" element={<Cart/>} /> 
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
  </BrowserRouter>
  </>)
};

export default App;