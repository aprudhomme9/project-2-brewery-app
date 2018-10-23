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

		 request.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + userLat + ',' + userLng + '&radius=43700&keyword=brewery&key=' + placesKey).end((err, response) => {
	
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
	try {
		const foundBrewery = await Brewery.findById(req.params.id);

		request.get('https://maps.googleapis.com/maps/api/place/details/json?placeid=' + foundBrewery.placeid + '&key=' + placesKey).end(async (err, response) => {
			const details = JSON.parse(response.text);

			const thisBrewery = details.result;
			console.log(thisBrewery);
			// const photoResponse = await request.get('https://maps.googleapis.com/maps/api/place/photo?maxwidth=600&maxheight=400&photoreference='+ thisBrewery.photos[0].photo_reference + '&key=' + placesKey).end();

			const updatedBrewery = await Brewery.findOneAndUpdate({name: thisBrewery.name}, 
			{	
				location: thisBrewery.formatted_address,
				website: thisBrewery.website,
				phone: thisBrewery.formatted_phone_number,
				map: thisBrewery.url,
				rating: thisBrewery.rating,
				// photo: breweryPicture.redirects[0],
				price: thisBrewery.price_level,
				hours: thisBrewery.opening_hours.weekday_text
			}, 	{new: true})

		await updatedBrewery.save();
			res.render('./brewery/show.ejs', {
			brewery: updatedBrewery
			// photo: photoResponse.redirects[0]
			})

		});

	} catch (err) {
		res.send(err)
	}
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
