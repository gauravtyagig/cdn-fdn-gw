var express  = require('express');
var app = express();
var utility=require('./utils.js');
var custom = require('./customrules.js');
var path=require('path');

//var fetch = require("node-fetch");
app.use(express.json());
app.use(express.static(__dirname + '/public'))
//console.log("dir name : "+__dirname.toString());

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/', function(req,res){
    res.send('Hello World Ravi get');
    //res.send(JSON.stringify(res));
});


app.post('/ResolveCDN/events',async function(req,res){

    var eventData = req.body;
    //eventData["clientToken"] = guid();    
    var cdn=await Validate(eventData);
   // var dt = new Date();
    //console.log( dt.toUTCString());
    res.send(cdn);
    
   // res.send("Resolved cdn=> "+ cdn + " Expected CDN :"+eventData["expectedCDN"]);

});

var server = app.listen(8888,"127.0.0.1",function(){
    var hos=server.address().address;
    var pos= server.address().port;
   // var rulever=getVersion();
    //console.log("compare versions : "+custom.version);
    //fetchRules();
    //console.log("Node server started. Server listening at http://%s:%s--ver=%s",hos,pos,rulever);

});

//This is to return unique id for token on each requestß
function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16);
       // .substring(1);
    }
    return s4()  ;
  }


  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  //runRulesEngine();