import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const Bidpage = () => {
  return (
    <>
      <Link to="/">
        <button className="btn">Back</button>
      </Link>
      <h1>hello world</h1>
    </>
  );
};

export default Bidpage;
