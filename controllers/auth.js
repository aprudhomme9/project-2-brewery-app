const express = require('express');
const router = express.Router();
const User = require('../models/users');

//Login Render
//We were going to use our main index page, yes? But I think we may need a login page anyway, in case a user who is not logged in clicks "profile". It should take them to a login page. 
router.get('/login', async (req, res) => {
	
});

//Register Post route. This could be the login page as well.
router.post('/register', async (req, res) => {
	
});

//Login Post
router.post('/login', async (req, res) => {
	
});

//Logout Get
router.get('/logout', async (req, res) => {
	
});

	module.exports = router;