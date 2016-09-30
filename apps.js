/**
 * Created by ano on 9/30/16.
 */

var server = require('./server');
var router = require('./router');
var handler = require('./handler');

var handle = {};
handle["/"] = handler.home;
handle["/home"] = handler.home;
handle["/review"] = handler.review;

server.startServer(router.route, handle);