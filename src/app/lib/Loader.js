import DateCalculator from '../../app/lib/DateCalculator.js';
export default class Loader{

	constructor() {
		this.dateCalculator = new DateCalculator();
	}

	async load (path){
		try{
			var fs = require('fs');
			var filename = require.resolve(path);
	        let file = await fs.readFileSync(filename, 'utf8');
	        let data = this.dataToArr(file);
	        return data;
	        
        } catch (err) {
        	console.log(Error);
        }

	}

	dataToArr(data){
		data = data.replace(/^\s+|\s+$/g, '');
        let res = data.split('\n');
        let proj = [];
        let projects = {
        	empId : [],
        	projectId : [],
        	dateFrom : [],
        	dateTo : []

        };
        let dateNow = new Date();
        let empId, projectId, dateFrom, dateTo;
		res.forEach((lines, ind)=> {
			let line = lines.split(',');
			empId = line[0];
			projectId = line[1];
			dateFrom = line[2] == 'NULL'? this.dateCalculator.formatDate(dateNow) : line[2];
			dateTo = line[3] == 'NULL'? this.dateCalculator.formatDate(dateNow) : line[3];
			projects['empId'].push(empId);
			projects['projectId'].push(projectId);
			projects['dateFrom'].push(dateFrom);
			projects['dateTo'].push(dateTo);
			proj[ind] = [empId, projectId, dateFrom, dateTo];
		});
		
		return proj;

	}


	

}