import { createSlice } from "@reduxjs/toolkit"

export const addToCartReducer=createSlice({
    name:"add_to_cart",
     initialState:{ value:[]},
       
     reducers:{
        addToCart:((state,action)=>{
           state.value.push(action.payload)
        }),
        removeCart:((state,action)=>{
         state.value = state.value.filter((val, index) => index !== action.payload);
      }),

     }
})

export const { addToCart,removeCart } = addToCartReducer.actions;


export default addToCartReducer.reducer;
