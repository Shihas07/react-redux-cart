
import { configureStore } from "@reduxjs/toolkit";
import addToCartReducer from "./slice"

export const store=configureStore({
      reducer:{
        addToCart: addToCartReducer,
       
      }
})
 