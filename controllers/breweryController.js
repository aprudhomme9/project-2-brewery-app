const express = require('express');
const router = express.Router();
const request = require('superagent');

// const center = user location
// use nearby search w/ keyword 'brewery' and center as the location argument, with radius of however many miles


const apiKey = 'AIzaSyAb4dWry_xBx7-bUMmouS848cEOxa2LPxw';

router.get('/', (req, res) => {
	request.get('https://maps.googleapis.com/maps/api/place/textsearch/json?input=minneapolis%20breweries&inputtype=textquery&fields=name&key='+ apiKey).end((err, response) => {
		
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

module.exports = router;
