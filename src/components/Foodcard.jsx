import React from "react";
import "../pages/index.css";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../slice/Cartslice"; // make sure the filename case matches

const Foodcard = ({ id, name, price, desc, rating, img }) => {
  
  const dispatch = useDispatch();

  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2">
      <img
        src={img}
        alt={name}
        className="w-auto h-[135px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      />
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-green-500">₹{price}</span>
      </div>
      <p className="text-sm font-normal">{desc?.slice(0, 60)}..</p>
      <div className="flex justify-between">
        <span className="flex justify-center items-center">
          <FaStar className="mr-1 text-yellow-400" />
          {rating}
        </span>
        <button
          onClick={() =>
            dispatch(addToCart({ id, name,img, price, rating, qty: 1 }))
          }
          className="p-1 bg-green-500 font-bold rounded-lg hover:bg-green-600 hover:text-white cursor-pointer text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Foodcard;
