'use strict';
// import our exported modules
var server = require("./js/server");
var router = require("./js/router");
var requestHandlers = require("./js/requestHandlers");
//create 'handle' object literal
var handle = {};
//using associative array notation
//each array key points to an appropriate request handler
handle["/"] = requestHandlers.reqHome;
handle["/favicon"] = requestHandlers.reqFavicon;
handle["/favicon.ico"] = requestHandlers.reqFavicon;
handle["/css"] = requestHandlers.reqCss;
handle["/add"] = requestHandlers.reqAdd;
handle["/degree"] = requestHandlers.reqDegree;
handle["/list"] = requestHandlers.reqList;
handle["/up"] = requestHandlers.reqUp;
handle["/upForm"] = requestHandlers.reqUpForm;
handle["/reqFile"] = requestHandlers.reqFile;
handle["/reqError"] = requestHandlers.reqError;

server.startServer(router.route, handle);