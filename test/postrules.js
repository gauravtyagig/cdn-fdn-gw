var xlsx =require('node-xlsx');
var fetch = require("node-fetch");

const workSheets = xlsx.parse(`./CDN-FGW-Rules.xlsx`);
const DeviceType =0; HomeStatus=1;	ServiceType=2;	Locale=3;	Day=4;	loadDistribution=5;	Utilization_Threshold=6;	
const CDN_Resolved=7; FailoverCDN=8;

parseruleSet = function(){ 
    
    //var stringBuilder=[];
    //stringBuilder.push("var util = require('./helpers.js') \r\n\n\n");
    return Object.keys(workSheets).map((name) => {
        const sheet = workSheets[name];
        var rules=[],sortedrules=[];
       // stringBuilder.push("Validate=async function(m){\r\n\n")
        //Pushing to inmemory from Excel sheet
        sheet.data.forEach(function(value){
            if(value[DeviceType] != "DeviceType") { //skip header line
                rules.push({
                    "deviceType" : value[DeviceType],
                    "inHomeStatus" : value[HomeStatus],
                    "serviceType" : value[ServiceType], 
                    "locale" : value[Locale],
                    "dayOfWeek" : value[Day],
                    "utilizationThreshold" : value[Utilization_Threshold],
                    "loadDistribution" : value[loadDistribution],
                    "primaryCDN" : value[CDN_Resolved],
                    "failoverCDN" : value[FailoverCDN]
                });
            }
          });
          //Sorting the Rules
          sortedrules = rules.sort((a,b)=> b.deviceType.localeCompare(a.deviceType) || (''+a.inHomeStatus).localeCompare(''+b.inHomeStatus) || a.serviceType.localeCompare(b.servieType))
          console.log("total rules : "+ sortedrules.length +"----"+rules.length);

          fetch('http://localhost:8000/updaterules', {
            method: 'POST',
            body: JSON.stringify(sortedrules),
            headers: {'Content-Type': 'application/json'}
                }).then(response => { 
                return response.json(); 
                }).then(data => { 
                result = JSON.stringify(data);
                }).catch(err => {
                    result = err;
                });
  
        });
}

parseruleSet();
