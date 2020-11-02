import DateCalculator from '../../app/lib/DateCalculator.js';
export default class Project {


	constructor(id, dateFrom, dateTo) {
		this._employeers = [];
		this._id = id;
		this._dateFrom = dateFrom;
		this._dateTo = dateTo;
		this._teamPeriod = 0;
		this._employeerPairs = [];
		this.dateCalculator = new DateCalculator();
		this._projectProcess = {};
	}

	addEmployee(employee){
		this._employeers.push(employee);	
	}

	employeePairs() {
		Array.prototype.pairs = function (func) {
		    let pairs = [];
		    for (var i = 0; i < this.length - 1; i++) {
		        for (var j = i; j < this.length - 1; j++) {
		            func([this[i], this[j+1]]);
		        }
		    }
		}
		let list = this._employeers;
		this._employeers.pairs( pair => {
		    this._employeerPairs.push(pair);
		});
		
	}

	setProjectProcess() {
		let dateFrom, dateTo, currentDiffr;
		this._employeerPairs.forEach( (pairEmpl, key) => {
			let timeProject = 0,prevDiffr = 0;
			pairEmpl.forEach( (employee, ind) => {
				//console.log(employee._id);
				dateFrom = employee.getDateFrom();
				dateTo = employee.getDateTo();
				currentDiffr = this.dateCalculator.difrBetweenTwoDates(dateFrom, dateTo);
				if( currentDiffr <= prevDiffr){
					timeProject = currentDiffr
				}else {
					timeProject = prevDiffr;
				}
				prevDiffr = currentDiffr;
				
			});
			this._projectProcess[key] = {
				time : 2 * timeProject,
				employeers : pairEmpl,
				project_id : this._id
			}
		});
		return this._projectProcess;
	}

	getId(){
		return this._id;
	}

	getEmpoyeerPlairs(){
		return this._employeerPairs;
	}

}