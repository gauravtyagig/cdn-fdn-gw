			var cdn=resolveDistribution(key,resolvedCDN,'resolvedcdn_percentloaddistribution',defaultcdn)
			if(cdn==resolvedcdn)
				cdn=resolveFailOver(cdn,failovercdn_resolvedcdn,'utilizationthreshold');
			if(cdn==defaultcdn)
				cdn=resolveFailOver(cdn,failovercdnof_defaultcdn,'utilizationthreshold');
            return 'cdn response'
            


            if(m.locale=='R1,R2' && m.dayOfWeek =='Mon,Tues,Wed'){
                var cdn=resolveDistribution(key,resolvedCDN,'resolvedcdn_percentloaddistribution',defaultcdn)
                if(cdn==resolvedcdn)
                    cdn=resolveFailOver(cdn,failovercdn_resolvedcdn,'utilizationthreshold');
                if(cdn==defaultcdn)
                    cdn=resolveFailOver(cdn,failovercdnof_defaultcdn,'utilizationthreshold');
                return 'cdn response'
            }