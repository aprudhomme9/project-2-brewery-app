const mongoose = require('mongoose');

const brewerySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	location: String, //Google Places API
	map: //<--- API?
	visited: Boolean,
	dogfriendly: Boolean,
	bikefriendly: Boolean,
	atmosphere: String,
	price: String, //Google Places API
	website: String, //Google Places API
	rating: Number,
	reviews: [String], //Public
	notes: [String] //For user
});

module.exports = mongoose.model('Brewery', brewerySchema);