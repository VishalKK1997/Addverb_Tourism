import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Markdown from "../Markdown/markdown";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

export default function Main() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        Fill in the details to book
      </Typography>
      <Divider />
      {/*posts.map((post) => (
        <Markdown className={classes.markdown} key={post.substring(0, 40)}>
          {post}
        </Markdown>
      ))*/}
      <div style={{ marginTop: "50px" }}>
        <Typography variant="h6" gutterBottom>
          Please check mark if you have done a covid test
        </Typography>
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <Button
          disabled={checked ? false : true}
          onClick={() => {}}
          size="medium"
          color="primary"
        >
          Book
        </Button>
      </div>
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
