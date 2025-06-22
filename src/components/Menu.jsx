import React, { useState, useEffect } from "react";
import "../pages/index.css";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../slice/Categoryslice";

const Menu = () => {
  const [Category, setCategory] = useState([]);

  const dispatch = useDispatch();
  const SelectedCategory = useSelector((state) => state.category.category); // ✅ fixed

  useEffect(() => {
    const uniqueCategory = [...new Set(FoodData.map((food) => food.category))];
    setCategory(uniqueCategory);
  }, []);

  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold">Find the Best Food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
          onClick={() => dispatch(setCategories("All"))}
          className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white cursor-pointer ${
            SelectedCategory === "All" ? "bg-green-500 text-white" : ""
          }`}
        >
          All
        </button>

        {Category.map((item, index) => (
          <button
            key={index}
            onClick={() => dispatch(setCategories(item))} // ✅ fixed
            className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white cursor-pointer ${
              SelectedCategory === item ? "bg-green-500 text-white" : ""
            }`} // ✅ fixed
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
