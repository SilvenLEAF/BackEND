require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');

const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');



/* ----------------------------------------------
.                 configuration
---------------------------------------------- */
mongoose.connect(process.env.MONGODB_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}, (err)=>{
  if(err) throw err;
  console.log(`Connected to MongoDB`);
})


// passport configuration
require('./config/passport');



/* ----------------------------------------------
.               set up express app
---------------------------------------------- */
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.set('view engine', 'ejs');



/* ----------------------------------------------
.              required for passport
---------------------------------------------- */
app.use(session({ secret: `iamthenextdragonemperor`}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session



/* ----------------------------------------------
.                       routes
---------------------------------------------- */
app.use(require('./app/routes.js')); // load our routes and pass in our app and fully configured passport




// ---------------------------------------LISTEN
const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
})