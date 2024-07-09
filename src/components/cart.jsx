import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { removeCart } from "../../store/slice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Cart() {
  const cart = useSelector((state) => state.addToCart.value);
    const dispatch=useDispatch()

    const Delete=(ind)=>{
    
         dispatch(removeCart(ind))
         toast("remove from cart")
    }
  return (
    <div className="flex justify-center">
      {cart.map((val, ind) => {
        return (
          <div
            key={ind}
            className="  bg-white shadow-2xl w-48   h-60 mt-10 mx-5 "
          >
            <img className="h-36" src={val.image} alt="" />

            <h1 className="text-gray-800">{val.name}</h1>
            <h1>{val.price}</h1>
            <div className="flex justify-center"><button  onClick={()=>Delete(ind)} className=""><MdDelete size={24}/></button>
            <ToastContainer/>
            
            </div>
            
               
          </div>
        );
      })}
    </div>
  );
}
