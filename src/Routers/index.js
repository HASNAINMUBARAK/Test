import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bidpage from "../Pages/Bidpage";
import Home from "../Pages/Home";
import Navbar from "../Components/Navbar";

const Rout = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Bidpage" exact element={<Bidpage />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};
export default Rout;
