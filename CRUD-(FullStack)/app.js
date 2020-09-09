const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//--------client (JS + CSS) URL
app.use('/stylesURL', express.static('./client/stylesFOL'));
app.use('/scriptsURL', express.static('./client/scriptsFOL'));


/* ------------------------------
.            routes
------------------------------ */
//bodyparser
app.use(bodyParser.json());

//routes handling
app.use('/crud', require('./routes/crud-routes'));

//error handling
app.use((err, req, res, next)=>{
    console.error(err);
    res.status(500).send({warning: `There's an ERROR.`})
})


//------------listen-------------
const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`listening for requests from port ${PORT}`);
})
