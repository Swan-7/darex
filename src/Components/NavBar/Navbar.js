import React from "react";
import "./Navbar.css";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Container, Box, Button } from "@material-ui/core";
// import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const navItems = [
  {
    title: "Home",
  },
  {
    title: "Services",
  },
  {
    title: "Contact Us",
  },
  {
    title: "About Us",
  },
];
export default function Navbar() {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={3}
      alignItems="center"
      style={{ margin: 0 }}
      className="main-nav"
    >
      <Grid container xs={6}>
        <Grid item xs={6}>
          <Box component="div" id="logo-box">
            <img id="logo" alt="logo" src={require("../../assets/logo.png")} />
          </Box>
        </Grid>
      </Grid>
      <Grid justify="center" alignItems="center" container xs={6} spacing={0}>
        {navItems.map((item, index) => {
          return (
            <Grid key={index} item xs={2} justify="center" alignItems="center">
              <Container className="nav-item">{item.title}</Container>
            </Grid>
          );
        })}
        <Grid item xs={2}>
          <Button variant="outlined" id="sign-up-button">
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
