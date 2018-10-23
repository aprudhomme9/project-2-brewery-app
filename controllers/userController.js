const express = require('express');
const router = express.Router();

const Beer = require('../models/beer');
const Brewery = require('../models/brewery');
const User = require('../models/user');

//GET - INDEX

//GET - NEW

//POST - CREATE

//GET = SHOW
router.get('/', async (req, res) => {
	const foundUser = await User.findOne({username: req.session.username});
	console.log(req.session.loggedIn);
	if(foundUser) {
		res.render('./user/profile.ejs', {
		user: foundUser
	})
	} else {
		res.redirect('../breweries');
	}
})

//GET - EDIT
router.get('/edit', async (req, res) => {
	const foundUser = await User.findOne({username: req.session.username});
	if(foundUser) {
		res.render('./user/edit.ejs', {
			user: foundUser
		})
	}
})
//PUT - UPDATE

//DELETE - DESTROY



module.exports = router;