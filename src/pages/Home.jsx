import React from "react";
import "./index.css";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Fooditems from "../components/Fooditems";
import Cart from "../components/Cart";
import Itemcard from "../components/Itemcard";
const Home = () => {
  return (
    <>
      <Navbar />
      <Menu/>
      <Fooditems/>
      <Cart/>
    </>
  );
};

export default Home;
