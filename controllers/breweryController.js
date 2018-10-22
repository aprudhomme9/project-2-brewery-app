const express = require('express');
const router = express.Router();
const request = require('superagent');
const Content = require('../models/content');

const apiKey = 'AIzaSyAb4dWry_xBx7-bUMmouS848cEOxa2LPxw';

const mapsKey = 'AIzaSyBzijVyQTE_Odm2-IXZsA3MbzSjk81zQgk';

const Brewery = require('../models/brewery');

router.get('/', (req, res) => {
	request.post('https://www.googleapis.com/geolocation/v1/geolocate?key=' + mapsKey).end((err, response) => {

		const locationData = JSON.parse(response.text);
		const userLat = locationData.location.lat;
		const userLng = locationData.location.lng;

		 request.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + userLat + ',' + userLng + '&radius=40233.6&keyword=brewery&key=' + apiKey).end(async (err, response) => {
	
				const placesData = JSON.parse(response.text);

				const breweries = placesData.results;

				const mappedBreweries = breweries.map((brewery) => {
					const newObj = {
						name: brewery.name,
						price: brewery.price_level,
						location: brewery.vicinity,
						rating: brewery.rating
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
