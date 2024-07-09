import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Cart from "./components/cart";


function App() {

   

  return (
    <>
      <Router>
        <div className="flex w-screen bg-cyan-800 h-20 items-center justify-between px-10">
          <div className="">
            <h1 className="flex items-center font-bold text-green-500">
              FRESH
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <ul className="flex gap-10 text-white">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Link to="/cart">cart</Link>
              </li>
            </ul>
          </div>
        </div>
        <Routes>
          <Route
            path="/"
            element={<Home/>}
          />
          <Route
            path="/about"
            element={<></>}
          />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
