require("dotenv").config();
const express = require("express");
var cors = require("cors");
var mailService = require("./utils/mailService");
var bodyParser = require('body-parser');
const app = express();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//To execute on server execution
// var emailTo = ["lokender111@gmail.com", "lokenderdeal@gmail.com"];
// mailService(emailTo);

app.post('/send_mail',async (req,res)=>{
  console.log(req.body);
  var mailTo = req.body.mailTo;
  var response = await mailService(mailTo);
  if(response){
    res.status(200).send("mail sent successfully");
  }else{
    res.status(500).send("mail did not sent successfully");
  }

})

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000`)
);
