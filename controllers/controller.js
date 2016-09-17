'use strict';
var nodemailer = require('nodemailer');

	function isset (variable) {
		// simple isset function (like in php)
		if ( typeof variable != 'undefined' ) return true;
		return false;
	}

module.exports.isset = function isset (variable) {
		// simple isset function (like in php)
		if ( typeof variable != 'undefined' ) return true;
		return false;
	}
module.exports.tokenTest = function tokenTest (header) {
	//test if verified token
		if ( isset(header) && isset(header.authorization) ) {
			if ( header.authorization == 'hehe' ) {
				return true;
			}
			return false
		} return false
	}

module.exports.dataVerify = function dataVerify (req) {

		//test if all the requested datas are here
		if ( isset(req.fromname) && isset(req.from) && isset(req.to) && isset(req.subject) && isset(req.message) ) {
			//validate email with a regex
			var regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			//if all was good, function return true, otherwise it return false
			if ( regexEmail.test(req.from) && regexEmail.test(req.to) ) {
				return true;
			} return false;
		} return false;
	}

module.exports.sendMail = function sendMail (req){
		// create reusable transporter object using the default SMTP transport
		var transporter = nodemailer.createTransport('smtps://hehe:pass@smtp.sendgrid.net');

		// setup e-mail data with unicode symbols
		var mailOptions = {
    		from: '"' + req.fromname + '" <' + req.from + '>', // sender address
    		to: req.to, // list of receivers separated with ", "
    		subject: req.subject, // Subject line
    		text: 'Please look this mail as HTML', // plaintext body
    		html: req.message // html body
		};

		// send mail with defined transport object
		transporter.sendMail(mailOptions, function(error, info){
    		if(error){
    		    return console.log(error);
    		}
    		var response = info.response;
    		console.log('Message sent: ' + info.response);
		});
		return "yes";
	};
