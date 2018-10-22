const express = require('express');
const router = express.Router();
const request = require('superagent');
const Content = require('../models/content');

const placesKey = 'AIzaSyAb4dWry_xBx7-bUMmouS848cEOxa2LPxw';

const mapsKey = 'AIzaSyBzijVyQTE_Odm2-IXZsA3MbzSjk81zQgk';

const Brewery = require('../models/brewery');

router.get('/', (req, res) => {
	request.post('https://www.googleapis.com/geolocation/v1/geolocate?key=' + mapsKey).end((err, response) => {

		const locationData = JSON.parse(response.text);
		const userLat = locationData.location.lat;
		const userLng = locationData.location.lng;

		 request.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + userLat + ',' + userLng + '&radius=50000&keyword=brewery&key=' + placesKey).end(async (err, response) => {
	
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
					breweries: createdBreweries

				})
			}) 
		})
	})
})

router.get('/:id', async (req, res) => {
	Brewery.findById(req.params.id, async (err, foundBrewery) => {
		request.get('https://maps.googleapis.com/maps/api/place/details/json?placeid=' + foundBrewery.placeid + '&key=' + mapsKey).end(async (err, response) => {

			const breweryDetails = JSON.parse(response.text);

			const thisBrewery = breweryDetails.result

			await Brewery.findByIdAndUpdate(req.params.id, {
				location: thisBrewery.formatted_address,
				website: thisBrewery.website,
				phone: thisBrewery.formatted_phone_number,
				map: thisBrewery.url
			}, (err, updatedBrewery) => {
				res.render('./brewery/show.ejs', {
					brewery: updatedBrewery,
					address: thisBrewery.formatted_address,
					website: thisBrewery.website,
					phone: thisBrewery.formatted_phone_number,
					url: thisBrewery.url
				})
			})
		})
	})
})

//Login INDEX POST
// router.post('/', async (req, res, next) => {
// 		try {
// 			const foundUser = await User.findOne({username: req.body.username});
// 			if(foundUser && bcrypt.compareSync(req.body.password, foundUser.password)){
// 			res.send('/')
// 		} else {
// 			// req.session.message = "Username or Password is incorrect"
// 			//res.send('/');
// 		}
// 		}	catch(e){	
// 			res.send('/')
// 			res.send(e, "error");
// 			next(e)
// 		}
		
// });

module.exports = router;
