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

//GET - NEW

//POST - CREATE

//GET - SHOW

//GET - EDIT

//PUT - UPDATE

//DELETE - DESTROY

module.exports = router; 

