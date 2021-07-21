const router = require('express').Router();
const withAuth = require('../utils/auth');


router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.render('home');
    
  }
  res.redirect('/login');
});

  router.get('/home', (req, res) => {
    if (!req.session.loggedIn) {
      res.redirect('/login');
      return;
    }
  
    res.render('home');
  });



  router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/home');
      return;
    }
  
    res.render('signup');
  });

  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('home');
      return;
    }
   res.render('login');
  });

   
  
  module.exports = router;