import React from "react";
import './Header.css'
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
    border: "3px solid #08d665",
  },
  title: {
    color: "#08d665",
    marginBottom: "20px",
    marginTop: "20px"
  },
  subtitle: {
    color: "#FFC107",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));


const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Abdur Rakib" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["MD ABDUR RAKIB"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Front-End Web Developer",
            "MERN Full Stack Developer"
            
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
      <div className="d-flex justify-content-center">
        <a target="_blank" href="https://drive.google.com/u/0/uc?id=1BFHQm0oY7N84IM1-oJXZctCDh-RcWW75&export=download" className="btn first">DOWNLOAD MY CV</a>
      </div>
    </Box>
  );
};

export default Header;
