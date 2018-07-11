var fetch= require("node-fetch");
var writer=require('./fileupdater.js');

getVersion=function(){
    fetch('http://127.0.0.1:8000/getversion')
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        var strversion=json["version"];
        console.log("got the rules version : " + strversion);
        return strversion;
    })
    .catch(err=> console.log("Error \n\r"+err));
}

fetchRules=function(){
    fetch('http://127.0.0.1:8000/getrules')
    .then(function(response){
        //console.log("hello,,,,......."+response.json());
        return response.json();
        
    })
    .then(function(json){
        WriteRules(json);
        console.log("completed fetching the rules updated. :");
    })
}