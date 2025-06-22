import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../slice/Cartslice";
import CategorySLice from "../slice/Categoryslice";
import SearchSlice from "../slice/Searchslice"
export default configureStore({
  reducer: {
    cart: CartSlice,
    category: CategorySLice, // ✅ fixed key
    search:SearchSlice
  },
});
