const express = require('express');
const router = express.Router();
const request = require('superagent');
const Content = require('../models/content');

// const center = user location
// use nearby search w/ keyword 'brewery' and center as the location argument, with radius of however many miles


const apiKey = 'AIzaSyAb4dWry_xBx7-bUMmouS848cEOxa2LPxw';

const mapsKey = 'AIzaSyBzijVyQTE_Odm2-IXZsA3MbzSjk81zQgk';

router.get('/', (req, res) => {
	request.post('https://www.googleapis.com/geolocation/v1/geolocate?key=' + mapsKey).end((err, response) => {
		const locationData = JSON.parse(response.text);
		console.log(locationData);
		const userLat = locationData.location.lat;
		const userLng = locationData.location.lng;

		 request.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + userLat + ',' + userLng + '&radius=1500&keyword=breweries&key=' + apiKey).end((err, response) => {
		
		const placesData = JSON.parse(response.text);

		const breweries = placesData.results;

		const breweryNames = [];

		const breweryAddresses = [];

		const breweryPrices = [];

		const breweryRatings = [];

		const breweryOpen = [];

		for(let i = 0; i < breweries.length; i++) {
			breweryNames.push(breweries[i].name);
			breweryAddresses.push(breweries[i].formatted_address);
			breweryPrices.push(breweries[i].price_level);
			breweryRatings.push(breweries[i].rating);
			// breweryOpen.push(breweries[i].opening_hours.open_now);
		}
		// console.log(breweries);

		console.log(placesData);

		res.render('./brewery/index.ejs', {
			breweries: breweryNames,
			addresses: breweryAddresses,
			price: breweryPrices,
			rating: breweryRatings
			// open: breweryOpen
		})	
	})
	
	})
})

//Login INDEX POST
router.post('/', async (req, res, next) => {
		try {
			const foundUser = await User.findOne({username: req.body.username});
			if(foundUser && bcrypt.compareSync(req.body.password, foundUser.password)){
			res.send('/')
		} else {
			// req.session.message = "Username or Password is incorrect"
			//res.send('/');
		}
		}	catch(e){	
			res.send('/')
			res.send(e, "error");
			next(e)
		}
		
});

module.exports = router;
