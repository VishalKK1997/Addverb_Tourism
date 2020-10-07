import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post, param } = props;
  let color = "#000000";
  let toshow;
  if (param === "Global") {
    toshow = {
      color: "#556cd6",
      title: "Total Cases",
      value: post.global_cases,
    };
  }
  if (param === "Today") {
    toshow = {
      color: "#33353d",
      title: "Today Cases",
      value: post.today_cases,
    };
  }
  if (param === "Deaths") {
    toshow = {
      color: "#d30c34",
      title: "Total Deaths",
      value: post.deaths,
    };
  }
  if (param === "Recover") {
    toshow = {
      color: "#37d30c",
      title: "Total Recovered",
      value: post.deaths,
    };
  }

  return (
    <Grid item xs={12} md={3}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div
            style={{ border: `2px solid ${toshow.color}` }}
            className={classes.cardDetails}
          >
            <CardContent>
              <Typography component="h2" variant="h5">
                {toshow.title}
              </Typography>

              <Typography variant="subtitle1" paragraph>
                {toshow.value}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
