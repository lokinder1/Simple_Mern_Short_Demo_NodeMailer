require("dotenv").config();
const express = require("express");
var cors = require("cors");
var mailService = require("./utils/mailService");


const app = express();
app.use(cors());

// parse application/json
app.use(express.json());

//To execute on server execution
// var emailTo = ["lokender111@gmail.com", "lokenderdeal@gmail.com"];
// mailService(emailTo);

app.post("/send_mail", async (req, res) => {
  console.log(req.body);
  var mailTo = req.body.mailTo;
  var response = await mailService(mailTo);
  if (response) {
    res.status(200).send("mail sent successfully");
  } else {
    res.status(500).send("mail did not sent successfully");
  }
});

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000`)
);
