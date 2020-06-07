const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//setting up express app
const app = express();

//connect to database
mongoose.connect('mongodb://localhost/TechFoundersDB', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});

//--------------------middlewares

//body-parser middleware
app.use(bodyParser.json());

//routes handling middleware
app.use('/bladers', require('./routes/api'));

//error handling middleware
app.use((err, req, res, next)=>{
    console.log(err);
    res.status(500).send({warning: "There is an ERROR!!!", error: err._message});
});

//-------------------------------

//listening for requests
app.listen(3000, ()=>{
    console.log('Now listening for requests from the port 3000');
});