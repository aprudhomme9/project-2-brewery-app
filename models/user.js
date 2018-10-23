const express = require('express');
const User = require('./user');
const mongoose = require('mongoose');

const Brewery = require('./brewery');
const Beer = require('./beer');

const userSchema = new mongoose.Schema({
	username: String, 
	password: String,
	breweries: Brewery.schema,
	beers: Beer.schema
});

module.exports = mongoose.model('User', userSchema)