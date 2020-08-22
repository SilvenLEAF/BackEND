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
// const AmazonStrategy = require('passport-amazon').Strategy;
// const InstagramStrategy = require('passport-instagram').Strategy;
// const GithubStrategy = require('passport-github').Strategy;
const SpotifyStrategy = require('passport-spotify').Strategy;


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
.            Spotify Strategy
------------------------------------- */
passport.use( new SpotifyStrategy({
  clientID: keys.SPOTIFY.clientID,
  clientSecret: keys.SPOTIFY.clientSecret,
  callbackURL: '/auth/spotify/callback'
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
app.get('/auth/spotify', passport.authenticate('spotify', {
  scope: ['profile']
}) )
app.get('/auth/spotify/callback',
  passport.authenticate('spotify'),
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