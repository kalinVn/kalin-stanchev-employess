import Project from '../../app/units/Project.js';
import Employee from '../../app/units/Employee.js';
class AppProperties {


	constructor() {
		this._projects = {};
		this._projectsProcess = [];
	}

	set(data){
		let emplId, projectId, dateFrom, dateTo;
		data.forEach( (val, key) => {
			emplId = val[0];
			projectId = val[1];
			dateFrom = val[2];
			dateTo = val[3];
			let employee = new Employee(emplId, dateFrom, dateTo);
			if (!this._projects[projectId]){
				let project = new Project(projectId, dateFrom, dateTo);
				this._projects[projectId] = project;
				project.addEmployee(employee);
			} 
			else {
				this._projects[projectId].addEmployee(employee);
			}
		});
	}

	projetsPairs() {
		Object.keys(this._projects).forEach( (project_id, key) => {
			this._projects[project_id].employeePairs();
		});
	}

	setProjectsProcess() {
		Object.keys(this._projects).forEach( (project_id, key) => {
			let projectProcess = this._projects[project_id].setProjectProcess();
			Object.keys(projectProcess).forEach( (project, process) => {
				this._projectsProcess.push(projectProcess[process]);
			});
		});
		this._projectProcessSorted = this._sortProjectProcess(this._projectsProcess);
		return this._projectProcessSorted;
	}

	_sortProjectProcess(obj) {
    	var arr = [];
	    for (var prop in obj) {
	        if (obj.hasOwnProperty(prop)) {
	            arr.push({
	                'key': prop,
	                'process': obj[prop]
	            });
	        }
	    }
	    arr.sort(function(a, b) {
	    	return b.process.time - a.process.time; 
	    });
	    return arr;
	}

}

export default  AppProperties;