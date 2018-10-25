const express = require('express');
const router = express.Router();

const Beer = require('../models/beer');
const Brewery = require('../models/brewery');
const Content = require('../models/content');
const User = require('../models/user');





//GET --> INDEX
/**************
GET ROUTE TO BEER INDEX PAGE DISPLAYING ALL BEERS IN
**************/
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


// GET --> SHOW
/**************
GET ROUTE TO BEER SHOW PAGE
***************/
router.get('/:id', async(req, res, next) => {
    try {
        const foundBeer = await Beer.findById(req.params.id);
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


    

//POST --> CREATE
/***************
POST ROUTE WHEN CHECKING IN A BEER DIRECTLY FROM BEER SHOW PAGE
***************/
router.post('/:id', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            const foundUser = await User.findOne({username: req.session.username});
            const foundBeer = await Beer.findById(req.params.id);
            foundUser.beers.push(foundBeer);

            await foundUser.save()

            res.redirect('/user');
        } else {
            req.session.message = 'You must be logged in to check in a beer'
            res.redirect('/breweries')
        }
    } catch (err) {
        res.send(err)
    }
})



//GET --> EDIT
/*************
Get route to edit beer page
*************/
router.get('/:id/edit', async (req, res) => {
    try {
        const foundBeer = await Beer.findById(req.params.id);
        res.render('beer/edit.ejs', {
            beer: foundBeer,
            loggedIn: req.session.loggedIn,
            username: req.session.username
        })
    } catch (err) {
        res.send(err)
    }
})
//PUT --> UPDATE
/****************
Put route to update beer after user edits beer
****************/
router.put('/:id', async (req, res) => {
    try {
        const updatedBeer = await Beer.findByIdAndUpdate(req.params.id, req.body, {new: true});
        await updatedBeer.save();
        console.log(updatedBeer, '<-----UPDATED BEER');
        const foundUser = await User.findOne({username: req.session.username});
        const beerIndex = await foundUser.beers.findIndex(beer => beer._id == req.params.id);
        foundUser.beers.splice(beerIndex, 1);
        console.log(beerIndex, '<----Beer Index');
        await foundUser.beers.push(updatedBeer);
        
        await foundUser.save();
        console.log(foundUser.beers, 'USER BEERS ');

        res.redirect('/beer');
    } catch (err) {
        res.send(err)
    }
})
//DELETE --> DESTROY
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

