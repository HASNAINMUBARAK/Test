import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Account from "./Components/Account";
import More from "./Components/More";
import Recent from "./Components/Recent";
import NFT from "./Components/NFT";
// import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Account />
      <More />
      <Recent />
      <NFT />
      {/* <Footer /> */}
    </>
  );
}

export default App;
