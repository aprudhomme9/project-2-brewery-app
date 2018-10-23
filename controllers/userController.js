const express = require('express');
const router = express.Router();
const User = require('../models/user');

const Beer = require('../models/beer');
const Brewery = require('../models/brewery');


//GET - INDEX



// check in 
router.post('/', async (req, res) => {
	// get user
	const foundBrewery = await Brewery.findById(req.body._id);
	console.log(foundBrewery);
	const foundUser = await User.findOne({username: req.session.username});

	await foundUser.breweries.push(foundBrewery);

	await foundUser.save();
	res.redirect('/user');

})
//GET = SHOW
router.get('/', async (req, res) => {
	const foundUser = await User.findOne({username: req.session.username});
	console.log(req.session.loggedIn);
	if(foundUser) {
		res.render('./user/profile.ejs', {
		user: foundUser,
		breweries: foundUser.breweries
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