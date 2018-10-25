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
const User = require('./models/user');




app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
  secret: "THIS IS A GOVERNMENT STRING GOOD ENOUGH FOR GOVERNMENTWORK",
  resave: false,
  saveUninitialized: false // legal
}))


app.use((req, res, next) => {
	if(req.session.loggedIn == undefined) {
		req.session.loggedIn = false
	}
	//next logically belongs outside in case I do more in this section
	next()
});







const breweryController = require('./controllers/breweryController');
const beerController = require('./controllers/beerController');
const userController = require('./controllers/userController');
const authController = require('./controllers/authController');

app.use('/breweries', breweryController);
app.use('/beer', beerController);
app.use('/user', userController);
app.use('/auth', authController);


app.get('/', async (req, res) => {
        try {
        const findBreweries = await Brewery.find({});
            res.render('index.ejs', {
                username: req.session.username,
                loggedIn: req.session.loggedIn,
                breweries: findBreweries
            });    
        } catch(e){
            next(e)
        }
        
});

app.get('/seed', async (req, res) => {
    const createdBeer = await Beer.create(content.beer);
    res.send(createdBeer);
})















app.listen(3000, () => {
	const today = new Date();
	console.log((today.toLocaleDateString('en-US') + ': ' + today.toLocaleTimeString('en-US')));
})