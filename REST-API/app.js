const express = require('express');

//setting up express app
const app = express();

//--------------------middlewares

//routes handling middlewares
app.use('/bladers', require('./routes/api'));

//-------------------------------

//listening for requests
app.listen(3000, ()=>{
    console.log('Now listening for requests from the port 3000');
});