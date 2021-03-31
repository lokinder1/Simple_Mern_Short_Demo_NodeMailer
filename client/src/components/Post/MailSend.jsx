import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(() => ({
  root: {
    padding: " 50px !important",
    display: "flex",
    justifyContent: "center"

  },
  button: {
    margin: " 8px !important",
  },
  status: {
    margin: " 8px !important",
    color: "#8f3547ee"
  },
}));

export default function MailSend() {
  const classes = useStyles();
  const [mailTo, setMailTo] = useState("");
  const [mailStatus, setMailStatus] = useState("");

  function handleOnClick(e) {
    e.preventDefault();
    axios
      .post("http://localhost:4000/send_mail", { mailTo: mailTo })
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          console.log("sucess");
          setMailStatus(res.data);
        } else {
          console.log("failed");
          setMailStatus(res.data);
        }
      })
      .catch((err) => {
        console.log("error" + err);
      });
  }
  return (
    <div className={classes.root}>
      <TextField
        id="outlined-basic"
        label="Emails"
        variant="outlined"
        placeholder="Email1, Email2"
        value={mailTo}
        onChange={(e) => {
          setMailTo(e.target.value);
        }}
      />

      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleOnClick}
      >
        Send Mail
      </Button>

      <div className={classes.status}>{mailStatus}</div>
    </div>
  );
}
