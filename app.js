var express = require('express')
var app = express()

var port = process.env.PORT || 3000;

app.get('/',function(req,res){

    console.log("test")
    res.json({"Name":"Ram"})
})

app.listen(port,function(){console.log("server started....."+port)})