import { Grid } from "@material-ui/core";
import React from "react";
import "./style.css";
const Card = (props) => {
  const { title, img, image, link } = props.menuItem;
  return (
    <>
      <Grid container className="outer-container" spacing={3}>
        <Grid item lg={12} className="inner-container" spacing={3}>
          <Grid items className="card-container" spacing={3}>
            <img className="art" src={img} alt="" />
            <h3 className="artwork">{title}</h3>
          </Grid>
          <Grid item className="circle-picture">
            <img className="Ellipse2" src={image} alt="" />
            <a className="link2" href="fg">
              {link}
            </a>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Card;
