var express = require('express')
var app = express()

app.get('/',function(req,res){

    console.log("test")
    res.json({"Name":"Ram"})
})

app.listen(3000,function(){console.log("server started.....")})