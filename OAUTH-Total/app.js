/* -------------------------------------
.            side tools/my tools
------------------------------------- */
const chalk = require('chalk');
const keys = require('./keys')
let user = {}



const express = require('express');
const passport = require('passport');

// const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;


/* -------------------------------------
.         Serialize Deserialize
------------------------------------- */
passport.serializeUser((user, cb)=>{
  cb(null, user);
})

passport.deserializeUser((user, cb)=>{
  cb(null, user);
})

/* -------------------------------------
.            Google Strategy
------------------------------------- */
passport.use( new GoogleStrategy({
  clientID: keys.GOOGLE.clientID,
  clientSecret: keys.GOOGLE.clientSecret,
  callbackURL: '/auth/google/callback'
},
  (accessToken, refreshToken, profile, cb)=>{
    console.log(chalk.blue(JSON.stringify(profile)));

    user = { ...profile };
    return cb(null, profile)
  }))




  const app = express();
  app.use(passport.initialize());





/* -------------------------------------
.                 routes
------------------------------------- */
app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile']
}) )
app.get('/auth/google/callback',
  passport.authenticate('google'),
  (req, res)=>{
    res.redirect('/profile');
  }
)
app.get('/profile', (req, res)=>{
  res.json(`Hi. This is your profile`);
})


// -------------------------------LISTEN
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
})