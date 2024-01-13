import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import ProductsPage from "./views/ProductsPage";
import SingleProduct from "./views/SingleProduct";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Cart from "./components/Cart";
import Checkout from "./views/Checkout";
import Footer from "./components/Footer";




export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<SignUp />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/products" element={<ProductsPage />} />
        <Route exact path="/product/:id" element={<SingleProduct />} />
        <Route exact path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer/>
    </> 
  );
};

export default App;
