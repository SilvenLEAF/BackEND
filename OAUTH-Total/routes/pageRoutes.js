const passport = require('passport');
const router = require('express').Router();


// auth check middleware
function isLoggedIn(req, res, next){
  if(!req.user){
    res.redirect('/login')
  } else{
    next()
  }
}

/* ----------------------------------------
.               PAGE ROUTES
---------------------------------------- */

router.get('/', isLoggedIn, (req, res)=>{
  res.render('Home');
})

router.get('/profile', isLoggedIn, (req, res)=>{  
  res.render('Profile')
})

router.get('/login', (req, res)=>{
  res.render('Login');
})






/* ----------------------------------------
.               OAUTH ROUTES
---------------------------------------- */


router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}) )
router.get('/auth/google/callback',
  passport.authenticate('google'),
  (req, res)=>{
    res.redirect('/profile');
  }
)


router.get('/auth/logout', (req, res)=>{
  req.logOut();
  res.redirect('/')
})


module.exports = router