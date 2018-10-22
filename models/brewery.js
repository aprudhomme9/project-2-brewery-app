const mongoose = require('mongoose');

const brewerySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	location: String, //Google Places API
	visited: Boolean,
	dogfriendly: Boolean,
	bikefriendly: Boolean,
	atmosphere: String,
	phone: String,
	price: String, //Google Places API
	website: String, //Google Places API
	rating: String,
	reviews: [String], //Public
	notes: [String],
	placeid: String,
	map: String
});

module.exports = mongoose.model('Brewery', brewerySchema);