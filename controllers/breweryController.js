const express = require('express');
const router = express.Router();
const request = require('superagent');
const Content = require('../models/content');

const placesKey = 'AIzaSyAb4dWry_xBx7-bUMmouS848cEOxa2LPxw';

const mapsKey = 'AIzaSyBzijVyQTE_Odm2-IXZsA3MbzSjk81zQgk';

const Brewery = require('../models/brewery');

const User = require('../models/user');

const Beer = require('../models/beer');

/**************
GET ROUTE TO BREWERY INDEX PAGE
RESULTS THAT ARE DISPLAYED ARE BY LOCATION OF USER
**************/
router.get('/', (req, res) => {
    request.post('https://www.googleapis.com/geolocation/v1/geolocate?key=' + mapsKey).end((err, response) => {

        const locationData = JSON.parse(response.text);
        const userLat = locationData.location.lat;
        const userLng = locationData.location.lng;
        console.log(userLat, userLng);
        request.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + userLat + ',' + userLng  + '&radius=43700&keyword=breweries&key=' + placesKey).end((err, response) => {
    
                const placesData = JSON.parse(response.text);

                const breweries = placesData.results;

                const mappedBreweries = breweries.map((brewery) => {
                    const newObj = {
                        name: brewery.name,
                        price: brewery.price_level,
                        rating: brewery.rating,
                        placeid: brewery.place_id
                    }
                    return newObj;
                })

                Brewery.create(mappedBreweries, (err, createdBreweries) => {

                    res.render('./brewery/index.ejs', {
	                    loggedIn: req.session.loggedIn,
	            		username: req.session.username,
	                    breweries: createdBreweries

	                })
	            })
        })
    })
})
/**************
GET ROUTE TO BREWERY INDEX PAGE VIA SEARCH
RESULTS DISPLAYED ARE BASED ON CITY SEARCH PERFORMED BY USER
**************/
router.get('/user/:query', (req, res) => {
	const userQuery = req.params.query;
	console.log(userQuery);
	request.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + userQuery + '+breweries' + '&key=' + placesKey).end((err, response) => {
			const placesData = JSON.parse(response.text);

			console.log(placesData);

			const breweries = placesData.results;

			const mappedBreweries = breweries.map((brewery) => {
				const newObj = {
                    name: brewery.name,
                    price: brewery.price_level,
                    rating: brewery.rating,
                    placeid: brewery.place_id
                    }
                    return newObj;
                })

            Brewery.create(mappedBreweries, (err, createdBreweries) => {

                if(err) {
                    res.redirect('/breweries');
                } else {
                    res.render('./brewery/results.ejs', {
                    loggedIn: req.session.loggedIn,
                    username: req.session.username,
                    breweries: createdBreweries,
                    query: userQuery

                    })
                }

	        })
	})
})
/****************
GET ROUTE TO BREWERY SHOW PAGE
BREWERIES UPDATE WITH MORE DETAILED INFO FROM 
GOOGLE PLACE DETAILS API CALL
****************/
router.get('/:id', async (req, res) => {
    try {
        const foundBrewery = await Brewery.findById(req.params.id);

        request.get('https://maps.googleapis.com/maps/api/place/details/json?placeid=' + foundBrewery.placeid + '&key=' + placesKey).end(async (err, response) => {
            const details = JSON.parse(response.text);

            const thisBrewery = details.result;

            const updatedBrewery = await Brewery.findOneAndUpdate({name: thisBrewery.name}, 
            {    
                location: thisBrewery.formatted_address,
                website: thisBrewery.website,
                phone: thisBrewery.formatted_phone_number,
                map: thisBrewery.url,
                rating: thisBrewery.rating,
                price: thisBrewery.price_level,
                hours: thisBrewery.opening_hours.weekday_text
            },     {new: true})

            const breweryBeers = await Beer.find({brewery: updatedBrewery});
       		await updatedBrewery.save();
        	res.render('brewery/show.ejs', {
            	loggedIn: req.session.loggedIn,
            	username: req.session.username,
            	brewery: updatedBrewery,
                beers: breweryBeers
            })

        });

    } catch (err) {
        res.send(err)
    }
})
/************************
DELETE ROUTE WHICH REMOVES BREWERY FROM USER PROFILE
************************/
router.delete('/:id', async (req, res) => {
    try {
        console.log('hey');
        const foundUser = await User.findOne({username: req.session.username});
        console.log(foundUser.username);
        console.log(foundUser.breweries);
    
        const breweryIndex = await foundUser.breweries.findIndex(brewery => brewery._id == req.params.id);
        foundUser.breweries.splice(breweryIndex, 1);
        console.log(breweryIndex);
        console.log(foundUser.breweries);
        foundUser.save();
        res.redirect('/user');
    } catch (err) {
        res.send(err)
    }
    
})
/**********************
GET ROUTE TO NEW BEER PAGE DIRECTLY FROM BREWERY SHOW PAGE
USER CAN ADD BEER WHILE IN A CERTAIN BREWERY
**********************/
router.get('/:id/newbeer', async (req, res) => {
    try {
        const foundBrewery = await Brewery.findById(req.params.id);
        const allBreweries = await Brewery.find({});
        const foundUser = await User.findOne({username: req.session.username});

        res.render('./beer/new.ejs', {
            brewery: foundBrewery,
            breweries: allBreweries,
            loggedIn: req.session.loggedIn,
            username: req.session.username
        })  
    } catch (err) {
        res.send(err)
    }
    
})
/*************************
POST ROUTE WHICH CREATES BEER AFTER USER ADDS IT FROM BREWERY SHOW PAGE
*************************/
router.post('/:id', async (req, res) => {
    try {
        console.log(req.session.username);

        const foundUser = await User.findOne({username: req.session.username});
        const createdBeer = await Beer.create(req.body);
        createdBeer.save();
        await foundUser.beers.push(createdBeer);
        console.log(foundUser.beers);
        await foundUser.save();

        res.redirect('/user');
    } catch (err) {
        res.send(err)
    }
    
})


module.exports = router;
