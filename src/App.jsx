import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Products from "./components/Products";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state)=> state.user.currentUser);
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/products/:category" element={<ProductList/>}/>
          <Route exact path="/product/:id" element={<Product/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
        </Routes>
    </Router> 
  );
};

export default App;