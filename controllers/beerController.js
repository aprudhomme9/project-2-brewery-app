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


// GET - SHOW
/**************
GET ROUTE TO BEER SHOW PAGE
***************/
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
/***************
POST ROUTE WHEN CHECKING IN A BEER DIRECTLY FROM BEER SHOW PAGE
***************/
router.post('/:id', async (req, res) => {
    try {
        const foundUser = await User.findOne({username: req.session.username});
        const foundBeer = await Beer.findById(req.params.id);
        foundUser.beers.push(foundBeer);

        await foundUser.save()

        res.redirect('/user');
    } catch (err) {
        res.send(err)
    }
})



//GET - EDIT

//PUT - UPDATE

//DELETE - DESTROY
/******************
DELETE ROUTE THAT REMOVES BEER FROM USER PROFILE
******************/
router.delete('/:id', async (req, res) => {
    try {
        console.log('hey');
        const foundUser = await User.findOne({username: req.session.username});
        console.log(foundUser.username);
        console.log(foundUser.beers);
    
        const beerIndex = await foundUser.beers.findIndex(beer => beer._id == req.params.id);
        foundUser.beers.splice(beerIndex, 1);
        
        foundUser.save();
        res.redirect('/user');
    } catch (err) {
        res.send(err)
    }
    
})

module.exports = router;

