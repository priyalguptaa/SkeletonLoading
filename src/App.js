import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import About from "./Component/About";
import Blog from "./Component/Blog";
import CartPage from "./Component/CartPage";
import Home from "./Component/Home";
import LikedProduct from "./Component/LikedProduct";
import LoginPage from "./Component/LoginPage";
import Shop from "./Component/Shop";
import SignUp from "./Component/SignUp";
import AddProducts from "./Component/AddProducts";
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <AddProducts/>
      <Routes>
      <Route path="/" exact component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/blog" component={Blog} />
        <Route path="/about" component={About} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/liked-products" component={LikedProduct} />
        <Route path="/cart-page" component={CartPage} />
        <Route path="/login" component={LoginPage} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
