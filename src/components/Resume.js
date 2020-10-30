import React from "react";
import "./Resume.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import cv from "../cv.png"

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Abot Me
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          MY SELF
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            I'm Abdur Rakib
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Front-End web Developer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            I'm a Full Stack Web Developer mainly and I have good experience on
            Graphics Design too. I'm currently performing as a Public Figure and
            Motivational Speaker on My Youtube Channel. I have been working as a
            Web Developer over the last 1 years. I used to work on
            Freelancer.com and Now I'm in a partnership business with some of my
            clients.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          SKILLS
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            EXPERTIES
          </Typography>

          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <div style={{ listStyleType: "none" }}>
              <li>JavaScript</li>
              <li>ES6</li>
              <li>React</li>
              <li>React-Router</li>
              <li>Material UI</li>
              <li>Bootstrap</li>
              <li>React</li>
            </div>
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          SKILLS
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            COMFORTABLE
          </Typography>

          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <div style={{ listStyleType: "none" }}>
              <li>Node.JS</li>
              <li>Express.JS</li>
              <li>Redux</li>
              <li>Firebase</li>
            </div>
          </Typography>
        </Box>
      </Box>

      <div class="container skills_box" id="myskills">
        <h3 class="text-center mb-4">MY SKILLS</h3>
        <div class="bar learning" data-skill="JavaScript"></div>
        <div class="bar back basic" data-skill="React"></div>
        <div class="bar back intermediate" data-skill="MongoDB"></div>
        <div class="bar front advanced" data-skill="Node.JS"></div>
        <div class="bar front expert" data-skill="Express.JS"></div>
        <div class="bar learning" data-skill="Redux"></div>
      </div>

      <div style={{marginTop:"10rem"}}>
        <img src={cv} class="img-fluid rounded mx-auto d-block" alt="..."/>
      </div>
     
    </Box>
  );
};

export default Resume;
