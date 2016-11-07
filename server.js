var express = require("express")
var timestamp = require("./timestamp")
var app = express()

var port = process.env.PORT || 8080

// set the view engine
app.set('view engine', 'jade')

// set the views folder
app.set('views', (__dirname + '/views'))

app.get('/',function(req,res){
  res.render('index')
})

app.get('*', function(req,res){
  res.set({ "Content-Type": "text/plain" })
  res.send(timestamp(req.params))
})

app.listen(port, function(){
    console.log("Express server listening on port 8080")
})
