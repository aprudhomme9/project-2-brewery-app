const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const session        = require('express-session');
const request 		 = require('superagent');

require('./db/db');


app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));


// const center = user location
// use nearby search w/ keyword 'brewery' and center as the location argument, with radius of however many miles


const apiKey = 'AIzaSyAb4dWry_xBx7-bUMmouS848cEOxa2LPxw';

app.get('/', (req, res) => {
	request.get('https://maps.googleapis.com/maps/api/place/textsearch/json?input=minneapolis%20breweries&inputtype=textquery&fields=name&key='+ apiKey).end((err, response) => {
		
		const placesData = JSON.parse(response.text);

		const breweriesArray = placesData.results;

		const breweryNames = [];

		const breweryAddresses = [];

		for(let i = 0; i < breweriesArray.length; i++) {
			breweryNames.push(breweriesArray[i].name);
		}

		for(let i = 0; i < breweriesArray.length; i++) {
			breweryAddresses.push(breweriesArray[i].formatted_address)
		}

		res.render('./brewery/index.ejs', {
			breweries: breweryNames,
			addresses: breweryAddresses
		})
		
	});


})











app.listen(3000, () => {
	const today = new Date();
	console.log((today.toLocaleDateString('en-US') + ': ' + today.toLocaleTimeString('en-US')));
})