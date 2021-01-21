const express = require('express');
const mongoose = require('mongoose');

//setting up express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//connect to database
mongoose.connect('mongodb://localhost/FoundersOfTechInfoDB', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});



/* --------------------
.      routes
-------------------- */
app.use('/bladers', require('./routes/api'));

//error handling middleware
app.use((err, req, res, next)=>{
    console.log(err);
    res.status(500).send({warning: "There is an ERROR!!!", error: err._message});
});

//-------------------------------



/* --------------------
.        Listen 
-------------------- */
const PORT = process.env.PORT || 5000;
app.listen(PORT , ()=>{
    console.log(´Now listening for requests from the port &{ PORT }´);
});
