MURDOCH UNIVERSITY

ICT375 Advanced Web Programming

Semester 1, 2018

# Individual Assignment Two

**Due Date:** Monday 28th May 2018 (Week 14), at 11.55 am.

**All Students:** This is an individual assignment and it should be completed independently. The assignment will be marked out of 100, but will constitute 30% of your overall unit mark. You should keep a copy of your work. Your submission must include a completed assignment cover sheet. An electronic copy of the assignment cover sheet is available at the unit LMS site.

_Please note that one of the objectives of this unit is to develop skills in self-learning and research. The assignment question deliberately includes components that require independent research on your part in order to produce an appropriate solution._

**Assignment Submission:** A working version of the assignment must exist on ceto.murdoch.edu.au under your home directory. Also, you must submit an electronic copy via LMS. Both must be available/submitted by the due date and time. N.B. the version on ceto must be identical to the electronic copy submitted on LMS. Your LMS submission must be a single zipped file (including software components and the report), and should be submitted with the filename using the following naming convention: _unit code-assignment number-your last name-the initial of your first name-your student number_. e.g. ICT375-A2-Smith-J-87654321.zip for student John Smith with student number 87654321. Note: **zip** compression only (no WinRar or 7z, etc.).

**Late Submission Penalty:** Late submissions will attract a penalty of 10% per day (including weekends), of the mark achieved for the assignment. Submissions more than 10 days late will not be assessed.

**Extensions:** Where circumstances make it impossible to submit the assignment by the due date and time, you must contact the Unit Coordinator (via email) immediately, **and definitely prior to the submission date and time**. Extensions **will not** be granted if your request is made **after the due date and time**, and the above late penalty will be applied if your submission is late.

An extension will only granted for legitimate (verifiable) reasons. Outside work commitments, heavy study load, other assignments being due at the same time, my computer blew up, I lost my usb, etc., do not constitute legitimate reasons. All students have multiple assignments due around the same time; you need to effectively manage your time. Also, you should _always_ keep backup copies of your work in case something goes wrong with your computer, etc.

The Unit Coordinator will decide if an extension should apply, and if so, the duration of the extension. If an extension is granted a copy of the unit coordinator's response email **must** be included at the beginning of your submitted report, otherwise the late penalty may be applied.

**Coding Standard and File Organization:** The website must meet the following conditions:

1. You must validate all HTML code using TotalValidator (XHTML 5.2), and present evidence that your code meets this standard (evidence can be provided by inclusion of the XHTML5 logo on all pages, as was done in ICT286 last year).

2. All presentation/formatting instructions must come from an **external** style sheet (i.e. .css file). Do **not** attempt to specify formatting instructions within HTML tags. You must present evidence that your CSS has been validated using W3C online validation site (CSS3 standard; include logo on all pages for evidence as in part 1).

3. JavaScript (both client- and server-side) must be in an **external** file (ie. .js file), and must be modular in design (i.e. using appropriately decomposed functions).

4. Your website must be hosted on ceto. The files of your website, including all scripts and the external style sheet(s), should be placed under the directory assignment2/ in your home directory. Be sure to include the node_modules directory for any installed Node.js packages that your solution relies on.

5. Html files must be stored under the sub-directory html/ (with the possible exception of index.html, which can be placed under the directory assignment2/). JavaScript and Node.js files should be placed under the sub-directory js/ (with the possible exception of index.js), stylesheets under the sub-directory css/, image files (if used) under the sub-directory images/. These sub-directories must be located directly under the application directory assignment2/. There should also be a data/ directory for storing any data files that your solution relies on.

6. All links to the files in this website must use **relative** paths (be sure to check these before submission).

7. Your web pages, scripts, and style sheets must be hand coded using a text editor. For this assignment, we **will not accept** code that is automatically generated using software tools such as Adobe DreamWeaver, Microsoft Office, etc.

8. Assignments developed with development environments such as bootstrap or express **will not accepted**. You should develop your website manually. You may utilize libraries for the presentation of the output table and graph.

![](file:///C:/Users/andrew/AppData/Local/Temp/msohtmlclip1/01/clip_image002.gif)

**Overview:**

The assignment consists of a software application development component and a report. The software component requires you to develop a client and server architecture based application. The server is to be implemented using Node.js. You should re-use (modify and expand as needed) the server you developed for assignment one. The client will be a Web browser. All communication between the client and server will be via the HTTP protocol.

The client will provide certain options for the user to choose from, and must initiate connection with the server. The server will listen on a port number and must process the client requests, based on the resources requested. It must then respond to the client with the requested resources. If the server is unable to respond with the requested resource, a relevant error message must be sent in response. The client will then display the response (the requested resource or an error message).

Initial connection to the server will be via a web page (i.e. index.html or index.js). This means that client-side and server-side code will exist on the machine where the server is located (for the assignment this **must** be ceto.murdoch.edu.au; you may develop the application on your own computer, but it must be thoroughly tested and run successfully on ceto.murdoch.edu.au before submission). You **must** use the port number given to you in lab 1 or via email; **DO NOT** use port 80 or any other port number.

You will need to demonstrate use of XML technologies (XML, DTD, XML Schema, XPATH, XSLT, etc.) and JSON technologies (JSON and JSON Schema) in order to meet the assignment requirements as outlined in the **Functionality** section below. All tasks outlined in that section are required to be attempted. Marks will be allocated as outlined in that section, and according to the quality of your solution in achieving the required functionality. We are looking for an application that demonstrates a good understanding of the XML/JSON technologies. You may need to research/investigate appropriate technologies beyond that covered in the lecture notes, to meet a high standard in your application.

A report must document the design details of your solution and testing strategy, as outlined in the **Report** section below, and should be submitted in **PDF** format. It should be comprehensive and clear, as it constitutes the documentation requirement for the assignment.

**Functionality (70 marks):**

The completion of this section will require a good understanding of material covered in the lectures and tutorials for Topics 1-8, and will require further research/investigation to be undertaken on your own behalf.

You are required to develop a client and server program to deal with client requests and server-side functionality, where all communication between client and server will be via the HTTP protocol.

**Client tasks:**

The client-side program will constitute a minority of the marks allocated for the Functionality section (15 of the 70 marks).

The client will be a Web browser, which by default uses HTTP protocol. The client-side program will use HTML to allow initial connection with the server via a web page, typically named index.html. This web page should constitute a form, from which the user may choose the options outlined below. The output requires tabular and graphical presentation, so it is strongly suggested that AJAX be used for output. Though the form is quite simple (with selection, output, and submit/reset buttons), it should demonstrate a reasonable effort for presentation. Effort should be made to make **any web pages** presentable and with some consistency. That is, CSS should be used, and page components should **not** be just positioned in the top left hand corner of the browser.

The following tasks are core components that your client-side software is to achieve:

1. The client program will provide a web page to allow a user to access information regarding weather measurements (refer **Server tasks** below). It should use relevant information gathering techniques (such as check boxes, radio buttons, drop-down lists, etc.) to allow a user to access information about particular months of a nominated years (the user selects). As the designer, you can determine what types of information gathering techniques that are presented to the user. However, those chosen should be designed for the user’s convenience.

2. The user must be able to select the weather measurement (wind speed, solar radiation, or both), the time frame (between months for a nominated year), and output format (table, graph, or both) for results. The selection of the time frame may be restricted to a 1 year period, and the months should determine the time frame. 3. The client will display the results (returned by the server) in a tabular format (columns for _all months_ of the nominated year and rows for the sensor readings) and/or a line graph (x axis for the _specified months only_ of the nominated year and y axis for the sensor readings). For the table, if particular months have no data, leave those cells empty. Effort for good presentation of this output is expected. Some aspects of tabular and graphical display using jQuery have been covered in the lecture material (Topic 8). However, you will need to research their usage further to be able to achieve the display for this assignment.

4\. The output display must appear in correct proportion on desktop computers, laptops, and mobile devices (such as tablets and smart phones); refer Server tasks point 7.

**Note:** after each selection (by the user) and appropriate response (from the server), the index.html page should be re-loaded to offer the user another choice. In other words, the user should **NOT** need to press the browser reload (or refresh) arrow after viewing the response to their request. This presents an ideal opportunity to use AJAX for single page application. However, if you choose not to use AJAX, you **MUST** implement a navigation bar (this method of navigation was covered in ICT286 last year).

**Server tasks:**

The server application program will constitute the majority of the marks allocated for the Functionality section (55 of the 70 marks).

THE SERVER CODE MUST BE MODULAR IN DESIGN.

A DESIGN THAT IS NOT MODULAR WILL ATTRACT **VERY FEW** MARKS.

It is therefore strongly recommended that you re-use (modify and expand as needed) your server program from assignment 1, to provide the following functionality for a well designed and structured server application:

• A script to start and control the application.

• A script to start a server (listening on your assigned port number).

• A script to route (or re-direct) the different client requests to appropriate handlers.

• Request handler script/s to handle, process, and respond to, the different client requests.

The following tasks are the core components that your server application should achieve in response to the client requests listed in the **Client tasks** section:

1. The server will provide the processing functionality to serve client requests and download data files (containing weather measurements) at runtime. After retrieving the user nominated file and processing to extract the requested information, the server will return results to the client (which will be displayed in the way the user has requested). _N.B. processing of downloaded data files must be performed server-side; client-side processing of downloaded data will result in a heavy loss of marks (**-25 marks**); refer **Important Notes** point 2_.

2. The Murdoch Weather Station website holds files of weather data. You can visit the website to view the original data files at [http://wwwmet.murdoch.edu.au/downloads](http://wwwmet.murdoch.edu.au/downloads)[.](http://wwwmet.murdoch.edu.au/downloads) A legend for the sensor codes (i.e. column headings) in those files is provided in the file dataLegend.xls, available on LMS under assignment 2.

Data required for this assignment has been extracted from those files and stored in XML and JSON formatted documents, which are available at the following website: [sphinx.murdoch.edu.au/~20010930/ICT375/](http://sphinx.murdoch.edu.au/~20010930/ICT375/)

The required XML and JSON documents cover the years 2007 to 2016:

• 2007.xml, 2008.xml, and 2009.xml

• 2010.json, 2011.json, 2012.json, 2013.json, 2014.json, 2015.json, and 2016.json

Your server is required to access the given website to retrieve the appropriate file on demand, according to the user nominate year. Your solution will need to be able to deal with both formats to retrieve the required data, based on the user requested sensor information.

N.B. for your convenience (and to prevent excessive and unnecessary downloads) during the development phase of your assignment, all data files have been made available on ceto.murdoch.edu.au in a zip file under the following directory: /student/share/ICT375/ass2/weatherData.zip. You should use these files only to develop and test your application. However, the final application (for submission) **MUST** be able to download and process any individual data file (from the above website), selected by the user at runtime.

3. The final server must be able to interface with the website, and download an XML and/or JSON file that contains data covering the user selected year. It should then process that file and retrieve the data for the user selected time frame (between two nominated months). The data required will include wind speed and/or solar radiation, for the given time frame. To achieve this, the server code needs to traverse an XML document tree, or JSON object, to retrieve the relevant data.

4. As the server needs to retrieve data for the user nominated time frame and sensor measurement/s, it may need to store that data in appropriate data structures. Selection of the appropriate data structure/s will thus be important to subsequent processing.

5. The processing will involve calculating the average wind speed and/or the total solar radiation (per month) for the time frame nominated by the user. N.B. the sensor readings will need conversion to different units of measure to obtain the correct results; refer to **Appendix** points 1, 2 and 3 at the end of this document.

6. As a result of processing, the server needs to return (to the client) the requested information for the time frame nominated by the user.

7. The output display must appear in correct proportion on desktop computers, laptops, and mobile devices (such as tablets and smart phones). **N.B. XML** requires **XSLT** for this facility; so if you intend to process data using XML technologies, this will need to be done server-side. You must test this functionality before submission.

**Important Notes:**

1. The examples in the lecture material covering the topic of XML parsing and processing mostly used the Perl programming language (though some examples were provided using Node.js). Perl was designed for document processing, and has mature library support for XML processing; the libraries provide very good documentation, and there are many code snippets with good explanations available online.

The reason for covering Perl, and including the examples, was to demonstrate the XML classes and methods available for parsing and processing XML documents. These classes and methods comply with the W3C standard, and are available with other languages (with essentially the same names and functionality). As such, you are **not** to use Perl in this assignment. As the server is developed using Node.js, you should use appropriate classes and methods available in Node.js libraries.

As discussed in the lecture material, Node.js is a newer technology that is very good for developing servers that can be targeted to specific usage. However, Node.js documentation is not as 'mature' in regard to XML parsing and processing as other languages (though this is rapidly changing). There are Node.js libraries available which provide some documentation; a few code snippets exist but explanation of these may be limited (we have covered some examples in the lecture material). Thus you will need to research widely to achieve the required functionality for parsing and processing XML documents. This may be time consuming, so allow yourself enough time to research and learn. For XML technologies usage in the assignment, you should use a DOM library (xmldom is suggested).

The lecture material also covered JSON and JSON Schema. As JSON is extended from JavaScript, it is ideally suited for transferring data between client and server using the Node.js development environment. There are libraries that provide functionality for storing, parsing and processing data.

N.B. we also covered in the lecture material (though not extensively), Node.js libraries that parse XML documents into JSON format. When parsing XML documents, you may find it simpler to adopt this approach if you wish.

Whether you parse XML documents directly using xmldom OR parse them into JSON using Node.js libraries, you will need to continue developing your Node.js server, and **must** follow the instruction from assignment 1, to keep your application modular in design.

2. For your solution, you are at liberty to use any of the _server-side technologies_ we have been covered in this unit (ICT375 Advanced Web Programming). You are also at liberty to use any _client-side technologies_ covered in this unit and the prerequisite unit (ICT286 Web and Mobile Computing). As an example, you are encouraged to utilize the client-side technologies such as jQuery, AJAX, etc. In fact, not using jQuery and AJAX will make your client-side cumbersome and more time consuming to develop.

However as previously mentioned, there is a major restriction here: the parsing and processing of the XML AND JSON documents **MUST** be done on the server-side using XML OR JSON technologies. In particular, various jQuery, JSON and JavaScript technologies provide client-side solutions for parsing and processing JSON documents. If you adopt such an approach, it will result in a **heavy** loss of marks. Referring to the marking guide (on LMS), there are **25 marks**  allocated for this functionality; parsing and processing on the **client-side** will result in loss of **all** of those marks.

3. When you zip up and submit your application, please include the node_modules directory and its sub-directories (for any packages you installed). This will make it unnecessary for the marker to install external modules. N.B. keep in mind the restrictions stated in the section **Coding Standard and File Organization** points 7 and 8.

4. You are advised to regularly check the QandA.txt on LMS. Any questions related to the assignment from students will be answered and posted into this document. The QandA.txt will post most recent additions at the top of the document. Therefore, older posts will be further down in the document. So please read the QandA.txt on a regular basis, to take advantage of this facility. Any questions received that have been already addressed in the QandA.txt, will be answered by reference to an earlier post.

**Report (30 marks):**

The front page of the report document should include the unit code and unit name, the assignment number, your name and student number. The body of the report document requires inclusion of the sections listed below. The sections must be either numbered or given a descriptive section heading (in the order listed below).

1. An introduction providing an overview of the assignment, including any assumptions being made in your solution (assumptions will always be made, but **cannot contradict** the assignment requirements).

2. A full description of each of the XML AND JSON technologies that your solution employs. Also as part of this section, provide an overview of how the chosen _XML and/or JSON technologies work together to solve the parsing and processing_ of an XML and/or JSON document, and provide a realistic justification for each of your choices.

3. A detailed description of the overall design of your solution. That is, how all of the _application components work together to provide the required functionality_. This description should include both the client-side and server-side parts of the solution. Also as part of this section, include **and reference in your description** appropriate diagrams to help clarify your design description (for example, structural organization, data flow, state transition, etc...). Also provide a realistic justification for each of your design choices.

4. A description of the data structures that your solution utilizes. Remember, an array is a data structure, as is an object. You **must** provide an explanation of how the data structure/s were utilized, and a justification for why the data structure/s were utilized the way they were.

5. A thorough testing regime / strategy AND evidence of such testing. You should test the application as a whole, by demonstrating that each client request is successfully completed (or an appropriate error response, sent by the server, is displayed in the browser). You should also test each URL individually (listed in index.js and catered to by the request handlers). This can be done by specifying a URL in the browser (or using 'curl'; this utility is installed on ceto.murdoch.edu.au). Obviously, testing via a browser will require submission of screen shots as evidence of testing. You should also test for errors in the input URL, with the browser (or curl) displaying the appropriate error response sent by the server.

6. A conclusion to summarize what you have achieved. You should also indicate (as a sub-section) what you were **unable** to achieve in relation to the required

Functionality. You can also highlight any points that you consider demonstrate good design, clever pieces of code, etc.

In your report be precise with your terminology, particularly with the distinction between modules and functions, the different data structures, parameters and arguments, objects and other code components, and the XML OR JSON technologies.

**Appendix:**

Historical data for wind speed and solar radiation readings are available (along with other sensor information) at [http://wwwmet.murdoch.edu.au/](http://wwwmet.murdoch.edu.au/)[.](http://wwwmet.murdoch.edu.au/) Weather data in the format we need is available for a number of years (starting from 2007) at sphinx.murdoch.edu.au/~20010930/ICT375/. Data is logged at intervals of 10 minutes.

Each file contains a years worth of sensor readings.

Conversions:

1. Wind speed data is recorded in the data files as metres per second (m/s). As the value recorded is the average wind speed over a 10-minute period, you need to convert this to kilometers per hour (km/h). As an example, if you travel 2 metres in 1 second, then this would be equivalent to 7.2 kilometers in an hour ((2x60x60)/1000).

2. Solar radiation data is recorded in the data files as Watts per square metre (W/m2). This is the amount of solar energy being measured per second over an area of one square metre. In other words, the amount of power that is being detected over an area of one square metre. As the value recorded is the average W/m2 over a 10-minute period, you need to convert this to kWh/m2. This is done by converting the power in Watts (W) over a 10-minute period to Watts-hours. 10 minutes is 1/6 of an hour. So if the power is 120W for 10 minutes, this would equate to 120W x 1/6 hour = 20Wh. To convert Wh to kWh, divide this value by 1000. Thus you have 0.02 kWh. So 120 W/m2 for 10 minutes is 0.02 kWh/m2.

3. You will notice that the sensor data has solar radiation recorded at night. So to simplify the problem (and make the total more realistic), only solar radiation readings >= 100 W/m2 are to be considered in your application. Obviously, this would be taken into consideration before any conversion or totaling.


