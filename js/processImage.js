"use strict";

function pictureResponse(path) {

    var imagePath = path;
    //console.log("Image Path: "+ imagePath);

    var body1 = '<!doctype html>' +
        '<html>' +
        '<head>' +
        '<title>Success!</title>' +
        '<meta charset="UTF-8">' +
        '<meta name="viewport" content="initial-scale=1.0">' +
        '<link rel="stylesheet" type="text/css" href="/css">' +
        '<script type="text/javascript">' +
        'var count = 10;' +
        'var redirect = "/";' +
        'function countDown(){' +
        'var timer = document.getElementById("timer");' +
        'if(count > 0){ count--;' +
        'timer.innerHTML = "Returning to the homepage in "+count+" seconds.";' +
        'setTimeout("countDown()", 1000);' +
        '}else{window.location.href = redirect;}}</script>' +
        '</head>' +
        '<body>' +
        '<header></header>' +
        '<main style="width:50%; margin:auto">' +
        '<div  class="maindiv" style="width:25% margin:auto text-align:center">' +
        '<table style="white-space:nowrap">' +
        '<tr><td><img src="'+ imagePath +'">';

    var body2 = '</img></td></tr></table>' +
        '</div>' +
        '<div id="redirect">' +
        '<table>' +
        '<tr>' +
        '<td style="text-align:center"><span id="timer"><script type="text/javascript">countDown();</script></span></td></tr>' +
        '</table>' +
        '</div>' +
        '</main>' +
        '</body>' +
        '<footer></footer>' +
        '</html>';

    var fullbody = (body1.toString()).concat(body2.toString());
    //console.log(fullbody);
    return fullbody;
};

exports.pictureResponse = pictureResponse;