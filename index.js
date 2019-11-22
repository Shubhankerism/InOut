const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const api = require('./routes/api');
const app = express();

console.log("Body parser called");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);


const port = process.env.PORT || '3000';
app.set('port', port);

// const server = http.createServer(app);
app.listen(port, function () {
    console.log(new Date());
    console.log(port);
});
module.exports = app;