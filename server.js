var express = require("express")
var timestamp = require("./timestamp")
var app = express()

app.get('*', function(req,res){
    
    timestamp(req.params)
    
    res.send(`<h1>hello timestamp! : ${timestamp(req.params)}</h1>`)
})

app.listen(8080, function(){
    console.log("Express server listening on port 8080")
})