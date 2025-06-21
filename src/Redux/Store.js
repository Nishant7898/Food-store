import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../slice/Cartslice"
export default configureStore({
    reducer:{
        cart:CartSlice,
    }
})