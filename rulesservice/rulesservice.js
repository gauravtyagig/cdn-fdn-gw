var express  = require('express');
var app = express();
var writer=require('./filehelper.js')
var rediscl=require('./redisforrules.js');
var ver=0;
//var fetch = require("node-fetch");
app.use(express.json());

app.get('/', function(req,res){
    res.send('Hello rules service.');
});

app.get('/getrules',function(req,res){
  var rulesAr = ReadRules();
  //console.log("read the rules :"+ JSON.stringify(rulesAr));
  res.send(rulesAr);
});

app.get('/getversion',function(req,res){
  var rulesAr;
  var verObj={};
  if(ver==0 || ver ==null){
    rulesAr = ReadRules();
    ver=rulesAr["version"];
  }
  console.log("rules version - getversion :"+ ver);
  verObj["version"]=ver;
  res.send(verObj);
});

app.post('/updaterules',function(req,res){
  var rulesdata = req.body;
  //console.log(JSON.stringify(rulesAr));
  WriteRules(rulesdata);
  res.send("successfully written the rules.");
  publishTopic();
});

var server = app.listen(8000,"127.0.0.1",function(){
    var hos=server.address().address;
    var pos= server.address().port;
    console.log("rules server started. Server listening at http://%s:%s",hos,pos);
    publishTopic();
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