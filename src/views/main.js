import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Routes from "../vue/controllers/routers";
import AppVue from '../vue/App.vue';
import  './static/css/bootstrap.css';
import  './static/css/style.css';


Vue.use(VueResource);
Vue.use(VueRouter);

console.log(AppVue);
const router = new VueRouter({
	base: '/', 
	routes : Routes ,
	mode: 'history',
});

new Vue({
  router  ,
  el: '#app',
  render: h => h(AppVue)
});