var express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
var port = 3100;
var cors = require('cors');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

const routes = require('./routes/index');


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', routes);

app.listen(port, function(){
  console.log('Server is running on Port: ',port);
});

module.exports = app;