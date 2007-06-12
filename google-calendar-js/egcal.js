/*
   Copyright 2007 Aiken Sam <aikensam at gmail.com>

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

function EGCalendarFundamental(name, locale)
{
	this.name = name;
	
	if (locale == null)
		this.gcal_locale = 0;
	else
		this.gcal_locale = locale;

	this.gcal_css_id = null;
//	this.gcal_timezone = "GMT+00:00";
//	this.gcal_gmtoffset = "GMT+00:00";
//	this.gcal_tzoffset = 0;
	this.gcal_debug = false;
	this.gcal_count = 0;
	this.gcal_wrap = true;
	this.gcal_feedkeys = new Array(0);
	this.gcal_events = new Array(0);
	this.gcal_size = 2;
	this.gcal_onload = null;
	this.gcal_colortable = new Array();
}

EGCalendarFundamental.oneday = 1000*60*60*24;

EGCalendarFundamental.timezones = { "Pacific/Apia":"GMT-11:00", "Pacific/Midway":"GMT-11:00", "Pacific/Niue":"GMT-11:00", "Pacific/Pago_Pago":"GMT-11:00", "Pacific/Fakaofo":"GMT-10:00", "Pacific/Honolulu":"GMT-10:00", "Pacific/Johnston":"GMT-10:00", "Pacific/Rarotonga":"GMT-10:00", "Pacific/Tahiti":"GMT-10:00", "Pacific/Marquesas":"GMT-09:30", "America/Anchorage":"GMT-09:00", "Pacific/Gambier":"GMT-09:00", "America/Los_Angeles":"GMT-08:00", "America/Tijuana":"GMT-08:00", "America/Vancouver":"GMT-08:00", "America/Whitehorse":"GMT-08:00", "Pacific/Pitcairn":"GMT-08:00", "America/Dawson_Creek":"GMT-07:00", "America/Denver":"GMT-07:00", "America/Edmonton":"GMT-07:00", "America/Hermosillo":"GMT-07:00", "America/Mazatlan":"GMT-07:00", "America/Phoenix":"GMT-07:00", "America/Yellowknife":"GMT-07:00", "America/Belize":"GMT-06:00", "America/Chicago":"GMT-06:00", "America/Costa_Rica":"GMT-06:00", "America/El_Salvador":"GMT-06:00", "America/Guatemala":"GMT-06:00", "America/Managua":"GMT-06:00", "America/Mexico_City":"GMT-06:00", "America/Regina":"GMT-06:00", "America/Tegucigalpa":"GMT-06:00", 
"America/Winnipeg":"GMT-06:00", "Pacific/Easter":"GMT-06:00", "Pacific/Galapagos":"GMT-06:00", "America/Bogota":"GMT-05:00", "America/Cayman":"GMT-05:00", "America/Grand_Turk":"GMT-05:00", "America/Guayaquil":"GMT-05:00", "America/Havana":"GMT-05:00", "America/Iqaluit":"GMT-05:00", "America/Jamaica":"GMT-05:00", "America/Lima":"GMT-05:00", "America/Montreal":"GMT-05:00", "America/Nassau":"GMT-05:00", "America/New_York":"GMT-05:00", "America/Panama":"GMT-05:00", "America/Port-au-Prince":"GMT-05:00", "America/Rio_Branco":"GMT-05:00", "America/Toronto":"GMT-05:00", "America/Anguilla":"GMT-04:00", "America/Antigua":"GMT-04:00", "America/Aruba":"GMT-04:00", "America/Asuncion":"GMT-04:00", "America/Barbados":"GMT-04:00", "America/Boa_Vista":"GMT-04:00", "America/Campo_Grande":"GMT-04:00", "America/Caracas":"GMT-04:00", "America/Cuiaba":"GMT-04:00", "America/Curacao":"GMT-04:00", "America/Dominica":"GMT-04:00", "America/Grenada":"GMT-04:00", "America/Guadeloupe":"GMT-04:00", "America/Guyana":"GMT-04:00", "America/Halifax":"GMT-04:00", "America/La_Paz":"GMT-04:00",
"America/Manaus":"GMT-04:00", "America/Martinique":"GMT-04:00", "America/Montserrat":"GMT-04:00", "America/Port_of_Spain":"GMT-04:00", "America/Porto_Velho":"GMT-04:00", "America/Puerto_Rico":"GMT-04:00", "America/Santiago":"GMT-04:00", "America/Santo_Domingo":"GMT-04:00", "America/St_Kitts":"GMT-04:00", "America/St_Lucia":"GMT-04:00", "America/St_Thomas":"GMT-04:00", "America/St_Vincent":"GMT-04:00", "America/Thule":"GMT-04:00", "America/Tortola":"GMT-04:00", "Antarctica/Palmer":"GMT-04:00", "Atlantic/Bermuda":"GMT-04:00", "Atlantic/Stanley":"GMT-04:00", "America/St_Johns":"GMT-03:30", "America/Araguaina":"GMT-03:00", "America/Argentina/Buenos_Aires":"GMT-03:00", "America/Bahia":"GMT-03:00", "America/Belem":"GMT-03:00", "America/Cayenne":"GMT-03:00", "America/Fortaleza":"GMT-03:00", "America/Godthab":"GMT-03:00", "America/Maceio":"GMT-03:00", "America/Miquelon":"GMT-03:00", "America/Montevideo":"GMT-03:00", "America/Paramaribo":"GMT-03:00", "America/Recife":"GMT-03:00", "America/Sao_Paulo":"GMT-03:00", "Antarctica/Rothera":"GMT-03:00", "America/Noronha":"GMT-02:00",
"Atlantic/South_Georgia":"GMT-02:00", "America/Scoresbysund":"GMT-01:00", "Atlantic/Azores":"GMT-01:00", "Atlantic/Cape_Verde":"GMT-01:00", "Africa/Abidjan":"GMT+00:00", "Africa/Accra":"GMT+00:00", "Africa/Bamako":"GMT+00:00", "Africa/Banjul":"GMT+00:00", "Africa/Bissau":"GMT+00:00", "Africa/Casablanca":"GMT+00:00", "Africa/Conakry":"GMT+00:00", "Africa/Dakar":"GMT+00:00", "Africa/El_Aaiun":"GMT+00:00", "Africa/Freetown":"GMT+00:00", "Africa/Lome":"GMT+00:00", "Africa/Monrovia":"GMT+00:00", "Africa/Nouakchott":"GMT+00:00", "Africa/Ouagadougou":"GMT+00:00", "Africa/Sao_Tome":"GMT+00:00", "America/Danmarkshavn":"GMT+00:00", "Atlantic/Canary":"GMT+00:00", "Atlantic/Reykjavik":"GMT+00:00", "Atlantic/St_Helena":"GMT+00:00", "Etc/GMT":"GMT+00:00", "Europe/Dublin":"GMT+00:00", "Europe/Lisbon":"GMT+00:00", "Europe/London":"GMT+00:00", "Africa/Algiers":"GMT+01:00", "Africa/Bangui":"GMT+01:00", "Africa/Brazzaville":"GMT+01:00", "Africa/Ceuta":"GMT+01:00", "Africa/Douala":"GMT+01:00", "Africa/Kinshasa":"GMT+01:00", "Africa/Lagos":"GMT+01:00", "Africa/Libreville":"GMT+01:00",
"Africa/Luanda":"GMT+01:00", "Africa/Malabo":"GMT+01:00", "Africa/Ndjamena":"GMT+01:00", "Africa/Niamey":"GMT+01:00", "Africa/Porto-Novo":"GMT+01:00", "Africa/Tunis":"GMT+01:00", "Africa/Windhoek":"GMT+01:00", "Europe/Amsterdam":"GMT+01:00", "Europe/Andorra":"GMT+01:00", "Europe/Belgrade":"GMT+01:00", "Europe/Berlin":"GMT+01:00", "Europe/Brussels":"GMT+01:00", "Europe/Budapest":"GMT+01:00", "Europe/Copenhagen":"GMT+01:00", "Europe/Gibraltar":"GMT+01:00", "Europe/Luxembourg":"GMT+01:00", "Europe/Madrid":"GMT+01:00", "Europe/Malta":"GMT+01:00", "Europe/Monaco":"GMT+01:00", "Europe/Oslo":"GMT+01:00", "Europe/Paris":"GMT+01:00", "Europe/Prague":"GMT+01:00", "Europe/Rome":"GMT+01:00", "Europe/Stockholm":"GMT+01:00", "Europe/Tirane":"GMT+01:00", "Europe/Vaduz":"GMT+01:00", "Europe/Vienna":"GMT+01:00", "Europe/Warsaw":"GMT+01:00", "Europe/Zurich":"GMT+01:00", "Africa/Blantyre":"GMT+02:00", "Africa/Bujumbura":"GMT+02:00", "Africa/Cairo":"GMT+02:00", "Africa/Gaborone":"GMT+02:00", "Africa/Harare":"GMT+02:00", "Africa/Johannesburg":"GMT+02:00", "Africa/Kigali":"GMT+02:00",
"Africa/Lubumbashi":"GMT+02:00", "Africa/Lusaka":"GMT+02:00", "Africa/Maputo":"GMT+02:00", "Africa/Maseru":"GMT+02:00", "Africa/Mbabane":"GMT+02:00", "Africa/Tripoli":"GMT+02:00", "Asia/Amman":"GMT+02:00", "Asia/Beirut":"GMT+02:00", "Asia/Damascus":"GMT+02:00", "Asia/Gaza":"GMT+02:00", "Asia/Jerusalem":"GMT+02:00", "Asia/Nicosia":"GMT+02:00", "Europe/Athens":"GMT+02:00", "Europe/Bucharest":"GMT+02:00", "Europe/Chisinau":"GMT+02:00", "Europe/Helsinki":"GMT+02:00", "Europe/Istanbul":"GMT+02:00", "Europe/Kaliningrad":"GMT+02:00", "Europe/Kiev":"GMT+02:00", "Europe/Minsk":"GMT+02:00", "Europe/Riga":"GMT+02:00", "Europe/Sofia":"GMT+02:00", "Europe/Tallinn":"GMT+02:00", "Europe/Vilnius":"GMT+02:00", "Africa/Addis_Ababa":"GMT+03:00", "Africa/Dar_es_Salaam":"GMT+03:00", "Africa/Djibouti":"GMT+03:00", "Africa/Kampala":"GMT+03:00", "Africa/Khartoum":"GMT+03:00", "Africa/Mogadishu":"GMT+03:00", "Africa/Nairobi":"GMT+03:00", "Antarctica/Syowa":"GMT+03:00", "Asia/Aden":"GMT+03:00", "Asia/Baghdad":"GMT+03:00", "Asia/Bahrain":"GMT+03:00", "Asia/Kuwait":"GMT+03:00",
"Asia/Qatar":"GMT+03:00", "Asia/Riyadh":"GMT+03:00", "Europe/Moscow":"GMT+03:00", "Indian/Antananarivo":"GMT+03:00", "Indian/Comoro":"GMT+03:00", "Indian/Mayotte":"GMT+03:00", "Asia/Tehran":"GMT+03:30", "Asia/Baku":"GMT+04:00", "Asia/Dubai":"GMT+04:00", "Asia/Muscat":"GMT+04:00", "Asia/Tbilisi":"GMT+04:00", "Asia/Yerevan":"GMT+04:00", "Europe/Samara":"GMT+04:00", "Indian/Mahe":"GMT+04:00", "Indian/Mauritius":"GMT+04:00", "Indian/Reunion":"GMT+04:00", "Asia/Kabul":"GMT+04:30", "Asia/Aqtau":"GMT+05:00", "Asia/Aqtobe":"GMT+05:00", "Asia/Ashgabat":"GMT+05:00", "Asia/Dushanbe":"GMT+05:00", "Asia/Karachi":"GMT+05:00", "Asia/Tashkent":"GMT+05:00", "Asia/Yekaterinburg":"GMT+05:00", "Indian/Kerguelen":"GMT+05:00", "Indian/Maldives":"GMT+05:00", "Asia/Calcutta":"GMT+05:30", "Asia/Colombo":"GMT+05:30", "Antarctica/Mawson":"GMT+06:00", "Antarctica/Vostok":"GMT+06:00", "Asia/Almaty":"GMT+06:00", "Asia/Bishkek":"GMT+06:00", "Asia/Dhaka":"GMT+06:00", "Asia/Omsk":"GMT+06:00", "Asia/Thimphu":"GMT+06:00", "Indian/Chagos":"GMT+06:00", "Asia/Rangoon":"GMT+06:30",
"Indian/Cocos":"GMT+06:30", "Antarctica/Davis":"GMT+07:00", "Asia/Bangkok":"GMT+07:00", "Asia/Hovd":"GMT+07:00", "Asia/Jakarta":"GMT+07:00", "Asia/Krasnoyarsk":"GMT+07:00", "Asia/Phnom_Penh":"GMT+07:00", "Asia/Saigon":"GMT+07:00", "Asia/Vientiane":"GMT+07:00", "Indian/Christmas":"GMT+07:00", "Antarctica/Casey":"GMT+08:00", "Asia/Brunei":"GMT+08:00", "Asia/Hong_Kong":"GMT+08:00", "Asia/Irkutsk":"GMT+08:00", "Asia/Kuala_Lumpur":"GMT+08:00", "Asia/Macau":"GMT+08:00", "Asia/Makassar":"GMT+08:00", "Asia/Manila":"GMT+08:00", "Asia/Shanghai":"GMT+08:00", "Asia/Singapore":"GMT+08:00", "Asia/Taipei":"GMT+08:00", "Asia/Ulaanbaatar":"GMT+08:00", "Australia/Perth":"GMT+08:00", "Asia/Choibalsan":"GMT+09:00", "Asia/Dili":"GMT+09:00", "Asia/Jayapura":"GMT+09:00", "Asia/Pyongyang":"GMT+09:00", "Asia/Seoul":"GMT+09:00", "Asia/Tokyo":"GMT+09:00", "Asia/Yakutsk":"GMT+09:00", "Pacific/Palau":"GMT+09:00", "Australia/Adelaide":"GMT+09:30", "Australia/Darwin":"GMT+09:30", "Asia/Vladivostok":"GMT+10:00", "Australia/Brisbane":"GMT+10:00", "Australia/Hobart":"GMT+10:00",
"Australia/Sydney":"GMT+10:00", "Pacific/Guam":"GMT+10:00", "Pacific/Port_Moresby":"GMT+10:00", "Pacific/Saipan":"GMT+10:00", "Pacific/Truk":"GMT+10:00", "Asia/Magadan":"GMT+11:00", "Pacific/Efate":"GMT+11:00", "Pacific/Guadalcanal":"GMT+11:00", "Pacific/Kosrae":"GMT+11:00", "Pacific/Noumea":"GMT+11:00", "Pacific/Ponape":"GMT+11:00", "Pacific/Norfolk":"GMT+11:30", "Asia/Kamchatka":"GMT+12:00", "Pacific/Auckland":"GMT+12:00", "Pacific/Fiji":"GMT+12:00", "Pacific/Funafuti":"GMT+12:00", "Pacific/Kwajalein":"GMT+12:00", "Pacific/Majuro":"GMT+12:00", "Pacific/Nauru":"GMT+12:00", "Pacific/Tarawa":"GMT+12:00", "Pacific/Wake":"GMT+12:00", "Pacific/Wallis":"GMT+12:00", "Pacific/Enderbury":"GMT+13:00", "Pacific/Tongatapu":"GMT+13:00", "Pacific/Kiritimati":"GMT+14:00" };

EGCalendarFundamental.timezone2Offset = function(tz)
{
	offset = EGCalendarFundamental.timezones[tz];
	var sign = offset.substr(3,1) == "+" ? 1 : -1;
	var hr = offset.substr(4,2);
	var min = offset.substr(7,8);
	
	return sign * hr * 3600000 + min * 60000; 
}

EGCalendarFundamental.minuteOffset2GMTOffset = function(m)
{
	var result = "GMT";
	
	if (m>0) result += "+"; else { m = -m; result += "-"; }
		
	result += EGCalendarFundamental.leftPadding("" + Math.floor(m/60), '0', 2);
	result += ":" + EGCalendarFundamental.leftPadding("" + m %60, '0', 2);
	
	return result;
}

function EGCalTimezone(tz)
{	

	var gmtOffset = EGCalTimezone.getGMTOffsetByTimezone(tz);
	
	if (gmtOffset == null) throw "Invalid timezone";

	var timezone = tz;

	this.getTimezone = function() { return timezone; };
	this.getGMTOffset= function() { return gmtOffset; };
	
	/*
	if (isNaN(tz_offset))
	{
		if ((result = tz_offset.match(/(GMT|)(([+-])(\d{2})(:?)(\d{2}))$/)) != null)
		{
			document.getElementById("test2").innerHTML =  result[0] + "/" + result[1] + "/" + result[2] + "/" + result[3] + "/" + result[4] + "/" + result[5] + "/" + result[6];
			tz_offset = parseInt(result[4], 10) * 60 + parseInt(result[6], 10);
			if (result[3] == '-') tz_offset = - tz_offset;
		}
	}

	offsetMinute = tz_offset;*/
}

EGCalTimezone.prototype.getOffset = function() 
{
	var gmtOffset = this.getGMTOffset();
	var sign = gmtOffset.substr(3,1) == "+" ? 1 : -1;
	var hr = gmtOffset.substr(4,2);
	var min = gmtOffset.substr(7,8);
	
	return sign * hr * 3600000 + min * 60000; 	
};

EGCalTimezone.prototype.getTimezoneByGMTOffset = EGCalTimezone.getTimezoneByGMTOffset;

EGCalTimezone.getTimezoneByGMTOffset = function(gmtoffset)
{
	for(key in EGCalendarFundamental.timezones)
		if (EGCalendarFundamental.timezones[key] == gmtoffset) 
			return key;
	
	return null;
}

EGCalTimezone.getGMTOffsetByTimezone = function(timezone)
{
	for(key in EGCalendarFundamental.timezones)
		if (key == timezone) 
			return EGCalendarFundamental.timezones[key];
	
	return null;
}

EGCalendarFundamental.localeData = [
		{ "Today":"Today", 
			"Month":"Month", 
			"AM":"am", "PM":"pm",
			"MonthFormatString":"mmm yyyy",
			"Sunday":"Sun", "Monday":"Mon", "Tuesday":"Tue", "Wednesday":"Wed", "Thursday":"Thu", "Friday":"Fri", "Saturday":"Sat",
			"MonthNames":["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			"MonthShortNames":null,
			"Timezone":"Timezone: ", "PoweredBy":"Powered By Google Calendar: ", "Subscribe":"Subscribe" },
		{ "Today":"今天", 
			"Month":"月", 
			"AM":"上午", "PM":"下午",
			"MonthFormatString":"yyyy年m月",
			"Sunday":"週日", "Monday":"週一", "Tuesday":"週二", "Wednesday":"週三", "Thursday":"週四", "Friday":"週五", "Saturday":"週六",
			"MonthNames":["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
			"MonthShortNames":["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
			"Timezone":"時區：", "PoweredBy":"由 Google 日曆提供:", "Subscribe":"使用" }
	];


EGCalendarFundamental.prototype.dateFormat = function(f, d, utc)
{
    if (!this.valueOf())
        return '';
        
    var date = utc ? d.getUTCDate(): d.getDate();
    var day = utc ? d.getUTCDay() : d.getDay();
    var month = utc ? d.getUTCMonth() : d.getMonth();
    var year = utc ? d.getUTCFullYear() : d.getFullYear();
    var hours = utc ? d.getUTCHours() : d.getHours();
    var minutes = utc ? d.getUTCMinutes() : d.getMinutes();
    var seconds = utc ? d.getUTCSeconds() : d.getSeconds();
    
    var locale = this.gcal_locale;

        function rep($1)
        {
            switch ($1)
            {
            case 'yyyy': return year;
            case 'mmmm': return EGCalendarFundamental.localeData[locale].MonthNames[month];
            case 'mmm':  
            						if (EGCalendarFundamental.localeData[locale].MonthShortNames == null) 
            							return EGCalendarFundamental.localeData[locale].MonthNames[month].substr(0, 3);
            						else
            							return EGCalendarFundamental.localeData[locale].MonthNames[month];            							
            case 'mm':   return EGCalendarFundamental.leftPadding("" + (month + 1), '0', 2);
            case 'm':   return "" + (month + 1);
            case 'dddd': return gsDayNames[day];
            case 'ddd':  return gsDayNames[day].substr(0, 3);
            case 'dd':   return date.zf(2);
            case 'HH':   return EGCalendarFundamental.leftPadding("" + hours, '0', 2);
            case 'hh':   return EGCalendarFundamental.leftPadding("" + ((h = hours % 12) ? h : 12), '0', 2);
            case 'nn':   return EGCalendarFundamental.leftPadding("" + minutes, '0', 2);
            case 'ss':   return seconds.zf(2);
            case 'a/p':  return hours < 12 ? 'a' : 'p';
            }
        }
        
    return f.replace(/(yyyy|mmmm|mmm|mm|m|dddd|ddd|dd|hh|nn|ss|a\/p)/gi, rep);
}

EGCalendarFundamental.leftPadding = function(str, pad, n) 
{
	while (str.length < n)
	{
		str = pad + str;
	}
	return str;
}

EGCalendarFundamental.getDateString = function(d) 
{ 
	var monthStr = "" + (d.getMonth()+1); 
	if (monthStr.length<2) monthStr = "0" + monthStr; 
	
	var dateStr = "" + (d.getDate()); 
	if (dateStr.length<2) dateStr = "0" + dateStr;
	
	return "" + d.getFullYear() + "-" + monthStr + "-" + dateStr; 
}


EGCalendarFundamental.cal_Date = function(a, tz)
{ var aa=a;
	
	if (tz == null)
	{ tz = "+00:00";}
		else tz = tz.substr(3);
	
  if (aa.length==10)     aa += 'T00:00:00.000'  + tz;     
  //if (aa.length==10)     aa += 'T23:59:590.000'  + tz;     
  
  return Date.parse(aa.replace(/^(\d{4})-(\d{2})-(\d{2})T([0-9:]*)([.0-9]*)(Z|([+-])(\d{2})(:*)(\d{2}))$/, 
					'$1/$2/$3 $4 GMT$7$8$10'));
}


EGCalendarFundamental.cal_comp = function(a,b)
{
	order = EGCalendarFundamental.cal_Date(a.gd$when[0].startTime, a.gd$GMTOffset) - EGCalendarFundamental.cal_Date(b.gd$when[0].startTime, b.gd$GMTOffset);
  return order;
}

EGCalendarFundamental.cal_weighting = function(a,b)
{
	var a_startDate = EGCalendarFundamental.cal_Date(a.gd$when[0].startTime, a.gd$GMTOffset);
	var a_endDate = EGCalendarFundamental.cal_Date(a.gd$when[0].endTime, a.gd$GMTOffset);
	var b_startDate = EGCalendarFundamental.cal_Date(b.gd$when[0].startTime, b.gd$GMTOffset);
	var b_endDate = EGCalendarFundamental.cal_Date(b.gd$when[0].endTime, b.gd$GMTOffset);

	if (a_endDate - a_startDate< EGCalendarFundamental.oneday && b_endDate - b_startDate < EGCalendarFundamental.oneday )
		order = a_startDate - b_startDate;
	else
		order = b_endDate - a_endDate;
	
  return order;
}

EGCalendarFundamental.attachScript = function(src, charset)
{
	var script = document.createElement("SCRIPT");
	script.type = "text/javascript";
	if (charset != null)
	script.charset = charset;
	document.getElementsByTagName("body")[0].appendChild(script);
	script.src = src;	
}
  
  
EGCalendarFundamental.compEvent = function(a,b)
{
	order= a.rank - b.rank;
  return order;
}

EGCalendarFundamental.msg = "";

EGCalendarFundamental.sortDayEvent = function(dayEvents)
{

	var availables = new Array(dayEvents.length);
	
	//dayEvents = dayEvents.sort(EGCalendarFundamental.cal_comp);
  dayEvents = dayEvents.sort(EGCalendarFundamental.cal_weighting);
	
	
	for (var i=0; i<dayEvents.length; i++)
	{
		//if (dayEvents[i].title.$t.indexOf("戒賭輔導員基礎課程")>= 0) alert (dayEvents[i].title.$t + "/" + dayEvents[i].rank);					
		if (dayEvents[i].rank != null)
		{
			availables[dayEvents[i].rank] = 0;
		}
//		document.getElementById("test2").innerHTML += dayEvents[i].gd$when[0].startTime + " " + dayEvents[i].title.$t + "<Br>";					
	}

	var j = 0;
				
	for (var i=0; i<dayEvents.length; i++)
	{
		if (dayEvents[i].rank == null)
		{
			while (availables[j] == 0)
			{
				j++;
			}
			
			//if (dayEvents[i].gd$when[0].startTime.indexOf("2007-06-19")>= 0) alert (dayEvents[i].title.$t + "/" + dayEvents[i].rank + "/j=" + j + "/" + availables[j]);			
			dayEvents[i].rank = j; j++;
		}
		
//		EGCalendarFundamental.msg += dayEvents[i].title.$t + "(" + dayEvents[i].rank + ")";
	}	
	
//	EGCalendarFundamental.msg += "<BR>";
	return dayEvents.sort(EGCalendarFundamental.compEvent);
}
  
EGCalendarFundamental.prototype.pushEvent = function(ev, eventsArray, arrayBegin, arrayEnd)
{
	  var startTime=ev.gd$when[0].startTime;
	  var endTime=ev.gd$when[0].endTime;

		//var startDate = new Date(startTime.substring(0,4), startTime.substring(5,7) - 1, startTime.substring(8,10));  
		//var endDate = new Date(endTime.substring(0,4), endTime.substring(5,7) - 1, endTime.substring(8,10)); 
	
		var startDate = new Date(EGCalendarFundamental.cal_Date(ev.gd$when[0].startTime, ev.gd$GMTOffset ));
		var endDate = new Date(EGCalendarFundamental.cal_Date(ev.gd$when[0].endTime, ev.gd$GMTOffset));
		ev.debug$startDate = startDate;
		startDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
	//	endDate = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
		ev.debug$endDate = endDate;
		
		if (ev.gd$GMTOffset != "GMT+08:00")
		{
			//alert(startDate + "," + startTime);
			//alert(endDate + "," + endTime);
	  }
		
	
		if (startDate.getTime() < arrayBegin.getTime()) startDate = arrayBegin;
//		if (endDate.getTime() > arrayEnd.getTime()) endDate = arrayEnd + EGCalendarFundamental.oneday;
	
		var i = Math.round((startDate - arrayBegin) / EGCalendarFundamental.oneday);
		var d = Math.round((endDate - startDate) / EGCalendarFundamental.oneday);
		
		if (d==0) d=1;

		ev.startDate = new Date(startDate);
		ev.endDate = new Date(endDate);
	
		for (var j=0; j<d; j++)
		{
		if (eventsArray[i+j] == null)
						eventsArray[i+j] = new Array(0);					
			eventsArray[i+j].push(ev);		
		}
}
    
EGCalendarFundamental.prototype.parseEvents = function(events, arrayBegin, arrayEnd)
{
	var interval = (arrayEnd - arrayBegin)/EGCalendarFundamental.oneday + 1;

	var eventsArray = new Array(interval);
	
	if (events)	
	for (var i=0; i<events.length; i++)
	{
		this.pushEvent(events[i], eventsArray, arrayBegin, arrayEnd);
	} 					
	
	return eventsArray;			
}        
 
EGCalendarFundamental.prototype.isRankExisted = function(dayEvents, r)
{
	var ret = false;
	for (var i=0; i<dayEvents.length; i++)
	{
		if (dayEvents[i].rank == r)
		{
			ret = true;
			break;
		}			
	}
	
	return ret;
}

EGCalendarFundamental.prototype.getWeekRow = function(eventsArray, i, w, today, rb, re, colcount)
{
	var ret = "";

	for (r=rb; r<re+1; r++)
	{
		ret += '<tr class="grid-row">';
		if (eventsArray != null && colcount != 0)
		{
			var n = 0;
			var firstdayofweek = w.getTime() - EGCalendarFundamental.oneday*7;
			var lastdayofweek = w.getTime() - EGCalendarFundamental.oneday;
			for (n=6; n>=0; n--)
			{

				if ( (w.getTime() - EGCalendarFundamental.oneday*(n+1)) == today.getTime())
					cellClass = "cell-today ";
				else
					cellClass = ""

				if (eventsArray[i-n] != null)
				{
//					if (n == 6)
//						EGCalendarFundamental.sortDayEvent(eventsArray[i-n]);
									
					if (eventsArray[i-n].length >= r+1)
					{
							if (eventsArray[i-n][r].startDate.getTime() == (w.getTime() - EGCalendarFundamental.oneday*(n+1)) ||
							((w.getTime() - EGCalendarFundamental.oneday*(n+1)) == firstdayofweek && eventsArray[i-n][r].startDate.getTime() < firstdayofweek)
							)
							{
								ev = eventsArray[i-n][r];
								ev_startTime=ev.gd$when[0].startTime;
								ev_endTime=ev.gd$when[0].endTime;
								//ev_startDate = new Date(ev_startTime.substring(0,4), ev_startTime.substring(5,7) - 1, ev_startTime.substring(8,10));
								//ev_endDate = new Date(ev_endTime.substring(0,4), ev_endTime.substring(5,7) - 1, ev_endTime.substring(8,10));
								ev_startDate = new Date(EGCalendarFundamental.cal_Date(ev.gd$when[0].startTime, this.gcal_timezone.getGMTOffset()));
								ev_startDate = new Date(ev_startDate.getFullYear(), ev_startDate.getMonth(), ev_startDate.getDate());
								ev_endDate = new Date(EGCalendarFundamental.cal_Date(ev.gd$when[0].endTime, this.gcal_timezone.getGMTOffset()));
								//ev_endDate = new Date(ev_endDate.getFullYear(), ev_endDate.getMonth(), ev_endDate.getDate());	
								title=ev.title.$t;
								
								// + "<BR>" + ev.gd$when[0].startTime + "<BR>" + new Date(EGCalendarFundamental.cal_Date(ev.gd$when[0].startTime, this.gcal_timezone.getGMTOffset()));

								link=ev.link[0].href;
														
								eventClass = this.gcal_wrap ? "" : "item-content "; 
								
								var divStyle = "";
								var linkStyle = "";

								//ev.rank = r;
																
								if (this.gcal_debug) title += "(" + ev.rank + ")";
																
								var st = ev_startDate;
								var ed = ev_endDate;

								if (ev_startDate.getTime() < firstdayofweek)
								{	st = new Date(firstdayofweek);
									eventClass += "item-continued ";
								}
								if (ev_endDate.getTime() > lastdayofweek + EGCalendarFundamental.oneday)
								{
									ed = new Date(lastdayofweek + EGCalendarFundamental.oneday);
									eventClass += "item-continues ";
								}
								var ev_interval1 = (ed - st)/EGCalendarFundamental.oneday;
								
								//if (ev_interval1 == 1 && st.getDate() == 11) alert (ed +"/" +st);

								//if (st.getDate() == ed.getDate())
								if (ev_interval1 < 1)
								{
									eventClass += "event-singleday "; //item-content
									eventSpan = "";

									//var st = new Date(EGCalendarFundamental.cal_Date(ev.gd$when[0].startTime, this.gcal_timezone.getGMTOffset()));
									var st = new Date(EGCalendarFundamental.cal_Date(ev.gd$when[0].startTime, ev.gd$GMTOffset));
									title = 
									this.dateFormat("HH:nn", new Date(st.getTime() + st.getTimezoneOffset()*60000 + this.gcal_timezone.getOffset()), false) + " " + title;

									if (ev.gd$Color != null)
									linkStyle = "style='color:" + ev.gd$Color + "' "
								}
								else
								{
										eventClass += "event-multiday ";	// item-content

										ev_interval1 = Math.round(ev_interval1);
										if (ev_interval1 == 0) ev_interval1++;
										//title += "," + ev_interval1;
										eventSpan = 'colspan="' + ev_interval1  +'"';

										if (ev.gd$Color != null)
										divStyle = "style='background-color:" + ev.gd$Color + "' ";
								}

								if (r == re)
									cellClass += 'cell-last-row ';

									//  				  ret += '<td class="' + cellClass + '" ' + eventSpan + '><div class="' + eventClass + '"><div class="t2 tbg"></div><div class="t0 tbg"><a class="event-link" href="' + link + '" target="_blank"><span class="event-summary">' + title + '</span></a></div><div class="t2 tbg"></div></div>'
								ret += '<td class="' + cellClass + '" ' + eventSpan + '><div class="' + eventClass + '"><div class="t2 tbg" ' + divStyle + '></div><div class="t0 tbg" ' + divStyle + '><a class="event-link" ' + linkStyle + 'href="' + link + '" target="_blank"><span class="event-summary">' + title + '</span></a></div><div class="t2 tbg" ' + divStyle + '></div></div>'
									+ '</td>';
							} 
							//else if (eventsArray[i-n][r].startDate.getTime() == (w.getTime() - EGCalendarFundamental.oneday*(n+1)) &&eventsArray[i-n][eventsArray[i-n].length-1].rank > r)
							else if (
								(eventsArray[i-n][r].startDate.getTime() != (w.getTime() - EGCalendarFundamental.oneday*(n+1)) && !this.isRankExisted(eventsArray[i-n], r) && eventsArray[i-n][eventsArray[i-n].length-1].rank > r)
								)
//							if (false)
							{
								if (r == re)
									cellClass += "cell-empty cell-last-row";

								var apx = "";
								
								for (var q=0; q< eventsArray[i-n].length; q++)
								apx = apx +  eventsArray[i-n][q].title.$t + "(" + eventsArray[i-n][q].rank +")" + "/";

								if (this.gcal_debug)
									ret += '<td class="' + cellClass + '" >e ' + "," + n + "," +  r + "," +  ' </td>';						
								else
									ret += '<td class="' + cellClass + '" ></td>';
						  }
					}
					else if (eventsArray[i-n][eventsArray[i-n].length-1].rank != r) {
						if (r == re)
						cellClass += "cell-empty cell-last-row";

						if (this.gcal_debug)
							ret += '<td class="' + cellClass + '" >b ' +  "," + n + "," + r + "," + eventsArray[i-n][eventsArray[i-n].length-1].rank + ' </td>';
						else
							ret += '<td class="' + cellClass + '" ></td>';
					}				
				} else
				if (n == 6)
				{
					if (r == re)
						cellClass += "cell-empty cell-last-row";

					if (this.gcal_debug)
						ret += '<td class="' + cellClass + '" >a ' +  r + ' </td>';					
					else
						ret += '<td class="' + cellClass + '" ></td>';
				}
			}
		} else if (colcount == 0)
								{
									if ( (w.getTime() - EGCalendarFundamental.oneday*7) == today.getTime())
									cellClass = "cell-today ";
									else
										cellClass = "";

										if (r == re)
										cellClass += "cell-empty cell-last-row"

										ret += '<td class="' + cellClass + '" >b</td>';
									}

		
		ret += '</tr>';
	}
	return ret;
}

EGCalendarFundamental.prototype.addFeed = function(feedkey, color, targetDate)
{	
	targetDate = new Date(targetDate.getFullYear(), targetDate.getMonth(), 1);
	
	this.gcal_feedkeys.push(feedkey);
	var startmin = new Date(targetDate.getTime() - targetDate.getDay()*EGCalendarFundamental.oneday);
	var startmax = new Date(new Date(targetDate.getFullYear(), targetDate.getMonth()+1, 1).getTime() - EGCalendarFundamental.oneday);
	startmax = new Date(startmax.getTime() + (6 - startmax.getDay()+1)*EGCalendarFundamental.oneday); 	
	var parameters = "?alt=json-in-script&orderby=starttime&sortorder=ascend&max-results=300&singleevents=true" + "&start-min=" + EGCalendarFundamental.getDateString(startmin) + "&start-max=" + EGCalendarFundamental.getDateString(startmax);
	
	//gcal_callbacks.push(new Callback(color));	
	//parameters += "&callback=gcal_callbacks[" + (gcal_callbacks.length-1) + "]";
	
	this.gcal_colortable[feedkey] = color;
	
	parameters += "&callback=" + this.name + ".concatEvents";
	EGCalendarFundamental.feedGCAL(feedkey, parameters);

}

EGCalendarFundamental.feedGCAL = function(feedkey, parameters)
{
	var charset = 'utf-8';
	var feedurl = "http://www.google.com/calendar/feeds/" + feedkey + "/public/full" + parameters;
	//var content = "\<script type='text/javascript' charset='utf-8' src='" + feedurl + "'><\/script>";
	//document.writeln(content);
	var script = document.createElement("SCRIPT");
	script.type = "text/javascript";
	if (charset != null)
	script.charset = charset;
	document.getElementsByTagName("body")[0].appendChild(script);
	script.src = feedurl;		
	
}

EGCalendarFundamental.attachScript = function(src, charset)
{
	var script = document.createElement("SCRIPT");
	script.type = "text/javascript";
	if (charset != null)
	script.charset = charset;
	document.getElementsByTagName("body")[0].appendChild(script);
	script.src = src;	
}

EGCalendarFundamental.prototype.concatEvents = function(json)	
{
	var feedurl = json.feed.link[0].href;
	var feedkey = feedurl.substr(feedurl.indexOf("feeds/")+6);
	feedkey = feedkey.substr(0, feedkey.indexOf("/"));
	var timezone = new EGCalTimezone(json.feed.gCal$timezone.value);
	if (!this.gcal_title)
	{
		this.gcal_title = json.feed.title.$t;
	}

	if (!this.gcal_timezone)
	{
		try
		{
			this.gcal_timezone = timezone;
		} catch (e)
		{
			this.gcal_timezone = new EGCalTimezone("Europe/London");
		}
	}
	
	if (json.feed.entry != null)
	{
		for (var i=0; i<json.feed.entry.length; i++)
		{
			json.feed.entry[i].gd$Color = this.gcal_colortable[feedkey];
			json.feed.entry[i].gd$GMTOffset = timezone.getGMTOffset();
		}
		this.gcal_events = this.gcal_events.concat(json.feed.entry);
		this.gcal_events.sort(EGCalendarFundamental.cal_comp);
	}		
	
	if (this.gcal_onload != null)
		this.gcal_onload(this.gcal_events);

}

EGCalendarFundamental.prototype.getMonthTable = function(target, year, month, events)
{
	var today = new Date();
	today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
	var d = new Date(year, month, 1);
	var f = new Date(year, month, 1);
	var w = d;
	var m = month;
	// class="month-table"
	var ret = '<table class="month-table"><col width="14%" class="column-label"><col width="14%" class="column-label"><col width="14%" class="column-label"><col width="14%" class="column-label"><col width="14%" class="column-label"><col width="14%" class="column-label"><col width="14%" class="column-label">'
					+	'<tr><th class="column-label">' + EGCalendarFundamental.localeData[this.gcal_locale].Sunday + '</th>'
					+ '<th class="column-label">' + EGCalendarFundamental.localeData[this.gcal_locale].Monday + '</th>'
					+ '<th class="column-label">' + EGCalendarFundamental.localeData[this.gcal_locale].Tuesday + '</th>'
					+ '<th class="column-label">' + EGCalendarFundamental.localeData[this.gcal_locale].Wednesday + '</th>'
					+ '<th class="column-label">' + EGCalendarFundamental.localeData[this.gcal_locale].Thursday + '</th>'
					+ '<th class="column-label">' + EGCalendarFundamental.localeData[this.gcal_locale].Friday + '</th>'
					+ '<th class="column-label">' + EGCalendarFundamental.localeData[this.gcal_locale].Saturday + '</th></tr>';
	var i = 0;
	var j = 0;
	var k = 0;
	var l = 0;
	var colcount = 0;
	var count = 0;
	var priDate = 0;
	
	ret += '<tr>';
	
	priDate = d.getDay()-1;
	var begin = new Date(d.getTime() - d.getDay()*EGCalendarFundamental.oneday);
	var end = new Date(new Date(year, month+1, 1).getTime() - EGCalendarFundamental.oneday); 
	end = new Date(end.getTime() + (6 - end.getDay())*EGCalendarFundamental.oneday);
	
	var interval = (end - begin)/EGCalendarFundamental.oneday + 1 ;
	
	d = begin;
	
	//var events = json.feed.entry;
	
	var testary = this.parseEvents(events, begin, end);
	
	if (false)
	{
	var appendix = "<br>";
	var apd = begin;
	for (var i=0; i<testary.length; i++)
	{
		x = testary[i];
		apdd = new Date(apd.getTime() + i*EGCalendarFundamental.oneday);
		appendix += apdd.getDate();
		if (x != null)
		{
			appendix +="=";
			for (var j=0; j<x.length; j++)
			{
				 appendix += x[j].title.$t + "(" + x[j].debug$endDate  +"/" + x[j].debug$startDate + ")" + " , ";
			}
		}
		appendix +="<br>";
	} 	
	
	ret = "<DIV>Object = " + appendix + "</DIV>" + ret;
	}
//	if (events == null) events = new Array(0);
 
  var eventsArray = null;

	var cellClass = "";
	var eventClass = "";
	var eventSpan = "";
	
	eventsArray = testary;
	
	for (i=0; i<interval; i++){
			
		if (d.getMonth() != month)
			ret += '<td class="date-marker date-not-month">' + d.getDate() + '</td>';			
		else if (d.getTime() == today.getTime())
			ret += '<td class="date-marker date-month date-today">' + d.getDate() +'</td>';
		else
			ret += '<td class="date-marker date-month">' + d.getDate() +'</td>';
						
		
		if (d.getDay() == 6) {
			
			var max_events_in_this_week = 2;
		
			for (var loop1=0; loop1<7; loop1++)
			{
				if (eventsArray[(w.getTime() - begin.getTime())/EGCalendarFundamental.oneday + loop1] != null && eventsArray[(w.getTime() - begin.getTime())/EGCalendarFundamental.oneday + loop1].length > max_events_in_this_week)
				max_events_in_this_week = eventsArray[(w.getTime() - begin.getTime())/EGCalendarFundamental.oneday + loop1].length;
			}
									
			ret += '</tr>';
			ret += '<tr class="grid-row">';
							
			colcount = 0;
			
			var firstdayofweek = w.getTime();
			var lastdayofweek = w.getTime() + EGCalendarFundamental.oneday*6;
			
			for (j=0; j<7; j++)
			{
				cellClass = "";
				if (w.getTime() == today.getTime())
				{
					cellClass = "cell-today "; 	
				}	
				
				
				if (eventsArray != null && eventsArray[(w.getTime() - begin.getTime())/EGCalendarFundamental.oneday] != null)
				{				
					if (j==0)
					for (var x=0; x<eventsArray[(w.getTime() - begin.getTime())/EGCalendarFundamental.oneday].length; x++)
					 eventsArray[(w.getTime() - begin.getTime())/EGCalendarFundamental.oneday][x].rank = null;
					
					eventsArray[(w.getTime() - begin.getTime())/EGCalendarFundamental.oneday] = EGCalendarFundamental.sortDayEvent(eventsArray[(w.getTime() - begin.getTime())/EGCalendarFundamental.oneday]);
					
					
					if (eventsArray[(w.getTime() - begin.getTime())/EGCalendarFundamental.oneday][0].startDate.getTime() == w.getTime() ||
						(w.getTime() == firstdayofweek && eventsArray[(w.getTime() - begin.getTime())/EGCalendarFundamental.oneday][0].startDate.getTime() < firstdayofweek)
					)
					{
				  ev = eventsArray[(w.getTime() - begin.getTime())/EGCalendarFundamental.oneday][0];
					ev_startTime=ev.gd$when[0].startTime;
					ev_endTime=ev.gd$when[0].endTime;
					ev_startDate = new Date(EGCalendarFundamental.cal_Date(ev.gd$when[0].startTime, this.gcal_timezone.getGMTOffset()));
					ev_startDate = new Date(ev_startDate.getFullYear(), ev_startDate.getMonth(), ev_startDate.getDate());							
					ev_endDate = new Date(EGCalendarFundamental.cal_Date(ev.gd$when[0].endTime, this.gcal_timezone.getGMTOffset()));
					//ev_endDate = new Date(ev_endDate.getFullYear(), ev_endDate.getMonth(), ev_endDate.getDate());	
					title=ev.title.$t;

					//+ "<BR>" + ev.gd$when[0].startTime + "<BR>" + new Date(EGCalendarFundamental.cal_Date(ev.gd$when[0].startTime, this.gcal_timezone.getGMTOffset()));
					
        	link=ev.link[0].href;
        	
        	eventClass = this.gcal_wrap ? "" : "item-content "; 
        	
					var divStyle = "";
					var linkStyle = "";
					        	
						var st = ev_startDate;
						var ed = ev_endDate;

						
						if (ev_startDate.getTime() < firstdayofweek)
						{
							st = new Date(firstdayofweek);					
							eventClass += "item-continued ";							
						}

						if (ev_endDate.getTime() > lastdayofweek + EGCalendarFundamental.oneday) 
						{
							ed = new Date(lastdayofweek + EGCalendarFundamental.oneday);
							eventClass += "item-continues ";
						}						

						var ev_interval2 = (ed - st)/EGCalendarFundamental.oneday;
						
						//if (ev_interval2 == 0 && st.getDate() == 11) alert (ed +"/" +st);	        	
				//title += " " + eventClass;
						        					        	
					ev.rank = 0;					
				
					if (this.gcal_debug) title += "(" + ev.rank + ")";
					
											        	
        	if (ev_interval2<1)
        	{
						eventClass += "event-singleday "; // item-content 
						eventSpan = "";
						
						//var st = new Date(EGCalendarFundamental.cal_Date(ev.gd$when[0].startTime, this.gcal_timezone.getGMTOffset()));
						var st = new Date(EGCalendarFundamental.cal_Date(ev.gd$when[0].startTime, ev.gd$GMTOffset));
						//title = (new Date(st.getTime() - st.getTimezoneOffset()*60000 + this.gcal_timezone.getOffset())).toLocaleTimeString() + " " + title;
						title = this.dateFormat("HH:nn", new Date(st.getTime() + st.getTimezoneOffset()*60000 + this.gcal_timezone.getOffset()), false) + " " + title;
						
						if (ev.gd$Color != null) 
							linkStyle = "style='color:" + ev.gd$Color + "' "						
					}
					else
					{
						eventClass += "event-multiday ";  // item-content 
						
						ev_interval2 = Math.round(ev_interval2);
						if (ev_interval2 == 0) ev_interval2++;
						
						//title += "," + ev_interval2;
						
						eventSpan = 'colspan="' + ev_interval2 +'"';
					
						if (ev.gd$Color != null) 
							divStyle = "style='background-color:" + ev.gd$Color + "' ";
					}

        						
				  ret += '<td class="' + cellClass + '" ' + eventSpan + '><div class="' + eventClass + '"><div class="t2 tbg" ' + divStyle + '></div><div class="t0 tbg" ' + divStyle + '><a class="event-link" ' + linkStyle + 'href="' + link + '" target="_blank"><span class="event-summary">' + title + '</span></a></div><div class="t2 tbg" ' + divStyle + '></div></div>'
				   + '</td>';
				  
					} else if (eventsArray[(w.getTime() - begin.getTime())/EGCalendarFundamental.oneday][0].rank != 0) {
						cellClass += "cell-empty cell-empty-below";
						
						if (this.gcal_debug)
							ret += '<td class="' + cellClass + '" >n</td>';
						else
							ret += '<td class="' + cellClass + '" ></td>';						
					}
				
				  if (j != 0)
				  colcount++;
				 // do {

					//t = new Date(startTime.substring(0,4), startTime.substring(5,7) - 1, startTime.substring(8,10));  				  

					//} while (w.getTime() == t.getTime());
				}
//				else if (eventsArray != null  && eventsArray[(w.getTime() - begin.getTime())/EGCalendarFundamental.oneday] == null)
//				{

//				} 
		else
				{
					if (j == 0)
					{
						cellClass += "cell-empty cell-empty-below";
						
						if (this.gcal_debug)
							ret += '<td class="' + cellClass + '" >k</td>';
						else
							ret += '<td class="' + cellClass + '" ></td>';
					}
					else
					{
						cellClass += "cell-empty cell-last-row";
						
						if (this.gcal_debug)
							ret += '<td class="' + cellClass + '" rowspan="' + max_events_in_this_week + '" >m</td>';
						else
						  ret += '<td class="' + cellClass + '" rowspan="' + max_events_in_this_week + '" ></td>';
						
					}
				}

			//	if (j == 6)
						//ret += '<tr class="grid-row">';
															
				w = new Date(w.getTime() +  EGCalendarFundamental.oneday);
				count++;				
			}
											
			ret += this.getWeekRow(eventsArray, i, w, today, 1, max_events_in_this_week-1, colcount);	
			//ret += getWeekRow(eventsArray, i, w, today, 2, colcount);	
			
		} else if (d.getDay() == 0)
		{
				w = d;
		}
		
		d = new Date(d.getTime() +  EGCalendarFundamental.oneday);
	}
	
	ret +=  '</table>';
	

	if (false)
	{
	var appendix = "<br>";
	var apd = begin;
	for (var i=0; i<testary.length; i++)
	{
		x = testary[i];
		apdd = new Date(apd.getTime() + i*EGCalendarFundamental.oneday);
		appendix += apdd.getDate();
		if (x != null)
		{
			appendix +="=";
			for (var j=0; j<x.length; j++)
			{
				 appendix += x[j].title.$t + "(" + x[j].rank +")" + " , ";
			}
		}
		appendix +="<br>";
	} 	
	ret += appendix;
	}
	

	if (document.getElementById("title-tab"))
		document.getElementById("title-tab").innerHTML = "<b>" +  this.dateFormat(EGCalendarFundamental.localeData[this.gcal_locale].MonthFormatString, target) + "</b>";
	
	return ret;				
}

EGCalendarFundamental.prototype.gcalendar = function(targetFrame, events) {
	var prefix = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"><html>';
	
	var doozer_css = 'http://nsquare.net/gcal.css'; // apache redirect to current css 	
	var embed_css = 'http://nsquare.net/gcalembed.css'; // apache redirect to current css 
	
	if (this.gcal_css_id != null)
	{
		'http://www.google.com/calendar/' + this.gcal_css_id + 'doozercompiled.css';
		'http://www.google.com/calendar/embed/' + this.gcal_css_id + 'embedcompiled.css';
	}
	
	var header = '<head><title></title>\n'
	    + '<link href="' + doozer_css + '" type="text/css" rel="stylesheet">\n'		
			+ '<link href="' + embed_css + '" type="text/css" rel="stylesheet">\n'
			+ '\<script src="egcal.js" type="text/javascript" charset="utf-8"><\/script>\n'
			+ '<style>body{padding:0;margin:.1em .1em .1em;font-size:10pt} #nav td{padding-top:.1em; padding-bottom:4px; margin:0; border:none}#footer #poweredby-link{position:relative;top:-45px;left:-12px;float:right;clear:right}'
			+ '#footer #poweredby-link img{filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="http://www.google.com/calendar/images/ext/poweredby.png",sizingMethod="scale")}'
			+ '#footer #poweredby-link>img{filter:none;background:url(http://www.google.com/calendar/images/ext/poweredby.png) no-repeat center}'
			+ '.month-table .item-continued .t0{background-image:url(http://www.google.com/calendar/images/icon_moreleft.gif);}'
			+ '.month-table .item-continues .t0{background-image:url(http://www.google.com/calendar/images/icon_moreright.gif);}'
			+ '</style>'
			+ '</head>\n';
	var body = '<body style="background-color: transparent" class="view-month chrome-navigation">';

	var today = new Date();
	
	var feedRoutine = "function refreshFeeds(t) {\n  iframe_fundamental.gcal_count = 0; iframe_fundamental.gcal_events = new Array(0);\n";

	
	for (var i=0; i<this.gcal_feedkeys.length; i++)
	{
		feedRoutine += ' iframe_fundamental.addFeed("' + this.gcal_feedkeys[i] + '", "' + this.gcal_colortable[this.gcal_feedkeys[i]] + '", t); \n';	
	}
	
	feedRoutine += " }";

	var script = "\n<script type=\"text/javascript\">\n"
					+ 'var target = new Date(); '
					+ 'var year = target.getFullYear(); '
					+ 'var month = target.getMonth(); \n'
					+ 'var iframe_fundamental = null; \n'
//					+ 'var feedurl = "' + feedurl + '"; \n'
					+ feedRoutine
					+ 'function myCallback() { \n'
					+ '}\n'										
					+ 'function refreshTable(myjson) { '
					+ ' iframe_fundamental.gcal_count++; \n'
					+ ' if (iframe_fundamental.gcal_count== ' + this.gcal_feedkeys.length +') document.getElementById("view-container").innerHTML = iframe_fundamental.getMonthTable(target, year, month, myjson); \n'
					+ '}\n'
					+ 'function gotoToday() { target = new Date(); year = target.getFullYear(); month = target.getMonth(); target = new Date(target.getFullYear(), target.getMonth(), target.getDate()); \n'
					+ ' if (!iframe_fundamental) iframe_fundamental = new EGCalendarFundamental("iframe_fundamental",'+ this.gcal_locale + ');\n'					
					+ ' iframe_fundamental.gcal_onload = refreshTable; \n'
					+ ' refreshFeeds(target); \n'
          +	'}\n'
					+ 'function backward() { month--; target = new Date(year, month, 1); '
					+ ' if (!iframe_fundamental) iframe_fundamental = new EGCalendarFundamental("iframe_fundamental",'+ this.gcal_locale + ');\n'					
					+ ' iframe_fundamental.gcal_onload = refreshTable; \n'
					+ ' refreshFeeds(target); \n'
					+	'}\n'
					+ 'function foreward() { month++; target = new Date(year, month, 1); '
					+ ' if (!iframe_fundamental) iframe_fundamental = new EGCalendarFundamental("iframe_fundamental",'+ this.gcal_locale + ');\n'					
					+ ' iframe_fundamental.gcal_onload = refreshTable; \n'					
					+ ' refreshFeeds(target); \n'
					+	'}\n'          
					+ "<\/script>\n";	
	
	var nav = //'<H2>' + today + '</H2>' +
					'<table id="nav"><tr><td class="nav-buttons"><a href="#" onclick="backward(); return false;"><img width="29" alt="" src="http://www.google.com/calendar/images/btn_prev.gif" class="nav-button" height="17"></a><a href="#" onclick="foreward(); return false;"><img width="29" alt="" src="http://www.google.com/calendar/images/btn_next.gif" class="nav-button" height="17"></a>'
					+ '<button id="nav-today" onclick="gotoToday()">' + EGCalendarFundamental.localeData[this.gcal_locale].Today + '</button>'
					+ '</td>'
					+ '<td id="title-tab" class="nav-tab"></td>'
					+ '<td id="month-tab" class="nav-tab"><div class="t1 tbg"></div><div class="t2 tbg"></div><a href="#" class="tab-link tbg">' + EGCalendarFundamental.localeData[this.gcal_locale].Month + '</a></td>'
					//+ '<td id="agenda-tab" class="nav-tab"><div class="t1 tbg"></div><div class="t2 tbg"></div><a href="#" class="tab-link t0 tbg"> 待辦事項 </a></td>'
					+ '</tr></table>'
					+ '<div class="view-cap t1"></div><div class="view-cap t2"></div>'
					+ '<div class="view-container-border"><div id="view-container" class="view-container">'
					+ '\n<script> document.getElementById("title-tab").innerHTML = "<b>' + this.dateFormat(EGCalendarFundamental.localeData[this.gcal_locale].MonthFormatString, today) +'</b>";\n</script>';
				  //+ '\n<script> document.getElementById("title-tab").innerHTML = "<b>2007年" + (month+1) + "月</b>";\n</script>';

	var suffix = '</div></div><div class="view-cap t2"></div><div class="view-cap t1"></div><div id="footer">'
					+ '<span id="timezone">' + EGCalendarFundamental.localeData[this.gcal_locale].Timezone + this.gcal_timezone.getTimezone() + '</span>'
					//+ '<div id="subscribe-link">由 Google 日曆提供:<a href="http://www.google.com/calendar/render?cid=' + "" + '" target="_blank">使用</a></div><a href="http://www.google.com/calendar/render" target="_blank" id="poweredby-link" title="Google 日曆"><img src="http://www.google.com/calendar/images/blank.gif" alt=" Google 日曆技術提供 "></a></div>';
					//+ '<div id="subscribe-link">由 Google 日曆提供</div><a href="http://www.google.com/calendar/render" target="_blank" id="poweredby-link" title="Google 日曆"><img src="http://www.google.com/calendar/images/blank.gif" alt=" Google 日曆技術提供 " style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'http://www.google.com/calendar/images/ext/poweredby.png\',sizingMethod=\'cale\')"></a></div>';
					+ '<div id="subscribe-link">' + EGCalendarFundamental.localeData[this.gcal_locale].PoweredBy +'<a href="http://www.google.com/calendar/render?cid=' + "" + '" target="_blank">' + EGCalendarFundamental.localeData[this.gcal_locale].Subscribe +  '</a></div><a href="http://www.google.com/calendar/render" target="_blank" id="poweredby-link" title="Google 日曆"><img src="http://www.google.com/calendar/images/blank.gif" alt=" Google 日曆技術提供 "></a></div>';
	 				+ '</body></html>';
	
	var content = prefix + header + body + script + nav + this.getMonthTable(today, today.getFullYear(), today.getMonth(), events) + suffix;
	
	var message_div = '<div id="message_div">'+EGCalendarFundamental.msg+'</div>';
	//content+=message_div;
	
	//var content = prefix + header + body + nav + month_table + suffix;
 	
//    var targetName = "icalendar";
   	//var targetFrame = document.getElementById(targetName);
   	
        var doc = targetFrame.contentDocument;
        if (doc == undefined || doc == null)
            doc = targetFrame.contentWindow.document;
        doc.open();
        doc.write(content);
        doc.close();
}



EGCalendarFundamental.prototype.refreshList = function(events)
{
		this.gcal_count++;
	
		if (this.gcal_count == this.gcalfeeds.length)
		this.gcalendar(targetFrame, events);
}
	
function EGCalendar(name, targetFrame, gcalfeeds, fundamental)
{	   
	if (fundamental)
		this.fundamental = fundamental
	else 
		this.fundamental = new EGCalendarFundamental(name + ".fundamental");
	
	var target = new Date();
	var id = "";
	var color = "#528a00";
	this.fundamental.gcal_count = 0;
	this.fundamental.gcalfeeds = gcalfeeds;

	this.fundamental.gcal_onload = this.fundamental.refreshList;	
	
	target = new Date(target.getFullYear(), target.getMonth(), target.getDate());

	for (var i=0; i<gcalfeeds.length; i++)
	{
		id = gcalfeeds[i].id;
		if (gcalfeeds[i].color) color = gcalfeeds[i].color;
		this.fundamental.addFeed(id, color, target);
	}	
}