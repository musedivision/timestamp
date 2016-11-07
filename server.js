var express = require("express")
var timestamp = require("./timestamp")
var app = express()

app.get('/',function(req,res){
  res.send('<h1>welcome to the TimeStamp Microservice</h1>')
})

app.get('*', function(req,res){
    res.send(`<pre>${timestamp(req.params)}</pre>`)
})

app.listen(8080, function(){
    console.log("Express server listening on port 8080")
})
