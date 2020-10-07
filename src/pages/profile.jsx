import React, { useContext, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { PROFILE_ENDPOINT } from "../utils/constants";
import { AuthContext } from "../contexts/auth/auth.context";
import { getCookie, setCookie } from "../utils/session";
import Router from "next/router";
import { toast, ToastContainer } from "react-toastify";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ProfilePage() {
  const classes = useStyles();
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [age, setage] = useState("");
  const { authDispatch } = useContext(AuthContext);

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    const tosend = {
      user: getCookie("tourist_id"),
      first_name: firstName,
      last_name: lastName,
      age,
    };
    const response = await fetch(PROFILE_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Token ${getCookie("tourist_token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tosend),
    }).then((res) => res.json());
    if (response.success) {
      authDispatch({
        type: "SIGNIN",
      });
      Router.push("/");
    } else {
      toast.error("Profile Update Failed");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <ToastContainer />
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add Your Details
        </Typography>
        <form onSubmit={handleSaveProfile} className={classes.form} noValidate>
          <TextField
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="first_name"
            label="First Name"
            name="first_name"
            autoComplete="first_name"
            autoFocus
          />
          <TextField
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="last_name"
            label="Last Name"
            id="last_name"
            autoComplete="last_name"
          />
          <TextField
            value={age}
            onChange={(e) => setage(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="age"
            label="Age"
            type="number"
            id="age"
            autoComplete="age"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Save
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
