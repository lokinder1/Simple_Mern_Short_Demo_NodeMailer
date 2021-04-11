import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles(() => ({
  root: {
    padding: " 50px !important",
    display: "flex",
    justifyContent: "center",
  },
  button: {
    margin: " 8px !important",
  },
}));

export default function MailSend() {
  const classes = useStyles();
  const [mailTo, setMailTo] = useState("");

  function handleOnClick(e) {
    e.preventDefault();
    axios
      .post("http://localhost:4000/send_mail", { mailTo: mailTo })
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          console.log("success");
          toast.success(res.data);
        } else {
          console.log("failed");
          toast.error(res.data);
        }
      })
      .catch((err) => {
        console.log("error" + err);
      });
  }
  return (
    <div className={classes.root}>
      <ToastContainer />
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
    </div>
  );
}
