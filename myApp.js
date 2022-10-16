let express = require('express');
let app = express();
console.log("Hello World");

//cssStyle = __dirname + "/public/style.css";
//htmlViews= __dirname + "/views/index.html";




app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html"); 
  
});
app.use("/public", express.static(__dirname + "/public"));

app.get('/json', (req, res) => {
  res.json({"message": process.env.MESSAGE_STYLE === "uppercase" ? "HELLO JSON" : "Hello json"});
});




































 module.exports = app;
