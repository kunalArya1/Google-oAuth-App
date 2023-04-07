var express = require('express');
var router = express.Router();
var passport = require('passport');
const user =require('./users.js')
var GoogleStrategy = require('passport-google-oidc');

require('dotenv').config()
console.log(require('dotenv').config());
passport.use(new GoogleStrategy({
  clientID: process.env['GOOGLE_CLIENT_ID'],
  clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
  callbackURL: '/oauth2/redirect/google',
  scope: [ 'email' ,'profile' ]
}, function verify(issuer, profile, cb) {
  
}));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login');
});


router.get('/login/federated/google', passport.authenticate('google'));

router.get('/oauth2/redirect/google', passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/login'
}));






module.exports = router;
