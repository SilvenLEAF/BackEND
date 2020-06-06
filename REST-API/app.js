const express = require('express');
const bodyParser = require('body-parser');

//setting up express app
const app = express();

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