
export default class DateCalculator {

	

	difrBetweenTwoDates(dateFrom, dateTo){
		let dateFromObj = new Date(dateFrom);
		var monthDateFrom = dateFromObj.getMonth() + 1;
		var dayDateFrom = dateFromObj.getDate() ;
		var yearDateFrom = dateFromObj.getFullYear();
		dateFromObj = yearDateFrom + "-" + monthDateFrom + "-" + dayDateFrom;
		let date1 = new Date(dateFromObj);
		let dateObjTo = new Date(dateTo);
		var monthDateTo = dateObjTo.getMonth() + 1;
		var dayDateTo = dateObjTo.getDate() ;
		var yearDateTo = dateObjTo.getFullYear();
		dateObjTo = yearDateTo + "-" + monthDateTo + "-" + dayDateTo;
		let date2 = new Date(dateObjTo);
		let diffr = Math.ceil((date2.getTime() - date1.getTime())/ (1000 * 3600 * 24));
		return diffr;
	}
	
	formatDate(date) {
    	var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
	    if (month.length < 2) 
	        month = '0' + month;
	    if (day.length < 2) 
	        day = '0' + day;

	    return [year, month, day].join('-');
	}


}