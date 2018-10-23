const express = require('express');
const router = express.Router();

const Beer = require('../models/beer');
const Brewery = require('../models/brewery');


router.get('/:id', async (req, res) => {
	const foundUser = await User.findById(req.params.id);

	res.render('./user/profile.ejs', {
		user: foundUser
	})
})







module.exports = router;