
import Loader from '../app/lib/Loader.js';
import Project from '../app/Project.js';
import Employee from '../app/Employee.js';
import Renderer from '../app/lib/Renderer.js';
export default class App {

	constructor(appProperties) {
		this._loader = new Loader();
		this.appProperties = appProperties;
		this.renderer = new Renderer();
	}

	async load(path, str) {
		let data;
		let dateobj = new Date('04-01-2020'); 
		
		
		if(str){
			data = this._loader.dataToArr(str);
		}
		else {
			data  = await this._loader.load(path);
		}
		this.appProperties.set(data);
		this.appProperties.projetsPairs();
		this.projects = this.appProperties.setProjectsProcess();
	}

	renderProjectProcess(renderEngine){
		this.renderer.renderProjectProcess(renderEngine, this.projects);
	}

	getProjects(){
		return this.projects;
	}
	

}