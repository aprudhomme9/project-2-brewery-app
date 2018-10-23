const express = require('express');
const router = express.Router();
const User = require('../models/user');

const Beer = require('../models/beer');
const Brewery = require('../models/brewery');


router.get('/', async (req, res) => {
	const foundUser = await User.findOne({username: req.session.username});

	res.render('./user/profile.ejs', {
		user: foundUser
	})
})







module.exports = router;