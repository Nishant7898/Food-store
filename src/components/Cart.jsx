import React, { useState } from "react";
import "../pages/index.css";
import { IoCloseCircleSharp } from "react-icons/io5";
import Itemcard from "./Itemcard";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Cart = () => {
  const [active, setactive] = useState(false); // 🔹 Start hidden
  const CartItems=useSelector((state)=>state.cart.cart)

  return (
    <>
      {/* 🔘 Show button */}
      <button
        onClick={() => setactive(true)}
        className="fixed right-0 justify-center items-center bottom-0 bg-green-500 text-white p-2 rounded-lg m-4 cursor-pointer"
      >
        Show Cart<FaShoppingCart />
      </button>

      {/* 🔘 Cart only shows when active === true */}
      {active && (
        <div
          className={`fixed right-0 top-0 w-full lg:w-[20vw] bg-white h-full p-5 mb-3 ${
            active ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center my-3">
            <span className="text-xl font-bold text-gray-800">My Order</span>
            <IoCloseCircleSharp
              onClick={() => setactive(false)} // 🔸 Close logic here
              className="border-2 border-gray-600 font-bold p-1 text-3xl cursor-pointer rounded-md hover:border-red-300 text-red-300"
            />
          </div>
          
{
  CartItems.map((food)=>{
    return <Itemcard key={food.id} id={food.id} name={food.name} price={food.price} img={food.img} qty={food.qty}/>
  })
}

          <div className="absolute bottom-0">
            <h2 className="font-semibold text-gray-800">Items:</h2>
            <h2 className="font-semibold text-gray-800">Total Amount:</h2>
            <hr className="w-[90vw] lg:w-[18vw ] my-2" />
            <button
              onClick={() => setactive(!active)}
              className="bg-green-500 font-bold p-3 rounded-lg cursor-pointer text-white py-2 w-[90vw] lg:w-[18vw] mb-5"
            >
              Checkout
            </button>
          </div>
          <FaShoppingCart  className="rounded-full text-white bg-green-500 text-3xl p-2 shadow-md cursor-pointer"/>
        </div>
      )}
    </>
  );
};

export default Cart;
