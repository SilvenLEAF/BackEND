const express = require('express');
const bodyParser = require('body-parser');

//setting up express app
const app = express();

//--------------------middlewares

//body-parser middleware
app.use(bodyParser.json());

//routes handling middleware
app.use('/bladers', require('./routes/api'));

//-------------------------------

//listening for requests
app.listen(3000, ()=>{
    console.log('Now listening for requests from the port 3000');
});