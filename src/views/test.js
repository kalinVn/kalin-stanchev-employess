import App from '../app/App.js';
import AppProperties from '../app/base/AppProperties.js';
let appProperties = new AppProperties();
var app = new App(appProperties);
let path = '../../../workspace/db/projects.txt'
let res = app.load(path);
res.then(() => app.renderProjectProcess('cmd'));


