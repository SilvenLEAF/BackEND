const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');





// passport setup
passport.use(
  new GoogleStrategy({
    // options for strategy
    callbackURL: '/auth/google/redirect',
    clientID: '948666598374-tj740dlbnbt9dmtvi6k1lifi16ml13mj.apps.googleusercontent.com',
    clientSecret: '7kl5vertxRo6C8ezBT0YLqp-'
  },
  (accessToken, refreshToken, profile, done)=>{
    // passport callback function
    console.log(`Hi`)
  })

)