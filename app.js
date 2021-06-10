var express = require('express')
var bodyParser = require("body-parser");
var app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

app.get('/',function(req,res){
    console.log("test")
    res.sendFile(__dirname + "/public/index.html");
})


app.get('/sample',function(req,res){
    console.log("sample")
    res.sendFile(__dirname + "/public/sample.html");
})

app.listen(port,function(){console.log("server started....."+port)})