var redis = require('redis');
var bluebird = require('bluebird');
var utility=require('./utils.js');

var client = redis.createClient();

bluebird.promisifyAll(redis);

client.on('connect', function() {
    console.log('Redis client connected');
});

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});



getValue= async function(key){
    return client.getAsync(key);
}

setValue= function(key,value){
    return client.setAsync(key, value, 'EX', 2);
}


setValueForever= function(key,value){
    return client.setAsync(key, value);
}




 

getLoadDistCounter =  async function(key)
{
    var val;
    try{
       
         val= await client.incrAsync(key);
       
        if(val>=1000 ){
            await client.setAsync(key,0);
           
        }
        return val;
    }catch(err){
        console.log("Exception in getLoadDistCounter : "+err.message);
         client.setAsync(key,0);
    }
 
}

