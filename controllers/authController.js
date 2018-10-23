const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

//Register Render

router.get('/register', async (req, res) => {
  res.render('./auth/register.ejs')
})

router.post('/register', async (req, res) => {
  try {
    const password = req.body.password;

    const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    const userEntry = {};
    userEntry.username = req.body.username;
    userEntry.password = passwordHash;

    const user = await User.create(userEntry);
    await user.save();

    req.session.username = req.body.username;
    req.session.loggedIn = true;

    res.redirect('../breweries');

    console.log(req.session.loggedIn);
    console.log(user);
  } catch (err) {
    res.send(err)
  }
  
})

router.post('/login', async (req, res) => {
  try {
    const foundUser = await User.findOne({username: req.body.username});
    console.log(foundUser);

    if(foundUser) {
      if(bcrypt.compareSync(req.body.password, foundUser.password)) {
        req.session.loggedIn = true;

        res.redirect('../breweries', {
          username: foundUser.username,
          password: foundUser.password
        })
      } else {
        req.session.message = 'Username or Password Already Exists';
        res.redirect('/auth/register');
      }
    } else {
      req.session.message = "Username does not exist";
      res.redirect('/auth/register');
    }
  } catch (err) {
    res.send(err)
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