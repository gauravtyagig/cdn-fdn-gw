var redis = require('./redis.js'); 
var HashMap= require('hashmap');
var redisPubSub = require('./redisPubSub.js'); 
var callBucketSize=20;
var map = new HashMap();


subscribeTopic();



resolvedLoadDistribution =  async function(key,resolvedCDN,loadDistribution,defaultCDN){
    var currentLoadDist= await getLoadDistCounter(key)%callBucketSize;
     loadDistribution=(loadDistribution*callBucketSize)/100;
     //console.log("load distribution : "+loadDistribution);
     if(currentLoadDist>loadDistribution){
         return defaultCDN
     }
 
     return resolvedCDN;
 }

resolveFailOver = async function(primaryCDN,failoverCDN,utilisationThreshold){
    var currentLoad=0;
    if(failoverCDN!=null && utilisationThreshold<100){
        try{
            currentLoad= await getValue(primaryCDN);
        }catch(err){
            console.log("Exception in getutlisation : "+err.message);
        }
        if(currentLoad==null || currentLoad==''){ 
            currentLoad=0;
            console.log("getutlisation value is null for "+primaryCDN );
        }
        if(currentLoad> utilisationThreshold){
                return failoverCDN;//+", request handling time "+ (evelStartTime-callingTime)+", rule engine time=> "+ (Date.now()-evelStartTime);
        }else{
            return primaryCDN;//+", rule evaluation time=> "+ (evelStartTime-callingTime)+", rule engine time=> "+ (Date.now()-evelStartTime);
        }
    }else{
        return primaryCDN;//+", rule evaluation time=> "+ (evelStartTime-callingTime)+", rule engine time=> "+ (Date.now()-evelStartTime);
    }
}


mytest= async function (){
    for (i=0;i<40000;i++){
    
        resolvedLoadDistribution("aaeaa","resolved",50,"Defiiiault").then(val=>{console.log(val)});
        //console.log(await getLoadfromRedis("aaeaa"));
    }
    
    }
    
  //  mytest();