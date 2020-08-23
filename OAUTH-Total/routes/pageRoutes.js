const passport = require('passport');
const router = require('express').Router();




/* ----------------------------------------
.               PAGE ROUTES
---------------------------------------- */

router.get('/', (req, res)=>{
  res.json(`Hi. This is HOMEPAGE`);
})

router.get('/profile', (req, res)=>{
  let msg = req.user || `This is your PROFILE PAGE`
  res.json(msg);
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