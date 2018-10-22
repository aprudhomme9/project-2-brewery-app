const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const session        = require('express-session');
const request 		 = require('superagent');

require('./db/db');

const breweryController = require('./controllers/breweryController');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));


app.use('/breweries', breweryController);










app.listen(3000, () => {
	const today = new Date();
	console.log((today.toLocaleDateString('en-US') + ': ' + today.toLocaleTimeString('en-US')));
})