
var express = require('express')
var app = express();
//var fs = require("fs")
index_buff = fs.readFileSync('index.html')
index_string = index_buss.toString()
app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send(index_string)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
