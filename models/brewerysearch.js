const cheerio = require('cheerio');
const request = require('request');
const jQuery  = require('jquery');

module.exports.brewerySearch = (query, callback) => {

    let url = "https://untappd.com/search?q=" + encodeURIComponent(query) + "&type=brewery&sort=";

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
// let breweryArrayGoogle = [];
// const apiKey = 'AIzaSyAb4dWry_xBx7-bUMmouS848cEOxa2LPxw';
// const googleBrewery = (query, callback) => {
//     request.get('https://maps.googleapis.com/maps/api/place/textsearch/json?input='+ encodeURIComponent(query) +'&inputtype=textquery&fields=name&key=' + apiKey).end((err, response) =>{
//          const placesData = JSON.parse(response.text);
//          breweryArrayGoogle = placesData.results;
//          console.log(breweryArrayGoogle, 'brewery ala google');
//          console.log(breweryArrayGoogle[0].name);
//          console.log(breweryArrayGoogle[0].formatted_address);
//          res.render('./brewery/index.ejs', {
//             brewery: Brewery
//          });

//     });
 
// }




// module.exports = brewerySearch;