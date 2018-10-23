const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

//Register Render
router.get('/register', async (req, res, next) => {
  res.render('auth/register.ejs', {
  	loggedIn: req.session.loggedIn,
    message: req.session.message,
    username: req.session.username

  });
});

//Register Post
router.post('/register', async (req, res, next) => {
  try {
    const desiredUsername = req.body.username;
    // make sure no other people have this username
    const user = await User.find({
      username: desiredUsername
    })
    console.log(user);
    if(user.length > 0) {
      req.session.message = "Username already taken!"
      res.redirect('/auth/register')
    }

    else {
      const createdUser = await User.create({
        username: desiredUsername,
        password: req.body.password
      })
      res.redirect('/')
    }

  } catch(err) {
    next(err)
  }

})

//Login Render
// router.get('/login', async (req, res, next) => {
//   res.render('/', {
//     message: req.session.message,
//     username: req.session.username
//   });
// });
//Login Post
router.post('/login', async (req, res, next) => {
  try {
    const foundUser = await User.findOne({
      username: req.body.username
    })
    if(!foundUser) {
      req.session.message = "Invalid username or password"; 
    } else {
      if(foundUser.password == req.body.password) {
        req.session.loggedIn = true;
        req.session.username = req.body.username;
        res.redirect('/')
      } else {
         req.session.message = "Invalid username or password"; 
      }
    }
  } catch(err) {
    next(err)
  }
})

//Logout Get
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    res.redirect('/', {
    	username: req.session.username,
    	loggedIn: req.session.loggedIn
    });
  });
});






module.exports = router;