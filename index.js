const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const api = require('./routes/api');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set our api routes
app.use('/api', api);

const port = process.env.PORT || '8080';
app.set('port', port);

console.log("Server running on port " + port + ".");
app.listen(port, function () {
    console.log(new Date());
});

module.exports = app;