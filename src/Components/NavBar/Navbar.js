import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  Container,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
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
  menuItem: {
    "&:hover": {
      backgroundColor: "#083458",
      animation: "menu-hover 0.3s ease-in forwards",
    },
    color: "#00afef",
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
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [showResizedMenu, setShowResizedMenu] = useState(false);
  //   const handleClick = () => {
  //     setShowResizedMenu(!showResizedMenu);
  //   };
  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log("resize");
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });
  }, []);
  return (
    <div>
      <Grid
        container
        spacing={0}
        alignItems="center"
        style={{ margin: 0 }}
        className="main-nav"
      >
        <Grid
          justify={windowDimensions.width <= 1090 ? "center" : "flex-start"}
          alignItems={windowDimensions.width <= 1090 ? "center" : "flex-start"}
          container
          xs={6}
          spacing={0}
          container
          xs={6}
        >
          <Grid item xs={6}>
            <Box component="div" id="logo-box">
              <img
                id="logo"
                alt="logo"
                src={require("../../assets/logo.png")}
              />
            </Box>
          </Grid>
        </Grid>
        {windowDimensions.width > 1090 && (
          <Grid
            justify="center"
            alignItems="center"
            container
            xs={6}
            spacing={0}
          >
            {navItems.map((item, index) => {
              return (
                <Grid
                  key={index}
                  item
                  xs={2}
                  justify="center"
                  alignItems="center"
                >
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
        )}
        {windowDimensions.width <= 1090 && (
          <Grid
            justify="center"
            alignItems="center"
            container
            xs={6}
            spacing={0}
          >
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
              style={{ marginLeft: "75%" }}
            >
              <MenuIcon style={{ color: "#fff" }} />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "15ch",
                  marginTop: "40px",
                },
              }}
            >
              {navItems.map((option) => (
                <MenuItem
                  className={classes.menuItem}
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={handleClose}
                >
                  {option.title}
                </MenuItem>
              ))}
            </Menu>
          </Grid>
        )}
      </Grid>
    </div>
  );
}
