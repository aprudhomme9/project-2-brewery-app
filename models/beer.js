const express = require('express');
const Beer = require('./beer')

const beerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	brewery: Brewery.Schema,
	reviews: [Review.Schema],
	kind: String, //Dropdown to keep beers organized
	abv: String, // Dropdown percentage
	ibu: String, //Dropdown
	picture: [String], //Allow user to upload pictures? Warn user these will be public?
	rating: Number, //limit this via dropdown option?
	hops: [String], //Is there something we can do here where when they start typing it tries to autofill people to ensure we keep our Strings the same?
	yeast: [String],
	barrel: String, 
	additives: [String], //berries, spices, etc.
	// reviews: [Review.schema], //public
	notes: String //for user
});

module.exports = mongoose.model('Beer', beerSchema);

