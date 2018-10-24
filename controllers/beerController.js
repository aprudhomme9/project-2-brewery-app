const express = require('express');
const router = express.Router();

const Beer = require('../models/beer');
const Brewery = require('../models/brewery');
const Content = require('../models/content');
const User = require('../models/user');





//GET - INDEX
router.get('/', async (req, res) => {
    try {
        const foundBeers = await Beer.find({});
        res.render('beer/index.ejs', {
                    loggedIn: req.session.loggedIn,
                    username: req.session.username,
                    beer: foundBeers
                });    
        
        } catch (err) {
        res.send(err);
        }
});


//GET - NEW - New beer AND brewery pick, for when a user makes a beer NOT from the brewery page. It allows them to pick the beer in a drop down vs. the req.params.id of the brewery coming in. 
router.get('/new', async (req, res, next) => {
    try {
        const allBreweries = await Brewery.find({});
        res.render('beer/new.ejs',{
            username: req.session.username,
            loggedIn: req.session.loggedIn,
            breweries: allBreweries,
            fixed: false
        })
    } catch(e){
        next(e)
    }       
});

//GET - NEW beer from brewery page, pulls in req.params.id 
router.get('/new/:breweryId', async (req, res, next) => {
    try {
        const findBrewery = await Brewery.findById(req.params.breweryId);
        res.render('beer/new.ejs',{
            username: req.session.username,
            loggedIn: req.session.loggedIn,
            brewery: findBrewery,
            fixed: true
        })
    // link on brewery showpage that links to this
    } catch(e){
        next(e)
    }   
});


// /new/:breweryId


//GET - SHOW beer. Beers have breweries, so this can be used to pull in info for brewery and likely should offer at least a link to the brewery page. 
router.get('/:id', async(req, res, next) => {
    try {
        const foundBeer = await Beer.findById(req.params.id);
        console.log(foundBeer, "found beer");
        res.render('beer/show.ejs', {
            username: req.session.username,
            loggedIn: req.session.loggedIn,
            beer: foundBeer
        })
    } catch (e) {
        // res.send(e, "error");
        next(e)
    }

});


    

//POST - CREATE
router.post('/', async (req, res, next) => {
    try {
        const foundUser = await User.findOne({username: req.session.username});
        console.log(req.session.username);
        console.log(foundUser);
        const findBrewery = await Brewery.findById(req.body.breweryId);
        const makeBeer = await Beer.create(req.body);
        foundUser.breweries.push(makeBeer);
        await foundUser.save();
        console.log(foundUser);
        res.render('/user/profile',{
            username: req.session.username,
            loggedIn: req.session.loggedIn,
            breweries: foundUser.breweries,
            beers: foundUser.beers

        })
    } catch(e){
        next(e)
    }
        
});


//GET - EDIT

//PUT - UPDATE

//DELETE - DESTROY


module.exports = router;

