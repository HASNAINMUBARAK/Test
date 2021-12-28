import React from "react";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import Logo from "../../Assets/Images/Logo.png";
import "./style.css";
const Navbar = () => {
  return (
    <div>
      <Grid container className="nav" spacing={3}>
        <Grid item md={3} xs={6}>
          <img src={Logo} alt=" " className="logo" />
        </Grid>
        <Grid item md={2} xs={6}>
          <div className="search-div">
            <input placeholder="Search items collections" className="search" />
            <SearchIcon className="search-icon" />
          </div>
        </Grid>
        <Grid item md={5} xs={12} className="point">
          <div className="four">
            <ul>
              <li>Explore</li>
              <li>My profile</li>
              <li>following</li>
              <li>market</li>
            </ul>{" "}
          </div>
          <div className="two">
            <ul>
              <li>how its work</li>
              <li>Community</li>
            </ul>{" "}
          </div>
        </Grid>
        <Grid item md={2} xs={12} className="btns">
          <button className="btn1">Create</button>
          <button className="btn2">Sign In</button>
        </Grid>
      </Grid>
    </div>
  );
};
export default Navbar;
