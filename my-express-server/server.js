const express = require("express");
const app = express();

app.get("/" , function(request , response){
      response.send("<h1>Hello Ji! Kaise ho saare </h1>");
});
app.get("/contact" , function(req , res){
      res.send("Contact me at : amanraj6475@gmail.com");
});
app.get("/about" , function(req , res){
      res.send("This is a noob coder.");
});
app.get("/hobbies" , function(req , res){
      res.send("<ul><li>code</li><li>sports</li></ul>");
});

app.listen(3000 , function(){
    console.log(" Server  has started on port 3000. ");
});
