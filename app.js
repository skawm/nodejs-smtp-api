var koa = require('koa');
var route = require('koa-route');
var bodyParser = require('koa-bodyparser');


var app = koa();
const port = '8080';

app.use(bodyParser());

app.use(route.get('/mail', function* mail(){
	// ? here or not ? work _/
	this.body = 'test';
}));

app.listen(port);
console.log(port);