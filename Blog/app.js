const express = require('express');
const bodyParser = require('body-parser');

const app = express();


/* ...............................
.           middlewares
............................... */
//----------------body parser
app.use(bodyParser.json());

//--------------routes handling
app.use('/api', require('./routes/api-routes'));

//--------------errors handling
app.use((err, req, res, next)=>{
    console.log(err);
    res.status(500).send({alert: `There's an ERROR!!!`});
});




// ----------------LISTEN----------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})