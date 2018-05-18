'use strict';

var path = require("path");
var fs = require("fs");
var qs = require("querystring");

function route(handle, pathname, request, response) {

    //console.log("ROUTER: request for " + pathname);
    
    var fixedPathname = pathname.replace("/","");

    if (typeof handle[pathname] === 'function') {


        handle[pathname](request, response, pathname);

    } else if (fs.existsSync(fixedPathname)) {

        handle["/reqFile"](request, response, pathname);

    } else {
        console.log("Could not process request for " + pathname );

        handle["/reqError"](request, response, pathname);
   
    }
}
// export route function
exports.route = route;