var redis = require('redis');
var bluebird = require('bluebird');

var client = redis.createClient();

bluebird.promisifyAll(redis);

client.on('connect', function() {
    console.log('Redis client connected');
});

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

client.on('message', function(channel, message) {
    // message is json string in our case so we are going to parse it.
    try {
      const json = JSON.parse(message);
      if(json.ruleschanged=='true')
      {console.log("rules changed notification received.")}
    } catch (e) {
      // This error indicates that we receive a message that is not in the json format.
      console.log("json error");
    }
});

subscribeTopic = function(){
    client.subscribe("rules-update")    
    console.log("subscription done");
}

publishTopic = function(){
    
    client.publish('rules-update', JSON.stringify({
        ruleschanged: 'true'
    }),val=>{console.log("topic published")});
}
