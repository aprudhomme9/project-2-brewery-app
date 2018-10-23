const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

//Register Render
router.get('/register', async (req, res, next) => {
  res.render('auth/register.ejs', {
    message: req.session.message
  });
});

//Register Post


//Login Render
router.get('/login', async (req, res, next) => {
  res.render('/', {
    message: req.session.message
  });
});
//Login Post


//Logout Get
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    res.redirect('/');
  });
});






module.exports = router;