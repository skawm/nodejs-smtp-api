var koa = require('koa');
var route = require('koa-route');
var bodyParser = require('koa-bodyparser');


var app = koa();
app.use(bodyParser());