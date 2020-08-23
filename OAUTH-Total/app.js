require('dotenv').config()

const express = require('express');
const passport = require('passport');





const app = express();
app.use(passport.initialize());

  
/* -------------------------------------
.                 config
------------------------------------- */
require('./config/mongoDBconfig');
require('./config/passportConfig');


/* -------------------------------------
.                 routes
------------------------------------- */
app.use(require('./routes/pageRoutes'))

// -------------------------------LISTEN
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
})