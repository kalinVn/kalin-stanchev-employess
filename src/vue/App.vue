<template>
	
	<div class = "app">
		<div class="container">
			<div class="row">
				<div class="col-sm-12 col-md-12 col-lg-12 ">
					<h2>{{title}}</h2>
				</div>
			</div>

			<div class="row">
				<div class="col-sm-12 col-md-12 col-lg-6 col-upload-file">
					<input type='file' @change="previewFiles"  />
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12 col-md-12 col-lg-12">
				<div class="row project-grid">
	                <div class="col-sm-12 col-md-3 col-lg-3">
	                  <p>Employee ID #1</p>
	                </div>
	                <div class="col-sm-12 col-md-3 col-lg-3">
	                  <p>Employee ID #2</p>
	                </div>
	                <div class="col-sm-12 col-md-3 col-lg-3">
	                  <p>Project ID</p>
	                </div>
	               <div class="col-sm-12 col-md-3 col-lg-3">
	                  <p>Days worked</p>
	                </div>
              		
					</div>
					<div class="row project-grid" v-for = " project in projects"  >
					<div class="col-sm-12 col-md-3 col-lg-3">
						<p> {{project.process.employeers[0].getId()}}</p>
					</div>
					<div class="col-sm-12 col-md-3 col-lg-3">
						<p> {{project.process.employeers[1].getId()}}</p>
					</div>
					<div class="col-sm-12 col-md-3 col-lg-3">
						<p> {{project.process.project_id }}</p>
					</div>
					<div class="col-sm-12 col-md-3 col-lg-3">
						<p> {{project.process.time}}</p>
					</div>
					</div>
				
				</div>
			</div>
		</div>
  	</div>
  
  
</template>

<script> 

import App from '../app/App.js';
import AppProperties from '../app/base/AppProperties.js';

export default {

  components : {
	
	
  },

  data () {
     return {
		title : 'Assignment Team Longest Period 2020',
		app : new App(new AppProperties()),
		projects : []
    }
	
  },
  methods : {
  
		previewFiles(event) {
	        const file = event.target.files[0];
	      	const reader = new FileReader();
	      	 reader.onload =  async (e) => { 
		        const file = e.target.result; 
		        const lines = file.split(/\r\n|\n/); 
		        let value = lines.join('\n'); 
		        await this.app.load('', value);
		        
		        this.projects = await this.app.getProjects();
		        console.log(this.projects);
		    }; 
		    reader.onerror = (e) => alert(e.target.error.name); 
			reader.readAsText(file); 
		      
	   }
 }

}
</script>


