require('dotenv').config()

const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');





const app = express();
app.use(cookieSession({
  maxAge: 24*60*60*1000,
  keys: ['iamthenextdragonemperor']
}));

app.use(passport.initialize());
app.use(passport.session());

  
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