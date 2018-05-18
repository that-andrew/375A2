'use strict';

var http = require('http'); //import http module
var url = require("url"); // import url core modules
var requestHandlers = require("./requestHandlers");



function startServer(route, handle) {


    function onRequest(request, response) {

        var pathname = url.parse(request.url).pathname;
        console.log(request.method + " REQUEST FOR: " + pathname);
        route(handle, pathname, request, response);
    }
    
    http.createServer(onRequest).listen(41658);
    console.log('SERVER: Server running on port: 41658');
    console.log('SERVER: Process ID:', process.pid);
    console.log("SERVER: Server has started.");

};
exports.startServer = startServer;