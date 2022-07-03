const express =  require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/" , function(req , res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/" , function(req , res){
  console.log(req.body.num1);
  var height = parseFloat(req.body.n1);
  var weight = parseFloat(req.body.n2);
  var bmi = weight / (height * height);

  res.send("<h2>Your BMI is : </h2>" + bmi);

});

app.listen(3000 , function(){
  console.log("Server is running on port 3000.");
});
