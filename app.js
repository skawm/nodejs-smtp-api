'use strict';
const koa = require('koa');
const app = koa();
const route = require('koa-route');
const bodyParser = require('koa-bodyparser');
const nodemailer = require('nodemailer');
const controller = require('./controllers/controller')

const port = '51009';

app.use(bodyParser());

app.use(route.post('/mail',function* mail () {

	// debug console.log('request');
		let req = this.request.body;

		let header = this.request.header;

		if ( controller.tokenTest(header) ) {

			if ( controller.dataVerify(req) ) {

				// debug  console.log(req);
				let sended = controller.sendMail(req);
				this.body = 'sent'; 
			} else {

				this.body = 'error data';
			}
		} else {

		this.body = 'bad authorization';
		}

}));

app.listen(port);
console.log('running on port ' + port);