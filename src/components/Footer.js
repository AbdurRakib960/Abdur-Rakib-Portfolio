import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction href="https://web.facebook.com/rakib.talukdar.395/" target="_blank" icon={<Facebook />} className={classes.root} />
      <BottomNavigationAction href="https://www.linkedin.com/in/md-abdur-rakib-087a241b1/" target="_blank" icon={<LinkedInIcon />} className={classes.root} />
      <BottomNavigationAction href="https://github.com/AbdurRakib960" target="_blank" icon={<GitHubIcon />} className={classes.root} />
    </BottomNavigation>
  );
};
export default Footer;
