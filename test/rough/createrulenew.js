var xlsx =require('node-xlsx');
var fs = require("fs");

const workSheets = xlsx.parse(`${__dirname}/CDN-FGW-Rules.xlsx`);
const DeviceType =0; HomeStatus=1;	ServiceType=2;	Locale=3;	Day=4;	loadDistribution=5;	Utilization_Threshold=6;	
const CDN_Resolved=7; FailoverCDN=8;

parseruleSet = function(filedata){ 
    
    var Object =filedata;
    var stringBuilder=[];
    stringBuilder.push("var util = require('./helpers.js') \r\n\n\n");

    return Object.keys(workSheets).map((name) => {
        const sheet = workSheets[name];
        var rules=[],sortedrules=[],secrules=[];
        stringBuilder.push("Validate=async function(m){\r\n\n")
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
          console.log("total rules : "+ secrules.length +"----"+rules.length);
          secrules = groupBy(sortedrules, function(item)
          {
            return (({ locale,dayOfWeek,utilizationThreshold,loadDistribution,primaryCDN,failoverCDN }) => ({ locale,dayOfWeek,utilizationThreshold,loadDistribution,primaryCDN,failoverCDN }))(item);
          },function(item){
            return (({ deviceType,inHomeStatus,serviceType }) => ({ deviceType,inHomeStatus,serviceType }))(item);
          });
          console.log("subrules : " + secrules.length);
          //console.log("just put :  "+i+"- " +secrules[0].primaryRule.deviceType +" * " + secrules[0].secondaryRule[0].locale);//[1][key].locale);// + " -- "+secrules[key][0].primaryCDN);        
            for(var i=0;i<secrules.length;i++)
            {
                var obj=secrules[i];
                stringBuilder.push("\tif(m.deviceType=='"+obj.primaryRule.deviceType+"' && m.inHomeStatus =='"+obj.primaryRule.inHomeStatus+"' && m.serviceType =='"+obj.primaryRule.serviceType+"'){\r\n\n");
                //console.log("object value :"+obj.primaryRule.deviceType);
                var defaultRule=obj.secondaryRule.filter(function(r){
                    //console.log("inside filter " + r.locale.toLowerCase() + " -- " + r.dayOfWeek.toLowerCase());
                    return ((r.locale.toLowerCase()=="all" && r.dayOfWeek.toLowerCase()=="all") || (r.locale=="undefined" && r.dayOfWeek=="undefined"));
                });
                
                if(defaultRule==''){
                    console.log("Rules cannot be produced, as there is default rule missing.");
                    return;
                }
                sortedSubrules = obj.secondaryRule.sort((a,b)=> b.locale.localeCompare(a.locale) || b.dayOfWeek.localeCompare(a.dayOfWeek))
                for(var j=0;j<sortedSubrules.length;j++)
                {
                    var isDefault=true;
                    var subrule=sortedSubrules[j];

                    if(subrule.locale.toLowerCase()!="all" && subrule.dayOfWeek.toLowerCase()!="all"){
                        isDefault=false;
                        stringBuilder.push("\t\tif("+getIfconstructForcomma(subrule.locale,"m.locale")+" && "+getIfconstructForcomma(subrule.dayOfWeek,"m.dayOfWeek")+"){\r\n\n");
                        stringBuilder.push("\t\t\tvar key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale+m.dayOfWeek;\r\n\n");
                    }else if(subrule.locale.toLowerCase()!="all" && subrule.dayOfWeek.toLowerCase()=="all"){
                        isDefault=false;
                        stringBuilder.push("\t\tif("+getIfconstructForcomma(subrule.locale,"m.locale")+"){\r\n\n");
                        stringBuilder.push("\t\t\tvar key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale;\r\n\n");
                    }else if(subrule.locale.toLowerCase()=="all" && subrule.dayOfWeek.toLowerCase()!="all"){
                        isDefault=false;
                        stringBuilder.push("\t\tif("+getIfconstructForcomma(subrule.dayOfWeek,"m.dayOfWeek")+"){\r\n\n");
                        stringBuilder.push("\t\t\tvar key=m.deviceType+m.inHomeStatus+m.serviceType+m.dayOfWeek;\r\n\n");
                    }
                    
                    
                    if(!isDefault)
                    {
                        stringBuilder.push("\t\t\tvar cdn = resolvedLoadDistribution(key,'"+subrule.primaryCDN+"',"+subrule.loadDistribution+",'"+defaultRule[0].primaryCDN+"')\n");
                        stringBuilder.push("\t\t\tif(cdn=='"+subrule.primaryCDN+"')\n");
                        stringBuilder.push("\t\t\t\tcdn = await resolveFailOver(cdn,'"+subrule.failoverCDN+"',"+subrule.utilizationThreshold+")\n");
                       // stringBuilder.push("\t\t\tif(cdn=='"+subrule.failoverCDN+"')\n");
                       // stringBuilder.push("\t\t\t\tdoDecrement(key)\n");
                        stringBuilder.push("\t\t\treturn cdn;\n");
                        stringBuilder.push("\t\t}\r\n \r\n");
                    }
                    else 
                    {
                        stringBuilder.push("\t\tvar cdn = await resolveFailOver('"+subrule.primaryCDN+"','"+subrule.failoverCDN+"',"+subrule.utilizationThreshold+")\n");
                        stringBuilder.push("\t\treturn cdn;\n")                    
                    }
                    console.log("\nobject sec value :"+subrule.locale);
                    
                }
                stringBuilder.push("\t}\r\n");
            }
          stringBuilder.push("}\r\n \r\n");
          return stringBuilder.join("");
        });
}

function groupBy(rulesAr,f,g){
    var groups=[];
    var curObj={};
    var curkey,lastkey="";
    rulesAr.forEach(function(rule){
        var group =  f(rule);
        var priKey= g(rule);
         var curkey=rule.deviceType+"-"+rule.inHomeStatus+"-"+rule.serviceType;
         if(curkey!=lastkey){
                 curObj={};
                 curObj["primaryRule"]=priKey;
                 curObj["secondaryRule"]=[];
                 lastkey=curkey;
                 groups.push(curObj);
         }
         curObj["secondaryRule"].push(group);
         //console.log("looppp1 : "+curkey+"---"+ groups[curkey][0].locale);
    });
    return groups;
}

getIfconstructForcomma=function(commastr,operandname){
    var splitstr="",localestring="";
    splitstr=commastr.split(",");
    for(var cnt=0;cnt<splitstr.length;cnt++)
        if(localestring=="")
            localestring+="("+operandname+"=='"+splitstr[cnt]+"' ";
        else
            localestring+="|| "+operandname+"=='"+splitstr[cnt]+"' ";
    localestring+=")";
    return localestring;
}

parseruleSet();
