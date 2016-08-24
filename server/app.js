var express = require("express");
var app = express();
var path = require("path");



app.get("/*", function(req,res){
  var file = req.params[0] || "views/index.html";
  res.sendFile(path.join(__dirname, "/public", file));
});

app.set("port", (process.env.PORT || 5000));

app.listen(app.get("port"), function(){
  console.log("\n\nHey server running on port:", app.get("port"));
});
