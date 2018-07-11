var fs = require('fs');
//var rulesobj=require('./jcomrules.json'); -- another way of implementation
WriteRules = function(srules){
    var rules={};
    var dt=new Date();
    rules["version"]=dt.getTime();
    let datatowrite=JSON.stringify(srules);
    rules["rules"]=datatowrite;
    fs.writeFile("jcomrules.json",JSON.stringify(rules),(err)=>{
        if(err) throw err;
        console.log("written to the file, with no errors");
    });
     console.log("completed......");
}

ReadRules = function(){
    var contents=fs.readFileSync("./jcomrules.json");
    var rules=JSON.parse(contents);
    //console.log("rules version :"+rules["version"]);
    return rules;
}