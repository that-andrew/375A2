"use strict";

var fs = require("fs");
var qs = require('querystring');



function outputStudent(data) {

    var newData = data;
    var data1 = processStudentIn(newData);
    console.log("PROCESS STUDENT: Formatting student information...");
    processStudentToFile(data1);
    console.log("PROCESS STUDENT: Saving new student to studentData.csv ...");
    var data2 = processStudentLabels(data1);
    console.log("PROCESS STUDENT: Updating data labels...");
    //var data3 = processStudentTidy(data2);
    //console.log("PROCESS STUDENT: Organising data...");
    var processResponse = createHtml(data2);
    console.log("PROCESS STUDENT: Generating HTML for response...");

    return processResponse;
}

function processStudentIn(PSIdata) {

    //Uncomment to test process offline
    //var testdata = "studentID=32537652&firstName=Andrtew&lName=Graham&age=30&dgree=Computers";
    //var d1 = testdata.toString();
    //Convert from Chunk to String
    var d1 = PSIdata.toString();
    //console.log(d1);
    //Remove everything that isn't needed from the string
    var s1 = (((((d1.split("&")).toString()).split("=").toString()).replace(/,/g, " ").split(" ")));
    //console.log(s1);

    return s1;
}

function processStudentToFile(PSTFdata) {

    //Formatting information for storage in the CSV file... 
    //console.log("Formatting information for storage in the CSV file...");
    //remove all the html form labels
    var f1 = PSTFdata;
    //console.log(f1);
    var i;
    for (i = 0; i < f1.length; i++) {
        f1.splice([i], 1);
    }
    var studentCsv = f1.toString(); //toString() comes with free commas
    //console.log("Ready for csv:",studentCsv);
    //fs.open("studentData.csv", 'a+', (err, fd) => {}); //open the file
    //console.log("PROCESS STUDENT: studentData.csv OPENED");
    fs.appendFile("data/studentData.csv", studentCsv + "\n", function(err) { //write the file
        if (err) throw err;
    });
    //console.log("PROCESS STUDENT: HAS ADDED A STUDENT TO studentData.csv");


}

function processStudentLabels(PSLdata) {

    var s = PSLdata;

    //Replace html form labels with pretty labels
    //console.log("Replacing html form labels with pretty labels");

    s.splice(0, 0, "Student Number: ");
    s.splice(2, 0, "Name: ");
    //Combining the Frist and Last Name Strings
    s[3] = ((s.slice(3, 5)).toString()).replace(/,/, " ");
    s.splice(4, 1);
    s.splice(4, 0, "Age: ");
    s.splice(6, 0, "Gender: ");
    s.splice(8, 0, "Degree: ");
    console.log(s);

    return s;
}

function processStudentTidy(PSTdata) {

    var s = PSTdata;

    //Storing the labels and data together...
    var a, b, c, d, e, o;
    b = 2; //extent of range index number 
    c = []; //array
    d = 0; //beginning of range index number
    e = s.length; //length of array
    //o = {}; //object          /Use of object for testing only
    for (a = 0; a < e; a++) {
        //grab the two matching elements, make them a single string and store them
        c[a] = ((s.slice(d, b)).toString()).replace(/,/, "");
        //o[a] = ((s.slice(d, b)).toString()).replace(/,/, "");     //Use of object for testing only
        b += 2; //must always be '2' higher than 'd'
        d += 2; //move through the array 2 elements at a time
        e -= 1; //ensure the new array is only as long as it has to be
    }
    //As an object...
    //console.log(o);
    //And as an array...
    //console.log(c)
    return c;
}

function createHtml(CHdata) {
    var sData = CHdata;

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
        '<header>A new student has been saved.</header>' +
        '<main>' +
        '<div>' +
        '<table>' +
        '<tr>';

    var body2 = '</table>' +
        '</div>' +
        '<div id="redirect">' +
        '<table>' +
        '<tr>' +
        '<td><span id="timer"><script type="text/javascript">countDown();</script></span></td></tr>' +
        '</table>' +
        '</div>' +
        '</main>' +
        '</body>' +
        '<footer></footer>' +
        '</html>';

    var a = '<td style=\"text-align: right\">';
    var b = '</td>';
    var c = '</tr><tr>';
    var e = '<td style=\"text-align: left\">';
    var i, z, x;
    var l = sData.length;


    for (i = 0; i < (l); i++) {

        x = sData[i];
        z = ((a.concat(x)).concat(b));
        //console.log(z);
        sData[i] = z;

        x = sData[i + 1]; //only the second column needs </tr><tr>
        z = ((e.concat(x)).concat(b).concat(c)); //only the right hand columns are left aligned
        //console.log(z);
        sData[i + 1] = z;
        i++;
    }
    var fullbody = (body1.toString()).concat((sData.join("")).toString()).concat(body2.toString());
    //console.log(fullbody);
    return fullbody;
};


exports.outputStudent = outputStudent;
exports.processStudentIn = processStudentIn;