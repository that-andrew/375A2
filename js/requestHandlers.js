"use strict";

//Node Modules
var path = require("path");
var http = require('http'); //import http module
var http = require('https'); //import http module
var url = require("url"); // import url core modules
var qs = require('querystring');
var util = require('util');
var fs = require("fs"); //import filesystem module
var exec = require("child_process").exec; //import child process module
var formidable = require("formidable"); //import formidable module
var Readable = require('stream').Readable;

//local JavaScript Files
var ps = require('./processStudent'); //import processStudent.js
var pi = require('./processImage'); //import processImage.js
var sd = require('./readStudentData'); //import selectDegree.js


function reqFavicon(request, response) {
    //console.log("REQUEST HANDLER: 'favicon' was called.");
    response.writeHead(200, {"Content-Type": "image/png"});
    fs.createReadStream('favicon.ico').pipe(response);
}

function reqCss(request, response) {
    //console.log("REQUEST HANDLER: 'CSS' was called.");
    var css = fs.createReadStream('css/main.css');
    css.pipe(response);

}

function reqHome(request, response) {
    //console.log("REQUEST HANDLER: 'Home' was called.");
    response.writeHead(200, {'Content-Type':'text/html'});
    var homePage = fs.createReadStream('index.html');
    homePage.pipe(response);
}

function reqAdd(request, response) {
    //console.log("REQUEST HANDLER: 'Add' was called.");
    response.writeHead(200, {'Content-Type':'text/html'});
    var add = fs.createReadStream('html/addStudent.html');
    add.pipe(response);
    
    request.on('data', function(data){
        response.writeHead(200, {'Content-Type':'text/html'});
        response.write(ps.outputStudent(data));
        response.end();
               });
    
}

function reqUp(request, response) {
    //console.log("REQUEST HANDLER: 'up' was called.");

    var form = new formidable.IncomingForm();
    form.uploadDir = "./tmp/"; //Set to local tmp 
    
    console.log("...about to parse...");
    
    form.parse(request,function(err,fields,files){
        //console.log(files);
        //console.log("files.filetoupload.name: " + files.filetoupload.name);
        var oldPath = "" + files.filetoupload.path;
        var oldFileName = files.filetoupload.name;
        var newFileName = oldFileName.replace(/ /g,"");
        var newPath = "images/" + newFileName;

        // console.log("Old Path: " + oldPath);
        // console.log("Old File Name: " + oldFileName);
        // console.log("New File Name: "+ newFileName);
        // console.log("New Path: " + newPath);
        
       fs.rename(files.filetoupload.path, newPath, function(err){
            if (err) {
                console.log("Renaming Error Occured.\n"  + err);
                fs.unlink(files.filetoupload.path);
                fs.rename(files.filetoupload.path, newPath);
            }
        });

   
    var body = pi.pictureResponse(newPath);
    //Response to the client
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(body);
    response.end();
    });

}

function reqUpForm(request, response) {
    console.log("REQUEST HANDLER: 'UpForm' was called.");
    response.writeHead(200, {'Content-Type':'text/html'});
    var up = fs.createReadStream('html/uploadImage.html');
    up.pipe(response);
}

function reqDegree(request, response) {
    console.log("REQUEST HANDLER: 'Degree' was called.");
    //Response to the client

    var s = new Readable();
    s.push(sd.readStudentData(), 'utf-8');
    s.push(null);
    response.writeHead(200, {'Content-Type':'text/html'});
    s.pipe(response);

}

function reqList(request, response, pathname, data){
    console.log("REQUEST HANDLER: 'List' was called.");
    var degree = "";
    if (request.method == 'POST') {
        var body = '';

        request.on('data', function (data) {
            body += data;
        });
        request.on('end', function () {
            degree = (((body.toString()).replace(/degree=/g, "")));
            //console.log(degree);
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(sd.enrollmentList(degree));
            response.end();
        });
    }
}

function reqFile (request, response, pathname) {
    console.log("REQUEST HANDLER: 'File' was called.");

    var fixedPathname = pathname.replace("/","");

    if (fs.existsSync(fixedPathname)) {

    console.log("Looking for file: "+fixedPathname);
        response.writeHead(200, {"Content-Type":"image/png"});
        //fs.createReadStream(pathname).pipe(response);
        var file = fs.createReadStream(fixedPathname);
        file.pipe(response);
    
    } else {
        response.writeHead(200, {"Content-Type":"image/png"});
        //fs.createReadStream(pathname).pipe(response);
        var noImage = fs.createReadStream("images/imageerror.png");
        noImage.pipe(response);
    }



}

function reqError (request, response){
    console.log("REQUEST HANDLER: 'Error' was called.");
    var error = fs.createReadStream('html/error.html');
    error.pipe(response);
}
exports.reqFavicon = reqFavicon;
exports.reqCss = reqCss;
exports.reqHome = reqHome;
exports.reqAdd = reqAdd;
exports.reqUp = reqUp;
exports.reqUpForm = reqUpForm;
exports.reqDegree = reqDegree;
exports.reqList = reqList;
exports.reqFile = reqFile;
exports.reqError = reqError;