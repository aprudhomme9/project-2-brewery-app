const cheerio = require('cheerio');
const request = require('request');
const jQuery  = require('jquery');


module.exports.beerSearch = (query, callback) => {

    let url = "http://beeradvocate.com/search/?q=" + encodeURIComponent(query) + "&qt=beer";

    request(url, function (error, response, html) {

        if (!error && response.statusCode == 200) {

            var $ = cheerio.load(html);
            console.log($);

            let beers = [];

            $('#ba-content div div a').each(function(beersearch) {

                // One brewery listing
                let beer = $(this);
            
              

                //Get to span from content

                // Beer details
                    beer_name = beer.text(),
                    beer[0].attribs['href'];
                    // beer_url = beer[0].attributes[0].nodeValue

                //Brewery details
                let brewery = beer.nextAll().eq(1)
                console.log(brewery, 'brewery -----------------');
                    brewery_name = brewery.text();
                    brewery_url = brewery[0].attribs['href'];
                    brewery_location = brewery.nextAll().eq(1).text();
                    console.log(brewery_location, "brewery location test");

                // Data to return
                let data = {
                    beer_name: beer_name,
                    beer_url: brewery_url,
                    brewery_name: brewery_name,
                    brewery_location: brewery_location,
                    brewery_url: brewery_url
                };
                
                // Add to beer array
                beers.push(data);

            });

            callback(beers);

        }

    });
};
