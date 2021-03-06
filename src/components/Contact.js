import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import Send from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    
    height: "100vh",
  },
  heading: {
    color: "#08d665",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "#08d665",
    borderColor: "#08d665",
  },
  field: {
    margin: "1rem 0rem",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#08d665",
    },
    "& label": {
      color: "#FFC107",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#FFC107",
      },
      "&:hover fieldset": {
        borderColor: "#FFC107",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "#FFC107",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography variant="h5" className={classes.heading}>
            Hire or Contact me...
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            inputProps={{ className: classes.input }}
          />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            inputProps={{ className: classes.input }}
            className={classes.field}
          />
          <InputField
            fullWidth={true}
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            inputProps={{ className: classes.input }}
          />
          <Button
            variant="outlined"
            fullWidth={true}
            endIcon={<Send />}
            className={classes.button}
          >
            Contact Me
          </Button>
        </Box>
        <div className="mt-4 pt-4">
            <a className="mr-4 pr-4" href="https://github.com/AbdurRakib960" target="_blank"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/md-abdur-rakib-087a241b1/" target="_blank"><LinkedInIcon /></a>
        </div>
      </Grid>
    </Box>
  );
};

export default Contact;
