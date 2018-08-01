// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
const cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// timestamp API endpoint... 
app.get("/api/timestamp/:date_string?", function (req, res) {
  let unix, utc, output;
  if (!req.params.date_string) {
    utc = new Date();
    unix = Date.parse(utc);
  }
  else {
    unix = Number(req.params.date_string) ? Number(req.params.date_string) : Date.parse(req.params.date_string);
    utc = new Date(unix);
  }
  //if valid unix date & valid utc date
  if(utc != "Invalid Date") {
    output = {"unix":unix.toString(),"utc":utc.toDateString()};
  }
  else{
    output = {"error" : "Invalid Date"};
  }
  res.send(output);
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});