let express = require('express');
let app = express();
let bodyparser = require('body-parser');
let mongoose = require('mongoose');
let path = require('path');
let port = 8000;
let serv = require('http').Server(app);
var config = require('./config');

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());


//DB connection ==================
mongoose.connect(config.database)
.then(
    ()=> { console.log("Connection with database established")},
    err => { console.log('something went wrong..')}
);

// APP CONFIGURATION ==================
// use body parser so we can grab information from POST requests
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

// CORS requests
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

 
//routes ==================
app.get('/api/user', (req, res) => {
    res.json('in progress');
})

app.get('/api/events', (req, res) => {
    res.json('in progress');
})

app.get('/api/producers', (req, res) => {
    res.json('in progress');
})

//catchall route. 
app.get('*', (req, res) => {
    res.json("Listening successfully on this route.");
})


//port process
serv.listen(process.env.PORT || port );
console.log('Express is listening on : 8000');
