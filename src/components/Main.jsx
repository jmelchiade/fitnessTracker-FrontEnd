import React from "react";
import { Navbar, Register, Home } from "./";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <div id="main">
      <Navbar />
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="home" element={<Home />} />
        <Route path="/" element={<Home />} /> */}
      </Routes>
      <h1>
        This is Main Content. This text appears on all components unless removed
        or modified.
      </h1>
    </div>
  );
};

export default Main;
