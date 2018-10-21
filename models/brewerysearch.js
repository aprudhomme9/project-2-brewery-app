const cheerio = require('cheerio');
const request = require('request');
const jQuery  = require('jquery');

module.exports.brewerySearch = (query, callback) => {

    let url = "http://beeradvocate.com/search/?q=" + encodeURIComponent(query) + "&qt=place";

    request(url, function (error, response, html) {

        if (!error && response.statusCode == 200) {

            var $ = cheerio.load(html);

            let breweries = [];

            $('#ba-content div div a').each(function(place) {

                // One brewery listing
                let brewery = $(this);
            
              

                //Get to span from content

                // Brewery details
                let brewery_name = brewery.text(),
                    brewery_url = brewery[0].attribs.href
                    brewery_location = brewery.nextAll().eq(1).text();
                    console.log(brewery_location, "brewery location test");

                // Data to return
                let data = {
                    brewery_name: brewery_name,
                    brewery_location: brewery_location,
                    brewery_url: brewery_url
                };
                
                // Add to beer array
                breweries.push(data);

            });

            callback(breweries);

        }

    });
};

// module.exports = brewerySearch;