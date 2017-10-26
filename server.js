// require express and path
var express = require("express");
// create the express app
var app = express();
var path = require("path");


// require bodyParser since we need to handle post data for adding a user
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// static content 
app.use(express.static(path.join(__dirname, "./client/dist")));


// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');
// store the function in a variable
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app)
// tell the express app to listen on port 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
})
