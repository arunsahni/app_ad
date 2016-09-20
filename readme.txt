Synopsis: 

The Login Module includes the functionality for sign-in. The user can sign-in using the social logins as well viz. Facebook, Twitter and Google+. The functionality for Forgot Password has also been incorporated and allow the user to recieve the email for the same.  

Dependecies:

Following dependencies are required to be installed using the command "npm install <dependency_name>":

1/ nodemailer
2/ querystring
3/ request
4/ jwt-simple
5/ moment
6/ mongoose
7/ mongoose-unique-validator
8/ satellizer
9/ ng-storage

Zip file Structure:

1/ app: the folder contains two folders viz. controllers and models which contain the code for the creating the RestApis and database schema respectively.

2/ app.js: this file include the code for calling the routes, in addition to the integration of Passport strategies viz. Basic and Local, which in turn are used for "basic authentication" and "Database user authentication" respectively.

3/ constants.js: this file include the constants parameters used in the application.

4/ db.js: the file is used to connect to mongo database using mongoose.

5/ public: the sub-folders included in this folder are for user interaction and the files/folders needs to be added 
the same way as placed in the zip file.

Additional Information:

Following javascript files to be included into your project "index.html" file

1/ <script src="javascripts/satellizer.min.js" type="text/javascript"></script>
2/ <script src="modules/authentication/controller.js" type="text/javascript"></script>
3/ <script src="modules/authentication/service.js" type="text/javascript"></script>
4/ <script src="javascripts/communication.js" type="text/javascript"></script>
5/ <script src="javascripts/app.js" type="text/javascript"></script>     
6/ <link href="stylesheets/AdminLTE.css" rel="stylesheet" type="text/css" />


Please note: all the above files are present in the respective folders.

Points to Remember:

1/ The facebook, twitter, google and gmailSMTP credentials used in the sample are the testing credentials. Kindly replace the same with your credentials.

2/ Kindly replace the database name and credentials in db.js as the ones used are for the demo purpose.



 