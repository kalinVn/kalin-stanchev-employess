export default class Employee {


	constructor(id, dateFrom, dateTo) {
		this._id = id;
		this._projects = [];
		this._dateFrom = dateFrom;
		this._dateTo = dateTo;
		
	}

	addProject(project){
		this._projects.push(project);
	}


	getDateFrom(){
		return this._dateFrom;
	}
	getDateTo(){
		return this._dateTo;
	}
	getId(){
		return this._id;
	}
}