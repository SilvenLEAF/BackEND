/* -------------------------------------
.            side tools/my tools
------------------------------------- */
const chalk = require('chalk');
const keys = require('./keys')
let user = {}



const express = require('express');
const passport = require('passport');

// const FacebookStrategy = require('passport-facebook').Strategy;
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
const AmazonStrategy = require('passport-amazon').Strategy;


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
passport.use( new AmazonStrategy({
  clientID: keys.AMAZON.clientID,
  clientSecret: keys.AMAZON.clientSecret,
  callbackURL: '/auth/amazon/callback'
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
app.get('/auth/amazon', passport.authenticate('amazon', {
  scope: ['profile']
}) )
app.get('/auth/amazon/callback',
  passport.authenticate('amazon'),
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