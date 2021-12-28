import React from "react";
import Grid from "@material-ui/core/Grid";
import "./style.css";
const Navbar = () => {
  return (
    <div>
      <Grid container>
        <Grid item md={6} xs={8}>
          <h1>Hello world</h1>
        </Grid>
        <Grid item md={6} xs={4}>
          <ul>
            <li>home</li>
            <li>about</li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
};
export default Navbar;
