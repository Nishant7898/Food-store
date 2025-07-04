import React from "react";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { removeFromCart, incrementQty, decrementQty } from "../slice/Cartslice";
import toast, { Toaster } from 'react-hot-toast';

const Itemcard = ({ id, name, price, img, qty }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <RiDeleteBin6Line
        onClick={() => {
          dispatch(removeFromCart(id));
          toast(`${name} Removed!`, {
            icon: "👋",
          });
        }}
        className="absolute right-7 text-xl text-gray-600 cursor-pointer hover:bg-red-500 hover:text-white"
      />
      <img src={img} className="w-[50px] h-[50px]" />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold">₹{price}</span>

          <div className="flex justify-center items-center gap-2 pt-2.5 absolute right-7">
            <FiMinus
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none text-xl cursor-pointer rounded-md p-1 transition-all ease-linear"
            />

            <span>{qty}</span>
            <FaPlus
              onClick={() => dispatch(incrementQty({ id }))}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none text-xl cursor-pointer rounded-md  transition-all ease-linear"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itemcard;
