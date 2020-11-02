
export default class Renderer {

	
	renderProjectProcess(rednderEngine, projects){

		switch(rednderEngine) {
		  case 'cmd':
		    projects.forEach( (project) => {
		    	console.log(
		    		"     Employee Employee ID #: " + project.process.employeers[0].getId() + 
		    		"     Employee Employee ID #: " + project.process.employeers[1].getId() +
		    		"     Project ID #: " + project.process.project_id +
		    		"     Days worked   : " + project.process.time 
	    		);
	    	});
		    break;
		  case 'vue':
		  	//var vue = require('vue');
		    break;
		 
		}
		
	}


}