/* -------------------------------------
.            side tools/my tools
------------------------------------- */
const chalk = require('chalk');
const keys = require('./keys')
let user = {}



const express = require('express');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;


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
.            Facebook Strategy
------------------------------------- */
passport.use( new FacebookStrategy({
  clientID: keys.FACEBOOK.clientID,
  clientSecret: keys.FACEBOOK.clientSecret,
  callbackURL: '/auth/facebook/callback'
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
app.get('/auth/facebook', passport.authenticate('facebook') )
app.get('/auth/facebook/callback',
  passport.authenticate('facebook'),
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