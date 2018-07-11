var util = require('./helpers.js') 


Validate=async function(m){

	if(m.deviceType=='STB' && m.inHomeStatus =='true' && m.serviceType =='Linear'){

		if((m.locale=='R1' || m.locale=='R2' ) && (m.dayOfWeek=='Mon' || m.dayOfWeek=='Tue' || m.dayOfWeek=='Wed' )){

			var key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale+m.dayOfWeek;

			var cdn = resolvedLoadDistribution(key,'VSPP1','0.5','VSPP4')
			if(cdn=='VSPP1')
				cdn = await resolveFailOver(cdn,'AWS-CF1','90')
			if(cdn=='VSPP4')
				cdn = await resolveFailOver('VSPP4','undefined','98')
			return cdn;
		}
 
		if((m.locale=='R3' ) && (m.dayOfWeek=='Mon' )){

			var key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale+m.dayOfWeek;

			var cdn = resolvedLoadDistribution(key,'VSPP3','0.1','VSPP4')
			if(cdn=='VSPP3')
				cdn = await resolveFailOver(cdn,'AWS-CF2','93')
			if(cdn=='VSPP4')
				cdn = await resolveFailOver('VSPP4','undefined','98')
			return cdn;
		}
 
		if((m.locale=='R4' )){

			var key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale;

			var cdn = resolvedLoadDistribution(key,'VSPP5','0.2','VSPP4')
			if(cdn=='VSPP5')
				cdn = await resolveFailOver(cdn,'AWS-CF5','99')
			if(cdn=='VSPP4')
				cdn = await resolveFailOver('VSPP4','undefined','98')
			return cdn;
		}
 
		if((m.locale=='R5' )){

			var key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale;

			var cdn = resolvedLoadDistribution(key,'VSPP2','undefined','VSPP4')
			if(cdn=='VSPP2')
				cdn = await resolveFailOver(cdn,'AWS-CF3','99')
			if(cdn=='VSPP4')
				cdn = await resolveFailOver('VSPP4','undefined','98')
			return cdn;
		}
 
		var cdn = await resolveFailOver('VSPP4','undefined','98')
		return cdn;
	}
}
 
