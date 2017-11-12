var express = require('express');
const path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = 4200;
var cors = require('cors');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://beaconhack:cunyhack@ds259105.mlab.com:59105/project-beacon')
.then(() => { 
  console.log('Start');
})
.catch(err => {
    console.error('App starting error:', err.stack);
    process.exit(1);
});
require('./models/User');


const routes = require('./routes/index');



app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', routes);




app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

module.exports = app;