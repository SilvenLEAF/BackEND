const express = require('express');

//setting up express app
const app = express();

//listening for requests
app.listen(3000, ()=>{
    console.log('Now listening for requests from the port 3000');
});