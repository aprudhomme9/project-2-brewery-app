// Auth Page:
// Login/Register
// //Option to browse without logging in? What would that look like?

// Redirect to Index.ejs
// Breweries
// Beer
// Your Beer
// Your Visited Breweries

/***************************/

// Breweries and Your breweries show.ejs, difference being that breweries will have a "check in!" hover alert, whereas Your breweries will have an "edit" button.
//  -----------------------------------------------------------
// |		Name:								-------------	|
// |		Visited: checkbox					|			|	|
// |		Website:							|	map		|	|
// |											|			|	|
// |											-------------	|
// -------------------------------------------------------------
//Do we allow only search by location using Zip or city, state? Or do we solely base it on location from API?


// Brewery routes: 
// index, new, create, show.
// Your Brewery routes: 
// index, show, edit, update, destroy. 
// Beer routes: 
// index, new, create, show, edit, update (no destroy)
// Your beer routes: 
// index, show, create (in the sense of making a copy for the user's beer), update (only allow rating to update), destroy.

// I think it's critical that users can't update the data of their beer without updating the actual beer. We could deal with this by forcing the change across the board if they edit from their page, but I'd prefer as a design choice to push them towards the beer edit page so that we're not having to stop the push of the boolean and number value for their checkin and rating.

// Do we create a timer/some kind of wait for outside authorization? Like do we have a admin account that has different privileges? This might be too much, but it's good to think about. 

// The same is true for Breweries, except the way I would see it, whoever edits a brewery last, has whatever new updates included. So like, if a brewery is dog friendly and then any user edits the brewery as not being dog friendly, that change should persist. OR we require two users to select the opposite Boolean in order to be consistent with change. 


// Breweries --> Brewery page
// List of breweries based on location //as in, how when you first use google maps it requests that it be allowed to log your location.

//Concerns here about what it looks like to use an API and then also attach information to that. Would we push user breweries into an array after. Maybe we shouldn't be worried.

//No needed option to add new breweries, but I would suppose post route would be linked to adding the brewery to the user?



// Models: 

// Brewery:

// const brewerySchema = new mongoose.Schema({
// 	name: {
// 		type: String,
// 		required: true
// 	},
// 	location: String, //Google Places API
// 	map: <--- API?
// 	visited: Boolean,
// 	dogfriendly: Boolean,
// 	bikefriendly: Boolean,
// 	atmosphere: String,
// 	price: String, //Google Places API
// 	website: String, //Google Places API
// 	reviews: [String], //Public
// 	notes: [String] //For user
// });

// // Beer: 
// const beerSchema = new mongoose.Schema({
// 	name: {
// 		type: String,
// 		required: true
// 	},
// 	brewery: [Brewery.Schema],
// 	kind: String, //Dropdown to keep beers organized
// 	picture: [String], //Allow user to upload pictures? Warn user these will be public?
// 	rating: Number, //limit this via dropdown option?
// 	hops: [String], //Is there something we can do here where when they start typing it tries to autofill people to ensure we keep our Strings the same?
// 	yeast: [String],
// 	barrel: String, 
// 	additives: [String], //berries, spices, etc.
// 	reviews: [String], //public
// 	notes: String //for user
// });

// // User:
// const userSchema = new mongoose.Schema({
// 	username: String, 
// 	password: String,
// 	breweries: [String], //populate from api
// 	beers: [String]
// });


//Something to remember is that when a user selects a beer, the user gets the beer pushed into an array, and the beer itself gets a brewery. A dropdown for breweries on the new beer page is probably not the best design choice, but we could use it if we made the drop down populate with with breweries within a 25 mile radius using the API, or forced the user to only enter a beer through a brewery/only enter a beer already logged to a brewery. 

//Other concerns with API usage are if the data is static and pulls down into breweries, we're relying on that to be accurate. In the sense that what if their website updates but google still has the wrong info, how do we force user changes to take precedence, or do we eliminate the ability of the user to change those values?

// Stage 0: Make root/model data for testing. 
// Stage 1: Build out all seven routes for each model along with all ejs pages 
// Stage 2: Get login/register setup
// Stage 3: Integrate the models within routes
// Stage 4: Integrate API
// Stage 5: Add CSS
// Stage 6: Let people browse as guest user, add the quirks of how to decide on when beer or brewery information is altered, etc.


// Google Places Attributes
/***************************

-----For Brewery-----

formatted address
website
hours:
	opening_hours:
		weekday_text
		open_now
		close
		permanently_closed
photo(s)
price_level
reviews
ratings

***************************/