var express = require('express');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', process.env.PORT || 5000);

app.use(express.static(path.join(__dirname, 'www')));

app.listen(process.env.PORT || 5000);