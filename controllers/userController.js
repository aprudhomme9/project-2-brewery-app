const express = require('express');
const router = express.Router();
const User = require('../models/user');

const Beer = require('../models/beer');
const Brewery = require('../models/brewery');


//GET - INDEX



// Brewery Check in
/***************************
POST ROUTE THAT ALLOWS USER TO ADD BREWERY TO THEIR PROFILE
BREWERY IS PUSHED INTO USER'S BREWERIES ARRAY AND SAVED
REDIRECT TO USER PROFILE
****************************/
router.post('/', async (req, res) => {
	try {
		if (req.session.loggedIn) {
			const foundBrewery = await Brewery.findById(req.body._id);
			const foundUser = await User.findOne({username: req.session.username});
			console.log(req.session.loggedIn);
			foundUser.breweries.push(foundBrewery);
			console.log(req.session.loggedIn);
			await foundUser.save();
		
			res.redirect('/user');
		} else {
			res.redirect('/breweries');
		}
		
		
		
		
	} catch (err) {
		res.send(err)
	}
	// get user
	

})
//GET --> SHOW
/****************
GET ROUTE TO USER PROFILE PAGE
*****************/
router.get('/', async (req, res) => {
	try {
		const foundUser = await User.findOne({username: req.session.username});
		console.log(req.session.loggedIn);
		console.log(req.session.username);
		console.log(foundUser);
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

//GET --> EDIT
/****************
GET ROUTE TO EDIT PAGE FOR USER PROFILE
****************/
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