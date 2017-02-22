//Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

function timeConvert(time){
	var givenTime = time.split(":");
	var hour = givenTime[0];
	var minutes = givenTime[1];
	var seconds = givenTime[2];
	var meridian = seconds.substring(2);
	var minSec = ":" + minutes + ":" + seconds.substring(0,2);
	var convertedTime;
	
	if(hour < 12) {
		if(meridian === "PM"){
			var convertedHour = 12 + parseInt(hour,10);
			converedTime = convertedHour + minSec;
			return converedTime;
		} else {
			converedTime = hour + minSec;
			return converedTime;
		} 
	} else if(parseInt(hour,10) === 12){
		if(meridian === "PM"){
			converedTime = 12 + minSec;
			return converedTime;
		} else {
			converedTime = "00" + minSec;
			return converedTime;
		}
	}
}

/* Example

timeConvert("07:05:45PM") should return "19:05:45"

*/
