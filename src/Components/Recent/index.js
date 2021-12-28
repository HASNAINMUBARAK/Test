import React from "react";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import { data } from "../../Data";
import Card from "../Card";
import "./style.css";
const Recent = () => {
  return (
    <Container maxWidth="md" spacing={3}>
      <Grid>
        <Grid item sm={12} spacing={3} className="bid-header">
          <div className="b-hdot">
            <div className="color"></div>
            <h2 id="left-header"> Recently Added</h2>
          </div>
        </Grid>
        <div className="bid-hline">
          <hr />
        </div>
        <Grid item xs={12} container spacing={3} className="card">
          {data.map((menuItem) => {
            return (
              <Grid
                className="card"
                item
                spacing={3}
                xs={12}
                sm={6}
                md={3}
                lg={3}
              >
                <Card menuItem={menuItem} spacing={3} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
};
export default Recent;
