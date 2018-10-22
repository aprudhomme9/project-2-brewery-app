const express = require('express');
const router = express.Router();

const Beer = require('../models/beer');
const Brewery = require('../models/brewery');
const Content = require('../models/content');





//GET - INDEX
router.get('/', async (req, res) => {
    try {
        const foundBeers = await Beer.find({
        }, (err, foundBeers) => {
            if (err){
                console.log(err, "error");
            } else {
                res.render('beer/index.ejs', {
                beer: foundBeers
                });    
            }
        });
        
    } catch (err) {
        res.send(err);
    }
});

router.get('/:id', async(req, res, next) => {
    try {
        const foundBeer = await Beer.findById(req.params.id);
        res.render('beer/show.ejs', {
            beer: foundBeer
        })
    } catch (e) {
        res.send(e, "error");
        next(e)
    }

});

//GET - NEW

//POST - CREATE

//GET - SHOW

//GET - EDIT

//PUT - UPDATE

//DELETE - DESTROY

module.exports = router; 

