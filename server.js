const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const session        = require('express-session');
const request 		 = require('superagent');

require('./db/db');


const Beer = require('./models/beer');
const Brewery = require('./models/brewery');
const content = require('./models/content');
const breweryController = require('./controllers/breweryController');
const beerController = require('./controllers/beerController');
const userController = require('./controllers/userController');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));





app.use('/breweries', breweryController);
app.use('/beer', beerController);
app.use('/user', userController);



app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.get('/seed', async (req, res) => {
    const createdBeer = await Beer.create(content.beer);
    res.send(createdBeer);
})















app.listen(3000, () => {
	const today = new Date();
	console.log((today.toLocaleDateString('en-US') + ': ' + today.toLocaleTimeString('en-US')));
})