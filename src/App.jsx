import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Profile from "./pages/Profile";
import RedeemCode from "./pages/RedeemCode";
import Menu from "./components/Menu";
import News from "./pages/News";
import EmblemModal from "./components/EmblemModal";
import UserEmblems from "./components/UserEmblems";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";


function App() {
  

  return (
    <div className="app">
      <Menu/>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="redeem" element={<RedeemCode />} />
        <Route path="news" element={<News />} />
        <Route path="emblems" element={<EmblemModal />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
