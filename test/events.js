
const http = require('http');

//StbTrueLinearR1Mon
var stbTrueLinearR1Mon = [ 
  {'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R1', 'dayOfWeek':'Mon','expectedCDN':'AWS-CF1','seq':1},
  {'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R1', 'dayOfWeek':'Mon','expectedCDN':'AWS-CF1','seq':2},
  {'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R1', 'dayOfWeek':'Mon','expectedCDN':'AWS-CF1','seq':3},
  {'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R1', 'dayOfWeek':'Mon','expectedCDN':'AWS-CF1','seq':4},
  {'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R1', 'dayOfWeek':'Mon','expectedCDN':'AWS-CF1','seq':5},
  {'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R1', 'dayOfWeek':'Mon','expectedCDN':'VSPP4','seq':6},
  {'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R1', 'dayOfWeek':'Mon','expectedCDN':'VSPP4','seq':7},
  {'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R1', 'dayOfWeek':'Mon','expectedCDN':'VSPP4','seq':8},
  {'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R1', 'dayOfWeek':'Mon','expectedCDN':'VSPP4','seq':9},
  {'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R1', 'dayOfWeek':'Mon','expectedCDN':'VSPP4','seq':10},
];

var stbTrueLinearR1Fri = [ 
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R1', 'dayOfWeek':'Fri','expectedCDN':'VSPP4','seq':1},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R1', 'dayOfWeek':'Fri','expectedCDN':'VSPP4','seq':2},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R1', 'dayOfWeek':'Fri','expectedCDN':'VSPP4','seq':3},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R1', 'dayOfWeek':'Fri','expectedCDN':'VSPP4','seq':4},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R1', 'dayOfWeek':'Fri','expectedCDN':'VSPP4','seq':5},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R1', 'dayOfWeek':'Fri','expectedCDN':'VSPP4','seq':6},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R1', 'dayOfWeek':'Fri','expectedCDN':'VSPP4','seq':7},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R1', 'dayOfWeek':'Fri','expectedCDN':'VSPP4','seq':8},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R1', 'dayOfWeek':'Fri','expectedCDN':'VSPP4','seq':9},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R1', 'dayOfWeek':'Fri','expectedCDN':'VSPP4','seq':10},
];

var stbTrueLinearR3Mon = [ 
  {'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R3', 'dayOfWeek':'Mon','expectedCDN':'VSPP3','seq':1},
  {'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R3', 'dayOfWeek':'Mon','expectedCDN':'VSPP3','seq':2},
  {'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R3', 'dayOfWeek':'Mon','expectedCDN':'VSPP4','seq':3},
  {'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R3', 'dayOfWeek':'Mon','expectedCDN':'VSPP4','seq':4},
  {'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R3', 'dayOfWeek':'Mon','expectedCDN':'VSPP4','seq':5},
  {'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R3', 'dayOfWeek':'Mon','expectedCDN':'VSPP4','seq':6},
  {'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R3', 'dayOfWeek':'Mon','expectedCDN':'VSPP4','seq':7},
  {'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R3', 'dayOfWeek':'Mon','expectedCDN':'VSPP4','seq':8},
  {'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R3', 'dayOfWeek':'Mon','expectedCDN':'VSPP4','seq':9},
  {'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R3', 'dayOfWeek':'Mon','expectedCDN':'VSPP4','seq':10},
  ];

var stbTrueLinearR3Tue = [ 
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R3', 'dayOfWeek':'Tue','expectedCDN':'VSPP4','seq':1},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R3', 'dayOfWeek':'Tue','expectedCDN':'VSPP4','seq':2},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R3', 'dayOfWeek':'Tue','expectedCDN':'VSPP4','seq':3},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R3', 'dayOfWeek':'Tue','expectedCDN':'VSPP4','seq':4},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R3', 'dayOfWeek':'Tue','expectedCDN':'VSPP4','seq':5},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R3', 'dayOfWeek':'Tue','expectedCDN':'VSPP4','seq':6},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R3', 'dayOfWeek':'Tue','expectedCDN':'VSPP4','seq':7},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R3', 'dayOfWeek':'Tue','expectedCDN':'VSPP4','seq':8},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R3', 'dayOfWeek':'Tue','expectedCDN':'VSPP4','seq':9},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R3', 'dayOfWeek':'Tue','expectedCDN':'VSPP4','seq':10},
];

var stbTrueLinearR4Mon = [ 
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R4', 'dayOfWeek':'Mon','expectedCDN':'VSPP5','seq':1},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R4', 'dayOfWeek':'Mon','expectedCDN':'VSPP4','seq':2},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R4', 'dayOfWeek':'Mon','expectedCDN':'VSPP4','seq':3},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R4', 'dayOfWeek':'Mon','expectedCDN':'VSPP4','seq':4},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R4', 'dayOfWeek':'Mon','expectedCDN':'VSPP4','seq':5},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R4', 'dayOfWeek':'Mon','expectedCDN':'VSPP4','seq':6},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R4', 'dayOfWeek':'Mon','expectedCDN':'VSPP4','seq':7},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R4', 'dayOfWeek':'Mon','expectedCDN':'VSPP4','seq':8},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R4', 'dayOfWeek':'Mon','expectedCDN':'VSPP4','seq':9},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R4', 'dayOfWeek':'Mon','expectedCDN':'VSPP4','seq':10},
];

var stbTrueLinearR11Tue = [ 
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R11', 'dayOfWeek':'Tue','expectedCDN':'VSPP4','seq':1},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R11', 'dayOfWeek':'Tue','expectedCDN':'VSPP4','seq':2},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R11', 'dayOfWeek':'Tue','expectedCDN':'VSPP4','seq':3},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R11', 'dayOfWeek':'Tue','expectedCDN':'VSPP4','seq':4},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R11', 'dayOfWeek':'Tue','expectedCDN':'VSPP4','seq':5},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R11', 'dayOfWeek':'Tue','expectedCDN':'VSPP4','seq':6},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R11', 'dayOfWeek':'Tue','expectedCDN':'VSPP4','seq':7},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R11', 'dayOfWeek':'Tue','expectedCDN':'VSPP4','seq':8},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R11', 'dayOfWeek':'Tue','expectedCDN':'VSPP4','seq':9},
{'deviceType': 'STB', 'inHomeStatus': 'true', 'serviceType': 'Linear', 'locale': 'R11', 'dayOfWeek':'Tue','expectedCDN':'VSPP4','seq':10},
];

var cdaFalseVODR1Thu = [ 
  {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R1', 'dayOfWeek':'Thu','expectedCDN':'CDNW2','seq':1},
  {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R1', 'dayOfWeek':'Thu','expectedCDN':'CDNW2','seq':2},
  {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R1', 'dayOfWeek':'Thu','expectedCDN':'CDNW2','seq':3},
  {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R1', 'dayOfWeek':'Thu','expectedCDN':'CDNW2','seq':4},
  {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R1', 'dayOfWeek':'Thu','expectedCDN':'AWS-CF6','seq':5},
  {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R1', 'dayOfWeek':'Thu','expectedCDN':'AWS-CF6','seq':6},
  {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R1', 'dayOfWeek':'Thu','expectedCDN':'AWS-CF6','seq':7},
  {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R1', 'dayOfWeek':'Thu','expectedCDN':'AWS-CF6','seq':8},
  {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R1', 'dayOfWeek':'Thu','expectedCDN':'AWS-CF6','seq':9},
  {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R1', 'dayOfWeek':'Thu','expectedCDN':'AWS-CF6','seq':10},
  ];

  var cdaFalseVODR4Sat = [ 
    {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R4', 'dayOfWeek':'Sat','expectedCDN':'AWS-CF1','seq':1},
    {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R4', 'dayOfWeek':'Sat','expectedCDN':'AWS-CF1','seq':2},
    {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R4', 'dayOfWeek':'Sat','expectedCDN':'AWS-CF6','seq':3},
    {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R4', 'dayOfWeek':'Sat','expectedCDN':'AWS-CF6','seq':4},
    {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R4', 'dayOfWeek':'Sat','expectedCDN':'AWS-CF6','seq':5},
    {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R4', 'dayOfWeek':'Sat','expectedCDN':'AWS-CF6','seq':6},
    {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R4', 'dayOfWeek':'Sat','expectedCDN':'AWS-CF6','seq':7},
    {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R4', 'dayOfWeek':'Sat','expectedCDN':'AWS-CF6','seq':8},
    {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R4', 'dayOfWeek':'Sat','expectedCDN':'AWS-CF6','seq':9},
    {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R4', 'dayOfWeek':'Sat','expectedCDN':'AWS-CF6','seq':10},
    ];

  var cdaFalseVODR60Sun = [ 
    {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R60', 'dayOfWeek':'Sun','expectedCDN':'AWS-CF6','seq':1},
    {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R60', 'dayOfWeek':'Sun','expectedCDN':'AWS-CF6','seq':2},
    {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R60', 'dayOfWeek':'Sun','expectedCDN':'AWS-CF6','seq':3},
    {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R60', 'dayOfWeek':'Sun','expectedCDN':'AWS-CF6','seq':4},
    {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R60', 'dayOfWeek':'Sun','expectedCDN':'AWS-CF6','seq':5},
    {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R60', 'dayOfWeek':'Sun','expectedCDN':'AWS-CF6','seq':6},
    {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R60', 'dayOfWeek':'Sun','expectedCDN':'AWS-CF6','seq':7},
    {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R60', 'dayOfWeek':'Sun','expectedCDN':'AWS-CF6','seq':8},
    {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R60', 'dayOfWeek':'Sun','expectedCDN':'AWS-CF6','seq':9},
    {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R60', 'dayOfWeek':'Sun','expectedCDN':'AWS-CF6','seq':10},
    ];
  
    var cdaFalseVODR5Wed = [ 
      {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R5', 'dayOfWeek':'Wed','expectedCDN':'CDNW4','seq':1},
      {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R5', 'dayOfWeek':'Wed','expectedCDN':'CDNW4','seq':2},
      {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R5', 'dayOfWeek':'Wed','expectedCDN':'CDNW4','seq':3},
      {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R5', 'dayOfWeek':'Wed','expectedCDN':'CDNW4','seq':4},
      {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R5', 'dayOfWeek':'Wed','expectedCDN':'CDNW4','seq':5},
      {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R5', 'dayOfWeek':'Wed','expectedCDN':'CDNW4','seq':6},
      {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R5', 'dayOfWeek':'Wed','expectedCDN':'AWS-CF6','seq':7},
      {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R5', 'dayOfWeek':'Wed','expectedCDN':'AWS-CF6','seq':8},
      {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R5', 'dayOfWeek':'Wed','expectedCDN':'AWS-CF6','seq':9},
      {'deviceType': 'CDA', 'inHomeStatus': 'false', 'serviceType': 'VOD', 'locale': 'R5', 'dayOfWeek':'Wed','expectedCDN':'AWS-CF6','seq':10},
      ];
    
 
  


var options = {
    hostname: 'localhost',
    port: 8888,
    path: '/ResolveCDN/events',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
  }
  };  

  var dt = new Date();
console.log( dt.toUTCString());


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  var dt = new Date();
  console.log( dt.toUTCString());
  
  maxloop=1;
while(maxloop>0){
 // console.log("======================================================================");
  maxloop--;
  for(i=0;i<10;i++){
    //postMethod(cdaFalseVODR1Thu[i]);

    postMethod( stbTrueLinearR1Mon[i]);
    postMethod( stbTrueLinearR1Fri[i]);
    postMethod( stbTrueLinearR3Mon[i]); 
    postMethod( stbTrueLinearR3Tue[i]);
    postMethod( stbTrueLinearR4Mon[i]);
    postMethod( stbTrueLinearR11Tue[i]);
    postMethod(cdaFalseVODR1Thu[i]);
    postMethod(cdaFalseVODR4Sat[i]);
    postMethod(cdaFalseVODR60Sun[i]);
    postMethod(cdaFalseVODR5Wed[i]);
}
 await sleep(1000);
}
 

}


demo();

  function postMethod(value){
 //  console.log("Post data==>"+JSON.stringify(value));
    var req = http.request(options, (res) => {
        //console.log(`STATUS: ${res.statusCode}`);
        //console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
        res.on('data', (chunk) => {

          if(`${chunk}`!=value.expectedCDN){
            console.log("========================test failed==============");
          }
         
          console.log(`${chunk}` +"  expected ==>"+value.expectedCDN);
        });
        res.on('end', () => {
          //console.log('No more data in response.');
          res.destroy();
        });
      });
      
      req.on('error', (e) => {
        console.log(`problem with request: ${e.message}`);
    });
    
    req.write(JSON.stringify(value));  
    req.end();
};