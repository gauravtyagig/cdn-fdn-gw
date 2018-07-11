var util = require('./utilisation.js') 
var d = require('durable') 
 
Validate=function(m){

	if(m.deviceType=='STB' && m.inHomeStatus =='true' && m.serviceType =='Linear'){

		if((m.locale=='R1' || m.locale=='R2' ) && (m.dayOfWeek=='Mon' || m.dayOfWeek=='Tues' || m.dayOfWeek=='Wed' )){

			var key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale+m.dayOfWeek;

			var cdn=resolveDistribution(key,'VSPP1','0.5','VSPP4')
			if(cdn=='VSPP1')
				cdn=resolveFailOver(cdn,'AWS-CF1','0.9')
			if(cdn=='VSPP4')
				cdn=resolveFailOver('VSPP4','AWS-CF4','0.98')
			return cdn;
		}
 
		if((m.locale=='R3' ) && (m.dayOfWeek=='Mon' )){

			var key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale+m.dayOfWeek;

			var cdn=resolveDistribution(key,'VSPP3','0.1','VSPP4')
			if(cdn=='VSPP3')
				cdn=resolveFailOver(cdn,'AWS-CF2','0.93')
			if(cdn=='VSPP4')
				cdn=resolveFailOver('VSPP4','AWS-CF4','0.98')
			return cdn;
		}
 
		if((m.locale=='R4' )){

			var key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale;

			var cdn=resolveDistribution(key,'VSPP5','0.2','VSPP4')
			if(cdn=='VSPP5')
				cdn=resolveFailOver(cdn,'AWS-CF5','0.99')
			if(cdn=='VSPP4')
				cdn=resolveFailOver('VSPP4','AWS-CF4','0.98')
			return cdn;
		}
 
		if((m.locale=='R5' )){

			var key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale;

			var cdn=resolveDistribution(key,'VSPP2','undefined','VSPP4')
			if(cdn=='VSPP2')
				cdn=resolveFailOver(cdn,'AWS-CF3','0.99')
			if(cdn=='VSPP4')
				cdn=resolveFailOver('VSPP4','AWS-CF4','0.98')
			return cdn;
		}
 
		var cdn=resolveFailOver('VSPP4','AWS-CF4','0.98')
		return cdn;
	}
}
 
