import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Image from "../../Assets/Images/img2.png";
import { Container } from "@material-ui/core";
import "./style.css";

const Account = () => {
  return (
    <Container maxWidth="md" className="contain">
      <Grid
        container
        item
        // xs={12}
        // md={12}
        className="contain"
        justifyContent="space-between"
      >
        <Grid item md={6} sm={6} className="left">
          <div className="external">
            <div className="upper">
              <div className="user">
                {/* <img className="userimg" src={Image1} alt="bro" /> */}
                <p>@ain.ethrm</p>
              </div>
              <h2>Blob extrude with lines</h2>
            </div>

            <Grid item xs={12} className="timing-auction">
              <Grid item>
                <div className="box">
                  <p className="bid">Current Bid</p>
                  <p className="lbrt">1.18LBRT</p>
                  <p className="dollar">26,000$</p>
                </div>
              </Grid>
              {/* <Grid item>
                <div className="horline">
                  <hr className="hrr" />
                </div>
              </Grid> */}
              <Grid className="timing">
                <div className="box">
                  <p className="bid">Auction ending in</p>
                  <p className="min">11 40 30</p>
                  <p className="dollar">Hours Min Seconds</p>
                </div>
              </Grid>
            </Grid>

            <div className="lower">
              <div className="btns">
                <Button className="bid" variant="contained">
                  Place a bid
                </Button>
                <Button className="view" variant="contained">
                  View artwork
                </Button>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item md={6} sm={6} className="right">
          <img className="dummy" src={Image} alt="broo" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Account;
