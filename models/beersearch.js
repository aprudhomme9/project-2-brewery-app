const cheerio = require('cheerio');
const request = require('request');
const jQuery  = require('jquery');


module.exports.beerSearch = (query, callback) => {

    let url = "https://untappd.com/search?q=" + encodeURIComponent(query) + "&type=beer&sort=all";

    request(url, function (error, response, html) {

        if (!error && response.statusCode == 200) {

            var $ = cheerio.load(html);
        

            let beers = [];

            $('.beer-item').each(function(beersearch) {
                setTimeOut(() => {}, 2000)
                // One brewery listing
                let beer = $(this);
            
              

                //Get to span from content

                // Beer details
                    beer_name = beer.find('.name').text();
                    beer_url = beer.find('.name').children().attr('href');
                    beer_style = beer.children().find('.style').text();
                    beer_abv = beer.children().find('.abv').text();
                    beer_ibu = beer.children().find('.ibu').text();
                    beer_img = beer.find('.label').children().attr('src');

                //Brewery details
                    brewery = beer.find('.brewery');
                    brewery_name = brewery.children().text();
                    brewery_url = brewery.children().attr('href')


                // Data to return
                let data = {
                    name: beer_name,
                    url: "https://untappd.com" + beer_url,
                    style: beer_style,
                    abv: beer_abv,
                    ibu: beer_ibu,
                    img: beer_img,
                    brewery_name: brewery_name,
                    brewery_url: "https://untappd.com" + brewery_url
                };
                
                // Add to beer array
                beers.push(data);

            });

            callback(beers);

        }

    });
};
