var version='1531301709678'

exports.version=version;

var util = require('./helpers.js') 


Validate=async function(m){

	if(m.deviceType=='STB' && m.inHomeStatus =='true' && m.serviceType =='Linear'){

		if((m.locale=='R5' )){

			var key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale;

			var cdn = resolvedLoadDistribution(key,'VSPP2',20,'VSPP4')
			if(cdn=='VSPP2')
				cdn = await resolveFailOver(cdn,'AWS-CF3',99)
			return cdn;
		}
 
		if((m.locale=='R4' )){

			var key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale;

			var cdn = resolvedLoadDistribution(key,'VSPP5',10,'VSPP4')
			if(cdn=='VSPP5')
				cdn = await resolveFailOver(cdn,'AWS-CF5',99)
			return cdn;
		}
 
		if((m.locale=='R333' ) && (m.dayOfWeek=='Mon' )){

			var key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale+m.dayOfWeek;

			var cdn = resolvedLoadDistribution(key,'VSPP3',20,'VSPP4')
			if(cdn=='VSPP3')
				cdn = await resolveFailOver(cdn,'AWS-CF2',93)
			return cdn;
		}
 
		if((m.locale=='R1' || m.locale=='R2' ) && (m.dayOfWeek=='Mon' || m.dayOfWeek=='Tue' || m.dayOfWeek=='Wed' )){

			var key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale+m.dayOfWeek;

			var cdn = resolvedLoadDistribution(key,'VSPP1',50,'VSPP4')
			if(cdn=='VSPP1')
				cdn = await resolveFailOver(cdn,'AWS-CF1',90)
			return cdn;
		}
 
		var cdn = await resolveFailOver('VSPP4','undefined',undefined)
		return cdn;
	}
	if(m.deviceType=='STB' && m.inHomeStatus =='true' && m.serviceType =='VOD'){

		if((m.locale=='R8' )){

			var key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale;

			var cdn = resolvedLoadDistribution(key,'VSPP5',50,'VSPP5')
			if(cdn=='VSPP5')
				cdn = await resolveFailOver(cdn,'AWS-CF5',75)
			return cdn;
		}
 
		if((m.locale=='R5' )){

			var key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale;

			var cdn = resolvedLoadDistribution(key,'VSPP2',20,'VSPP5')
			if(cdn=='VSPP2')
				cdn = await resolveFailOver(cdn,'AWS-CF3',85)
			return cdn;
		}
 
		if((m.locale=='R2' ) && (m.dayOfWeek=='Wed' )){

			var key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale+m.dayOfWeek;

			var cdn = resolvedLoadDistribution(key,'VSPP1',30,'VSPP5')
			if(cdn=='VSPP1')
				cdn = await resolveFailOver(cdn,'AWS-CF1',87)
			return cdn;
		}
 
		if((m.locale=='R1' || m.locale=='R3' ) && (m.dayOfWeek=='Thu' || m.dayOfWeek=='Fri' || m.dayOfWeek=='Sat' || m.dayOfWeek=='Sun' )){

			var key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale+m.dayOfWeek;

			var cdn = resolvedLoadDistribution(key,'VSPP3',40,'VSPP5')
			if(cdn=='VSPP3')
				cdn = await resolveFailOver(cdn,'AWS-CF2',35)
			return cdn;
		}
 
		var cdn = await resolveFailOver('VSPP5','undefined',undefined)
		return cdn;
	}
	if(m.deviceType=='CDA' && m.inHomeStatus =='false' && m.serviceType =='Linear'){

		if((m.locale=='R6' )){

			var key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale;

			var cdn = resolvedLoadDistribution(key,'CDNW4',40,'AWS-CF6')
			if(cdn=='CDNW4')
				cdn = await resolveFailOver(cdn,'AWS-CF3',99)
			return cdn;
		}
 
		if((m.locale=='R4' )){

			var key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale;

			var cdn = resolvedLoadDistribution(key,'CDNW3',20,'AWS-CF6')
			if(cdn=='CDNW3')
				cdn = await resolveFailOver(cdn,'AWS-CF5',99)
			return cdn;
		}
 
		if((m.locale=='R2' || m.locale=='R3' ) && (m.dayOfWeek=='Sun' || m.dayOfWeek=='Mon' || m.dayOfWeek=='Wed' )){

			var key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale+m.dayOfWeek;

			var cdn = resolvedLoadDistribution(key,'CDNW2',30,'AWS-CF6')
			if(cdn=='CDNW2')
				cdn = await resolveFailOver(cdn,'AWS-CF2',93)
			return cdn;
		}
 
		if((m.locale=='R1' ) && (m.dayOfWeek=='Fri' )){

			var key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale+m.dayOfWeek;

			var cdn = resolvedLoadDistribution(key,'CDNW1',60,'AWS-CF6')
			if(cdn=='CDNW1')
				cdn = await resolveFailOver(cdn,'AWS-CF1',90)
			return cdn;
		}
 
		var cdn = await resolveFailOver('AWS-CF6','undefined',undefined)
		return cdn;
	}
	if(m.deviceType=='CDA' && m.inHomeStatus =='false' && m.serviceType =='VOD'){

		if((m.locale=='R8' )){

			var key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale;

			var cdn = resolvedLoadDistribution(key,'CDNW3',50,'AWS-CF6')
			if(cdn=='CDNW3')
				cdn = await resolveFailOver(cdn,'AWS-CF5',99)
			return cdn;
		}
 
		if((m.locale=='R5' )){

			var key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale;

			var cdn = resolvedLoadDistribution(key,'CDNW4',60,'AWS-CF6')
			if(cdn=='CDNW4')
				cdn = await resolveFailOver(cdn,'AWS-CF3',99)
			return cdn;
		}
 
		if((m.locale=='R4' ) && (m.dayOfWeek=='Sat' )){

			var key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale+m.dayOfWeek;

			var cdn = resolvedLoadDistribution(key,'CDNW1',20,'AWS-CF6')
			if(cdn=='CDNW1')
				cdn = await resolveFailOver(cdn,'AWS-CF1',90)
			return cdn;
		}
 
		if((m.locale=='R1' || m.locale=='R3' ) && (m.dayOfWeek=='Thu' || m.dayOfWeek=='Fri' )){

			var key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale+m.dayOfWeek;

			var cdn = resolvedLoadDistribution(key,'CDNW2',40,'AWS-CF6')
			if(cdn=='CDNW2')
				cdn = await resolveFailOver(cdn,'AWS-CF2',93)
			return cdn;
		}
 
		var cdn = await resolveFailOver('AWS-CF6','undefined',undefined)
		return cdn;
	}
	if(m.deviceType=='CDA' && m.inHomeStatus =='true' && m.serviceType =='Linear'){

		if((m.locale=='R5' )){

			var key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale;

			var cdn = resolvedLoadDistribution(key,'CDNW4',10,'AWS-CF6')
			if(cdn=='CDNW4')
				cdn = await resolveFailOver(cdn,'AWS-CF3',85)
			return cdn;
		}
 
		if((m.locale=='R3' )){

			var key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale;

			var cdn = resolvedLoadDistribution(key,'CDNW3',20,'AWS-CF6')
			if(cdn=='CDNW3')
				cdn = await resolveFailOver(cdn,'AWS-CF5',90)
			return cdn;
		}
 
		if((m.locale=='R2' ) && (m.dayOfWeek=='Sun' || m.dayOfWeek=='Mon' || m.dayOfWeek=='Wed' )){

			var key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale+m.dayOfWeek;

			var cdn = resolvedLoadDistribution(key,'CDNW2',30,'AWS-CF6')
			if(cdn=='CDNW2')
				cdn = await resolveFailOver(cdn,'AWS-CF2',65)
			return cdn;
		}
 
		if((m.locale=='R1' ) && (m.dayOfWeek=='Tue' )){

			var key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale+m.dayOfWeek;

			var cdn = resolvedLoadDistribution(key,'CDNW1',60,'AWS-CF6')
			if(cdn=='CDNW1')
				cdn = await resolveFailOver(cdn,'AWS-CF1',25)
			return cdn;
		}
 
		var cdn = await resolveFailOver('AWS-CF6','undefined',undefined)
		return cdn;
	}
	if(m.deviceType=='CDA' && m.inHomeStatus =='true' && m.serviceType =='VOD'){

		if((m.locale=='R5' )){

			var key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale;

			var cdn = resolvedLoadDistribution(key,'CDNW4',20,'AWS-CF6')
			if(cdn=='CDNW4')
				cdn = await resolveFailOver(cdn,'AWS-CF3',99)
			return cdn;
		}
 
		if((m.locale=='R3' ) && (m.dayOfWeek=='Thu' )){

			var key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale+m.dayOfWeek;

			var cdn = resolvedLoadDistribution(key,'CDNW1',80,'AWS-CF6')
			if(cdn=='CDNW1')
				cdn = await resolveFailOver(cdn,'AWS-CF1',90)
			return cdn;
		}
 
		if((m.locale=='R2' ) && (m.dayOfWeek=='Wed' || m.dayOfWeek=='Thu' || m.dayOfWeek=='Mon' )){

			var key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale+m.dayOfWeek;

			var cdn = resolvedLoadDistribution(key,'CDNW3',40,'AWS-CF6')
			if(cdn=='CDNW3')
				cdn = await resolveFailOver(cdn,'AWS-CF5',99)
			return cdn;
		}
 
		if((m.locale=='R1' || m.locale=='R4' )){

			var key=m.deviceType+m.inHomeStatus+m.serviceType+m.locale;

			var cdn = resolvedLoadDistribution(key,'CDNW2',30,'AWS-CF6')
			if(cdn=='CDNW2')
				cdn = await resolveFailOver(cdn,'AWS-CF2',93)
			return cdn;
		}
 
		var cdn = await resolveFailOver('AWS-CF6','undefined',undefined)
		return cdn;
	}
}
 
