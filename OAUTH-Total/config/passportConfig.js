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
passport.serializeUser((user, done)=>{
  done(null, user.id);  
})

passport.deserializeUser((id, done)=>{
  User.findById(id).then((user)=>{
    done(null, user);
  })
  // done(null, id);
})










/* -------------------------------------
.            Google Strategy
------------------------------------- */
passport.use( new GoogleStrategy({
  clientID: oauthKeys.GOOGLE.clientID,
  clientSecret: oauthKeys.GOOGLE.clientSecret,
  callbackURL: '/auth/google/callback'
},
  (accessToken, refreshToken, profile, done)=>{   

    User.findOne({ email: profile.emails[0].value }).then((existingUser)=>{
      if(existingUser){
        // already have the User
        console.log(`User already exists.`)
        return done(null, existingUser)
      } else{
        // if not, create a user
        User.create({ name: profile.displayName, password: 'ffffff', email: profile.emails[0].value })
        .then((newUser)=>{
          console.log(`New User created`)
          return done(null, newUser)
        })
      }
    })

}))

