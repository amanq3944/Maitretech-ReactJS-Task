import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Auth from './components/Login'
import Register from "./components/Register";
import Menu from "./components/Menu";
import Checkout from "./components/Checkout";
import Userprofile from './components/UserProfile'

export default function App() {

  return (
    <>
      <div className="">
        <Routes>
          <Route
            path="/home"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route path="/login" element={<Auth />} />
          <Route path="/register" element={<Register />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/userprofile" element={<Userprofile />} />
        </Routes>
      </div>
    </>
  );
}
