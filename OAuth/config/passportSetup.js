const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');




// passport setup
passport.use(
  new GoogleStrategy({
    // options for strategy
  }),
  (accessToken, refreshToken, profile, done)=>{
    // passport callback function
  }

)