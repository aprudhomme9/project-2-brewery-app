const express = require('express');
const router = express.Router();
const User = require('../models/user');

const Beer = require('../models/beer');
const Brewery = require('../models/brewery');


//GET - INDEX



// check in brewery to the user
router.post('/brewery', async (req, res) => {
	// get user
	const foundBrewery = await Brewery.findById(req.body._id);
	const foundUser = await User.findOne({username: req.session.username});
	await foundUser.breweries.push(foundBrewery);
	await foundUser.save();
	res.redirect('/user');

})

//add a beer to the user
router.post('/newbeer/:breweryID', async (req, res, next) => {
    try {
        const foundUser = await User.findOne({username: req.session.username})
        // console.log(foundUser + "found user FOUND -------------");
        const foundBrewery = await Brewery.findById(req.params.breweryID);
        // console.log(foundBrewery + "found brewery");
        const makeBeer = await Beer.create(req.body);
        // console.log(makeBeer + "make beer");
        foundUser.breweries.push(makeBeer);
        await foundUser.save();
        // console.log(foundUser + "found user post route");
        res.render('/user',{
            username: req.session.username,
            loggedIn: req.session.loggedIn,
            breweries: foundUser.breweries,
            beers: foundUser.beers

        })
    } catch(e){
        // console.log('error posting: _____________');
        next(e)
    }
        
});
//GET = SHOW
router.get('/', async (req, res) => {
	const foundUser = await User.findOne({username: req.session.username});
	// console.log(req.session.loggedIn);
	// console.log(req.session.username);
	if(foundUser) {
		res.render('./user/profile.ejs', {
		user: foundUser,
		breweries: foundUser.breweries,
		beers: foundUser.beers
	})
	} else {
		res.redirect('../breweries');
	}
})
//Add in beer
/************
BROKEN
************/
// router.post('/', async (req, res, next) => {
//         try {
//         const foundUser = await User.findOne({username: req.session.username});
//         const foundBrewery = await Brewery.findById({'brewery._id': req.session.username});
//         const foundBeer = await Beer.find({});
//         //check for doubles eventually
//         //add beer to user beers, and beers
//         foundUser.beers.push(foundBeer);
//         foundUser.save();
//         res.redirect('/user');
//         } catch(e){
//             res.send(e, "error");
//             next(e)
//         }
        
// });



//GET - EDIT
router.get('/edit', async (req, res) => {
	const foundUser = await User.findOne({username: req.session.username});
	if(foundUser) {
		res.render('./user/edit.ejs', {
			user: foundUser,
			loggedIn: req.session.loggedIn,
			username: req.session.username
		})
	}
})
//PUT - UPDATE

//DELETE - DESTROY



module.exports = router;