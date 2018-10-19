const express = require('express');
const User = require('./user');

const userSchema = new mongoose.Schema({
	username: String, 
	password: String,
	breweries: [String], //populate from api
	beers: [String]
});

module.exports = mongoose.model('User', userSchema)