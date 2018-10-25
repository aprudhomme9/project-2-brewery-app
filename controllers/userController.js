const express = require('express');
const router = express.Router();
const User = require('../models/user');

const Beer = require('../models/beer');
const Brewery = require('../models/brewery');


//GET - INDEX



// check in brewery
router.post('/', async (req, res) => {
	try {
		const foundBrewery = await Brewery.findById(req.body._id);
		console.log(foundBrewery);
		const foundUser = await User.findOne({username: req.session.username});

		await foundUser.breweries.push(foundBrewery);

		await foundUser.save();
		res.redirect('/user');
	} catch (err) {
		res.send(err)
	}
	// get user
	

})
//GET = SHOW
router.get('/', async (req, res) => {
	try {
		const foundUser = await User.findOne({username: req.session.username});
		console.log(req.session.loggedIn);
		console.log(req.session.username);
		if(foundUser) {
			res.render('./user/profile.ejs', {
			user: foundUser,
			breweries: foundUser.breweries,
			beers: foundUser.beers,
			loggedIn: req.session.loggedIn,
			username: foundUser.username
		})
	} else {
		res.redirect('../breweries');
	}
	} catch (err) {
		res.send(err)
	}
	
})
//Add in beer
/************
BROKEN
************/


//GET - EDIT
// router.get('/edit', async (req, res) => {
// 	const foundUser = await User.findOne({username: req.session.username});
// 	if(foundUser) {
// 		res.render('./user/edit.ejs', {
// 			user: foundUser,
// 			loggedIn: req.session.loggedIn,
// 			username: req.session.username
// 		})
// 	}
// })
//PUT - UPDATE

//DELETE - DESTROY



module.exports = router;