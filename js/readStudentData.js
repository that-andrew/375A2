"use strict";

var fs = require('fs');
var readline = require("readline");


var degrees = [];
var students = [];


function enrollmentList(data){

    var degree = data.toString();
    //console.log(degree);
    var enrollmentList = [];

    for (var i = 0, len = students.length; i < len; i++){
        var currentStudent = students[i];
        if (currentStudent.degree === degree){
            //console.log(currentStudent.toTable);
            enrollmentList.push(currentStudent.toTable);
        }
    }
    //console.log(enrollmentList);
    //console.log(enrollmentList.length);
    var studentCount = enrollmentList.length;

    var body1 = '<!doctype html>' +
    '<html>' +
    '<head>' +
    '<title>' + degree + ' Enrollment List</title>' +
    '<meta charset="UTF-8">' +
    '<meta name="viewport" content="initial-scale=1.0">' +
    '<link rel="stylesheet" type="text/css" href="/css">' +
    '</head>' +
    '<body>' +
    '<header>' + degree + ' Enrollment List</header>' +
    '<main>' +
    '<h2>There are currently ' + studentCount + ' students enrolled in the ' + degree + ' degree.</h2>' + 
    '<table id="results">' +
    '<tr>' +
    '<th>ID Number</th>' +
    '<th>First Name</th>' +
    '<th>Last Name</th>' +
    '<th>Age</th>' +
    '<th>Gender</th>' +
    '</tr>';

    var body2 = 
    
    '</table>' +
    '</main>' +
    '<footer><a href="/">Return Home</a></footer>' +
    '</body>' +
    '</html>';





    var fullbody = (body1.toString()).concat((enrollmentList.join("")).toString()).concat(body2.toString());

    return fullbody;
}



function readStudentData(){

    //FILE PATH FOR PRODUCTION
    //var file = "data/studentData.csv";
    
    //FILE PATH FOR TESTING (POPULATED WITH TEST DATA)
    var file = "data/TestStudentData.csv";
    
    //SET THE ENCODING FOR READING THE FILE
    var encoding  = "utf-8";
    //READ IN THE DATA FROM THE CSV FILE
    var data = fs.readFileSync(file, encoding);
        //console.log(data);    //CHECK DATA CONTENT

    //USE NEW LINE AND RETURN CHARACTERS TO SEPERATE EACH STUDENT
    var studentString = (data.split(',')).toString().split(/\r?\n/); 
        //console.log(studentString);       //CHECK CONTENT
    
    for (var i = 0, len = studentString.length; i < len; i++){
        var line = studentString[i].split(',');
        //console.log(line);
        var student = new Student(line[0],line[1],line[2],line[3],line[4],line[5]);
        //console.log(student.toString);
        students.push(student);
        var degree = student.degree;
        
        if(!degrees.includes(degree)){
            degrees.push(degree);
            //console.log("Found New Degree: "+degree);
        } 
    }

    return buildPage();
}

function buildPage(){


    var body1 = '<!doctype html>'+
        '<html>'+
        '<head>'+
        '<title>View Enrolment List</title>'+
        '<meta charset="UTF-8">'+
        '<meta name="viewport" content="initial-scale=1.0">'+
        '<link rel="stylesheet" type="text/css" href="/css">'+
        '</head>'+
        '<body>'+
        '<header>Please select a degree from the options below:</header>'+
        '<main>'+
        '<div>'+
        '<form id="selectDegree" method="POST" action="/list" target="_self">'+
        '<fieldset>'+
        '<select form="selectDegree" name="degree" required="true" autofocus>';

    var body2 = '</select>'+
        '</fieldset>'+
        '<button type="submit" value="Submit"><span>Submit</span></button>'+
        '</form>'+
        '</div>'+
        '</main>'+
        '<footer><a href="/">Return Home</a></footer>'+
        '</body>'+
        '</html>';

                        
    var a = '<option>';
    //console.log("a: " + a);
    var b = '</option>';
    //console.log("b: " + b);

    var htmlDegrees = [];

        for (var i = 0, len = degrees.length; i < len; i++){
            var c = degrees[i];
            //console.log(""+c);
            //var htmldegree = ((a.concat(c)).concat(b));
            var htmldegree = '<option value="'+ c +'">'+ c + '</option>';
            //console.log(""+htmldegreeName);
            htmlDegrees.push(htmldegree);
        }

        //console.log("htmlDegrees: "+htmlDegrees);
        var fullbody = (body1.toString()).concat((htmlDegrees.join("")).toString()).concat(body2.toString());
        //console.log(fullbody);

        return fullbody;
}

function Student(id, firstName, lastName, age, gender, degree) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.degree = degree;
    this.toString = id + ", " + firstName + ", " + lastName + ", " + age + ", " + gender + ", " + degree;
    this.toTable = 
    "<tr><td>" + id + "</td>" +
    "<td>" + firstName + "</td>" +
    "<td>" + lastName + "</td>" + 
    "<td>" + age + "</td>" +
    "<td>" + gender + "</td></tr>";
    
}


exports.readStudentData = readStudentData;
exports.enrollmentList = enrollmentList;