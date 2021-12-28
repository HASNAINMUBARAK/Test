import React from "react";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import "./style.css";
const More = () => {
  return (
    <Container className="contain">
      <Grid container className="contain1" spacing={5}>
        <Grid item md={3} sm={3} xs={12} className="first">
          <h2>Pioneering art market royalties</h2>
          <p className="para">
            Artists receive continuous royalties for all secondary sales on
            their artworks forever
          </p>
        </Grid>
        <Grid item md={3} sm={3} xs={12} className="second">
          <h2>Built for longevity collection</h2>
          <p className="para">
            All transactions happen on-chain, creating a tamper-proof record of
            each artwork’s
          </p>
        </Grid>
        <Grid item md={3} sm={3} xs={12} className="third">
          <h2>The future of art collecting</h2>
          <p className="para">
            Browse and build your collection of the world’s most cutting-edge
            digital art
          </p>
        </Grid>
        <Grid item md={2} sm={3} xs={12} className="forth">
          <button className="load">Load More</button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default More;
