const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const session        = require('express-session');
const request 		 = require('superagent');

require('./db/db');

const key = 'AIzaSyAb4dWry_xBx7-bUMmouS848cEOxa2LPxw';

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
	request.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=' + key).end((err, response) => {
		
		const placesData = JSON.parse(response.text);
	});

	console.log(placesData);
})











app.listen(3000, () => {
	const today = new Date();
	console.log((today.toLocaleDateString('en-US') + ': ' + today.toLocaleTimeString('en-US')));
})