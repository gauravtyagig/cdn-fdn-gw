var fs = require('fs');

WriteRules = function(resrules){
    var srules= JSON.parse(resrules["rules"]);
    var writeStream = fs.createWriteStream("./customrules.js");
    writeStream.write("var version='"+resrules["version"]+"'\r\n\n");
    writeStream.write("exports.version=version;\r\n\n");

    writeStream.write("var util = require('./helpers.js') \r\n\n\n");

    writeStream.write("Validate=async function(m){\r\n\n");
    console.log("rules on server : "+ srules.length + "\r\n"+ srules[0]);
    secrules = groupBy(srules, function(item)
    {
      return (({ locale,dayOfWeek,utilizationThreshold,loadDistribution,primaryCDN,failoverCDN }) => ({ locale,dayOfWeek,utilizationThreshold,loadDistribution,primaryCDN,failoverCDN }))(item);
    },function(item){
      return (({ deviceType,inHomeStatus,serviceType }) => ({ deviceType,inHomeStatus,serviceType }))(item);
    });
    //console.log("subrules : " + secrules.length);
    //console.log("just put :  "+i+"- " +secrules[0].primaryRule.deviceType +" * " + secrules[0].secondaryRule[0].locale);//[1][key].locale);// + " -- "+secrules[key][0].primaryCDN);        
      for(var i=0;i<secrules.length;i++)
      {
          var obj=secrules[i];
          writeStream.write("\tif(m.deviceType=='"+obj.primaryRule.deviceType+"' && m.inHomeStatus =='"+obj.primaryRule.inHomeStatus+"' && m.serviceType =='"+obj.primaryRule.serviceType+"'){\r\n\n");
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
                  writeStream.write("\t\tif("+getIfconstructForcomma(subrule.locale,"m.locale")+" && "+getIfconstructForcomma(subrule.dayOfWeek,"m.dayOfWeek")+"){\r\n\n");
                  writeStream.write("\t\t\tvar key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale+m.dayOfWeek;\r\n\n");
              }else if(subrule.locale.toLowerCase()!="all" && subrule.dayOfWeek.toLowerCase()=="all"){
                  isDefault=false;
                  writeStream.write("\t\tif("+getIfconstructForcomma(subrule.locale,"m.locale")+"){\r\n\n");
                  writeStream.write("\t\t\tvar key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale;\r\n\n");
              }else if(subrule.locale.toLowerCase()=="all" && subrule.dayOfWeek.toLowerCase()!="all"){
                  isDefault=false;
                  writeStream.write("\t\tif("+getIfconstructForcomma(subrule.dayOfWeek,"m.dayOfWeek")+"){\r\n\n");
                  writeStream.write("\t\t\tvar key=m.deviceType+m.inHomeStatus+m.serviceType+m.dayOfWeek;\r\n\n");
              }
              
              
              if(!isDefault)
              {
                  writeStream.write("\t\t\tvar cdn = resolvedLoadDistribution(key,'"+subrule.primaryCDN+"',"+subrule.loadDistribution+",'"+defaultRule[0].primaryCDN+"')\n");
                  writeStream.write("\t\t\tif(cdn=='"+subrule.primaryCDN+"')\n");
                  writeStream.write("\t\t\t\tcdn = await resolveFailOver(cdn,'"+subrule.failoverCDN+"',"+subrule.utilizationThreshold+")\n");
                 // writeStream.write("\t\t\tif(cdn=='"+subrule.failoverCDN+"')\n");
                 // writeStream.write("\t\t\t\tdoDecrement(key)\n");
                  writeStream.write("\t\t\treturn cdn;\n");
                  writeStream.write("\t\t}\r\n \r\n");
              }
              else 
              {
                  writeStream.write("\t\tvar cdn = await resolveFailOver('"+subrule.primaryCDN+"','"+subrule.failoverCDN+"',"+subrule.utilizationThreshold+")\n");
                  writeStream.write("\t\treturn cdn;\n")                    
              }
              //console.log("\nobject sec value :"+subrule.locale);
              
          }
          writeStream.write("\t}\r\n");
      }
    writeStream.write("}\r\n \r\n");
    writeStream.end();
    console.log("completed......");
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