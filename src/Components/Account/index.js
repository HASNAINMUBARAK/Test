import React from "react";
import Grid from "@material-ui/core/Grid";
import Image from "../../Assets/Images/img2.png";
import { Container } from "@material-ui/core";
import "./style.css";

const Account = () => {
  return (
    <Container className="contain">
      <Grid container className="contain1">
        <Grid item md={6} sm={6} xs={12} className="left">
          <h1>WELCOME TO THE</h1>
          <h1 className="silicon">Siliconbets</h1>
          <p className="NFT">The easiest and most secure NFT marketpalce </p>
          <div className="btns">
            <button className="explore">Explore</button>
            <button className="mint">Mint</button>
          </div>
        </Grid>
        <Grid item md={6} sm={6} xs={12} className="right">
          <img className="dummy" src={Image} alt="broo" />
        </Grid>
      </Grid>
    </Container>
  );
};
export default Account;
