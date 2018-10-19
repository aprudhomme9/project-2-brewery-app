Project 2:


## This app is designed to provide the user with a list of breweries in their area (X Mile Radius), or users can search breweries/beer. Users will login, or register. The user can then check into a brewery as having visited, as well as add beers from that brewery into a list of beers they have tried. 

## Getting Started

## Built With
[GoogleAPI](http:) - Google Maps API

## Authors
Andy Prudhomme
Ashley Fueger


See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

## Home Page --> Index page with breweries, beer, and user profile.

	* User can browse breweries and beer through the breweries link & beers link.

## Breweries Index/Brewery Show Pages --> 
	* User can browse breweries based on location. Each brewery listed has a link to its own page, which features its model data & user reviews (comments) and ratings (stars). 

	* The user can also 'check in' to the brewery, meaning they've been there. The brewery then gets added to the users' breweries If the user is not logged in, the user can not rate or review a brewery, nor can the user check in. User can also log private comments on any brewery (or beer).
	
	* Each brewery show page will also display popular beers at that brewery on the bottom of the page. These will link to respective beers show pages.


## Beers Index/Beer Show Pages --> 
	* User can browse beers based on type. Each beer that appears in results will also link to its own page, which will show its model data, as well as comments and ratings. 

	* The user can 'check in' that beer, meaning they've had the beer and want to review/rate it.  Checking in will add the beer to the users' beers.


## Add Beer Page --> 
	* A user can add a beer that they've recently had but can not find within the site. Certain attributes of the beer associated with the site (like photo, for example) will be pulled based on beer characteristics (most specifically type).

	* The user can write a public review so that others can gather feedback and information on beers. The user can also write a private note for their own reference, i.e. don't get this beer again, it sucks. For the avid beer drinker, this is a nice refresher on what they have liked and not liked

	* The user navigates to this page through brewery show page. This beer then gets added to the respective brewery

## Edit Beer Page -->
	* A user can edit the information about any beer that they added via link within their User Profile Page

## User Profile Page --> 
	* An index page displaying beers & breweries that the user has checked in. Based on what the user has checked in (the types that appear the most, for example), these statistics will display in a friendly messages 'You love saisons', 'You've checked into X breweries'

	* A nice, horizontal scrolling list of both breweries that the user has checked into and beers they've tried will appear on the profile page. These will link to their respective brewery/beer show pages

 