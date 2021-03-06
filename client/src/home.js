import PersonalFooter from "@bit/lokinder1.footers.personal-footer";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import MailSend from "./components/Post/MailSend";



const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    "overflow-x": "hidden",
  },
  main: {
    minHeight: "calc(100vh - 120px)",
  },

  component1: {
    padding: " 50px !important",
  },

  button: {
    margin: " 8px !important",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <div className={classes.main}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<HomeIcon />}
            >
              Home
            </Button>
          </Link>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/">
              <Grid container spacing={2}>
                <Grid className={classes.component1} item xs={12} sm={12}>
                  <Paper elevation={3}>
                    <MailSend />
                  </Paper>
                </Grid>
              </Grid>
            </Route>
          </Switch>
        </div>
        <PersonalFooter />
      </div>
    </Router>
  );
}
