'use strict';
var koa = require('koa');
var app = koa();
var route = require('koa-route');
var bodyParser = require('koa-bodyparser');
app.use(bodyParser());
var nodemailer = require('nodemailer');
var controller = require('./controllers/controller')

const port = '8080';

app.use(route.post('/mail',function* mail () {
	console.log('request');
		var req = this.request.body;
		var header = this.request.header;
		if ( controller.dataVerify(req) ) {
	/* debug */ console.log(req);


		var sended = controller.sendMail(req);
		this.body = 'test'; 
		} else {
			this.body = 'error body';
		}
	}));

app.listen(port);
console.log(port);