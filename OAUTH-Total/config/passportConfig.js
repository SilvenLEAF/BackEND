const User = require('../models/User');

const chalk = require('chalk');
// -------------------------------------
const passport = require('passport');
const oauthKeys = require('./oauthKeys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const AmazonStrategy = require('passport-amazon').Strategy;
// const FacebookStrategy = require('passport-facebook').Strategy;
// const InstagramStrategy = require('passport-instagram').Strategy;
// const GithubStrategy = require('passport-github').Strategy;
// const SpotifyStrategy = require('passport-spotify').Strategy;
// const TwitchStrategy = require('passport-twitch.js').Strategy;


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
  clientID: oauthKeys.GOOGLE.clientID,
  clientSecret: oauthKeys.GOOGLE.clientSecret,
  callbackURL: '/auth/google/callback'
},
  (accessToken, refreshToken, profile, cb)=>{   

  User.create({ name: profile.displayName, password: 'ffffff', email: profile.emails[0].value }, (err, user)=>{
    return cb(err, user)
  })  

}))

