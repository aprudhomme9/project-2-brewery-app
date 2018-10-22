const standardReferenceMethod = [
{
id: 1,	
color: '1 Pale Straw',
img: ''
},{
id: 2,
color: '2 Light Yellow',
img: ''
},{
id: 3,
color: '3 Straw',
img: ''
},{
id: 4,
color: '4 Pale Gold',
img: ''
},{
id: 5
color: '5 Gold',
img: ''
},{
id: 6,
color: '6 Deep Gold',
img: ''
},{
id: 7,
color: '7 Light Amber',
img: ''
},{
id: 8, 
color: '8 Amber',
img: ''
},{
id: 9, 
color: '9 Medium Amber',
img: ''
},{
id: 10, 
color: '10 Copper',
img: ''
},{
id: 11,
color: '11-12 Deep Amber',
img: []
},{
id: 12,
color: '13-15 Light Brown',
img: []
},{
id: 13,
color: '16 Saddle Brown',
img: ''
}, {
id: 14,
color: '17 Amber Brown',
img: ''
},{
id: 15,
color: '18-23 Brown',
img: []
}, {
id: 16,
color: '24 Ruby Brown',
img: ''
}, {
id: 17,
color: '25-29 Dark Brown',
img: []
}, {
id: 18,
color: '30 Deep Brown',
img: ''
}, {
id: 19,
color: '31-40 Black'
img: []
}];

const fermentation = ['Top', 'Bottom', 'Spontaneous'];
const origin = ['American', 'English', 'German', 'Belgian', 'Irish', 'Japan'];



const brewery = [
    {
        name: "Alarmist Brewing",
        location: "4055 W. Peterson Ave Chicago, IL", 
        visited:  false,
        website: "http://alarmistbrewing.com/"
    },    {
        name: "Aleman",
        location: "3304 N. Knox Ave. Chicago, IL" , 
        visited:  false,
        website: "https://www.facebook.com/pages/Aleman-Brewing/264505396906121"
    },    {
        name: "All Rise Brewing Co.",
        location: "235 N. Ashland Ave Chicago, IL",
        visited:  false,
        website: "https://www.facebook.com/allrisebrewing"
    },  {
        name: "ALULU Brewpub",
        location: "2011 S. Laflin St. Chicago, IL",
        visited:  false,
        website: "http://www.alulubrew.com/"
    },  {
        name: "Andersonville Brewing",
        location: "5402 N. Clark St. Chicago, IL",
        visited:  false,
        website: "http://hamburgermarys.com/chicago/brewing/"
    },  {
        name: "Argus Brewery",
        location: "11314 S. Front Ave. Chicago, IL",
        visited:  false,
        website: "http://www.argusbrewery.com/"
    },  {
        name: "Around the Bend Beer Co.",
        location: "825 E. 99th St. Chicago, IL",
        visited:  false,
        website: "http://aroundthebendbeer.com/"
    },  {
        name: "Ballast Point",
        location: "833 West Fulton Market, Chicago, IL",
        visited:  false,
        website: "https://www.ballastpoint.com/locations/"
    },  {
        name: "Band of Bohemia",
        location: "4710 N. Ravenswood Chicago, IL",
        visited:  false,
        website: "http://www.bandofbohemia.com/"
    },  {
        name: "Begyle Brewing Co.",
        location: "1800 W. Cuyler St. Chicago, IL",
        visited:  false,
        website: "http://www.begylebrewing.com/home/"
    },{
        name: "Bixi Brewery",
        location: "2515 N. Milwaukee Ave. Chicago IL",
        visited:  false,
        website: "https://www.facebook.com/john.tolley3/posts/10204820306484631"
    },{
        name: "Bold Dog Beer Company",
        location: "4727 W. Montrose Ave. Chicago, IL",
        visited:  false,
        website: "http://bolddogbeerco.com/"
    },{
        name: "Burnt City Brewing",
        location: "825 E. 99th St. Chicago",
        visited:  false,
        website: "https://atlasbeer.com/"
    },{
        name: "Corridor Brewery & Provisions",
        location: "3446 N. Southport Ave. Chicago, IL",
        visited:  false,
        website: "https://www.facebook.com/corridorchicago?fref=ts"
    },{
        name: "Cruz Blanca",
        location: "900 W. Randolph St. Chicago, IL",
        visited:  false,
        website: "https://twitter.com/cruzblancachi"
    },{
        name: "Dovetail Brewery",
        location: "1800 W. Belle Plaine Ave. Chicago, IL",
        visited:  false,
        website: "http://www.dovetailbrewery.com/"
    },{
        name: "DryHop Brewers",
        location: "3155 N. Broadway Ave.",
        visited:  false,
        website: "http://www.dryhopchicago.com/"
    },{
        name: "Empirical Brewery",
        location: "1801 W. Foster Ave. Chicago, IL",
        visited:  false,
        website: "http://empiricalbrewery.com/"
    },{
        name: "Eris Brewery & Ciderhouse",
        location: "4240 W. Irving Park Rd. Chicago, IL",
        visited:  false,
        website: "http://erischicago.tumblr.com/"
    },{
        name: "Forbidden Root",
        location: "1746 W. Chicago Ave. Chicago, IL",
        visited:  false,
        website: "http://forbiddenroot.com/"
    },{
        name: "Gino's East Brewing Co.",
        location: "500 N. LaSalle St. Chicago, IL",
        visited:  false,
        website: "http://ginoseastrivernorth.com/"
    },{
        name: "Goose Island Beer Co.",
        location: "1800 W. Fulton St. Chicago, IL",
        visited:  false,
        website: "http://www.gooseisland.com/"
    },{
        name: "Great Central Brewing Co.",
        location: "221 N Wood St. Chicago, IL",
        visited:  false,
        website: "http://www.chicagobusiness.com/realestate/20150812/CRED03/150819948/two-new-breweries-joining-goose-island-on-near-west-side"
    },{
        name: "Greenstar Brewing Co.",
        location: "3800 N. Clark St. Chicago, IL",
        visited:  false,
        website: "http://www.uncommonground.com/pages/beer/27.php"
    },{
        name: "Half Acre Beer Co.",
        location: "2050 W. Balmoral Ave. Chicago, IL",
        visited:  false,
        website: "http://halfacrebeer.com/"
    },{
        name: "Haymarket Pub & Brewery",
        location: "737 W. Randolph St. Chicago, IL",
        visited:  false,
        website: "http://www.haymarketbrewing.com/"
    },{
        name: "Hopewell Brewing",
        location: "2760 N. Milwaukee Ave. Chicago, IL",
        visited:  false,
        website: "http://hopewellbrewing.com/"
    },{
        name: "Hopothesis Beer Co. ",
        location: "730 W. Randolph St. Chicago, IL",
        visited:  false,
        website: "http://www.hopothesis.com/"
    },{
        name: "Horse Thief Hollow",
        location: "10426 S. Western Ave. Chicago, IL",
        visited:  false,
        website: "http://horsethiefbrewing.com/"
    },{
        name: "Illuminated Brew Works",
        location: "415 N. Sangamon Ave. Chicago, IL",
        visited:  false,
        website: "http://www.ibw-chicago.com/"
    },{
        name: "Jolly Pumpkin Artisan Ales",
        location: "1504 E. Harper Court Chicago, IL",
        visited:  false,
        website: "http://www.jollypumpkin.com/jp/locations"
    },{
        name: "Lagunitas Brewing Co.",
        location: "1843 S. Washtenaw Ave. Chicago, IL",
        visited:  false,
        website: "http://lagunitas.com/"
    },{
        name: "Lake Effect Brewing Co.",
        location: "4727 W. Montrose Ave. Chicago, IL",
        visited:  false,
        website: "http://www.lakeeffectbrewing.com/"
    },{
        name: "Lo Rez Brewing",
        location: "2101 S Carpenter St. Chicago, IL",
        visited:  false,
        website: "http://lorezbrewing.com/"
    },{
        name: "Maplewood Brewery & Distillery",
        location: "2717 N. Maplewood Ave. Chicago, IL",
        visited:  false,
        website: "http://www.mercenarycraft.com/"
    },{
        name: "Marz Community Brewing",
        location: "3630 S. Iron St. Chicago, IL",
        visited:  false,
        website: "http://marzbrewing.com/"
    },{
        name: "Metropolitan Brewing",
        location: "3057 N. Rockwell St. Chicago, IL",
        visited:  false,
        website: "http://metrobrewing.com/"
    },{
        name: "Moody Tongue Brewing Co.",
        location: "2136 S. Peoria St. Chicago, IL",
        visited:  false,
        website: "http://moodytongue.com/"
    },{
        name: "Motor Row Brewing",
        location: "2337 S. Michigan Ave. Chicago, IL",
        visited:  false,
        website: "http://www.motorrowbrewing.com/"
    },{
        name: "Off Color Brewing",
        location: "3925 W. Dickens Ave. Chicago, IL",
        visited:  false,
        website: "http://www.offcolorbrewing.com/"
    },{
        name: "Old Irving Brewing Co.",
        location: "4419 W. Montrose Ave. Chicago, IL",
        visited:  false,
        website: "http://www.oldirvingbrewing.com/"
    },{
        name: "On Tour Brewing Co.",
        location: "1725 W. Hubbard St. Chicago, IL",
        visited:  false,
        website: "http://ontourbrewingco.com/"
    },{
        name: "Open Outcry Brewing Co.",
        location: "10934 S. Western Ave. Chicago, IL",
        visited:  false,
        website: "http://www.openoutcrybrewing.com/"
    },{
        name: "Piece Brewery & Pizzeria",
        location: "1927 W. North Ave. Chicago, IL",
        visited:  false,
        website: "http://www.piecechicago.com/"
    },{
        name: "Pipeworks Brewing Co.",
        location: "3912 W McLean Ave. Chiago, IL",
        visited:  false,
        website: "http://pdubs.net/"
    },{
        name: "Revolution Brewing",
        location: "3340 N. Kedzie Ave. Chicago, IL",
        visited:  false,
        website: "http://revbrew.com/home"
    },{
        name: "Rock Bottom Restaurant & Brewery",
        location: "1 W. Grand Ave. Chicago, IL",
        visited:  false,
        website: "http://www.rockbottom.com/locations/chicago"
    },{
        name: "Spiteful Brewing",
        location: "2050 W. Balmoral Ave. Chicago, IL",
        visited:  false,
        website: "http://spitefulbrewing.com/"
    },{
        name: "Twisted Hippo Brewing Co.",
        location: "2925 W. Montrose Ave. Chicago, IL",
        visited:  false,
        website: "http://rudehippo.com/"
    },{
        name: "Urban Renewal Brewery",
        location: "5121 N. Ravenswood Ave. Chicago, IL",
        visited:  false,
        website: "https://urbanrenewbrew.com/"
    },{
        name: "Vice District Brewing",
        location: "1454 S. Michigan Ave. Chicago, IL",
        visited: false,
        website: "http://www.vicedistrictbrewing.com/"
    }
];



const beer = [
{
	name: 'Le Jus NEIPA',
	brewery: brewery[0],
	style: 'New England IPA',
	abv: '6%',
	ibu: '30 IBU'
	hops: 'Mosaic, Citra',
	additives: 'Lactose'

},{
	name: 'Pantsless Pale Ale',
	brewery: brewery[0],
	style: 'Pale Ale',
	abv: '6%',
	ibu: '35 IBU'
	hops: 'Mosaic'

}, {
	name: 'Entrenched IPA',
	brewery: brewery[0],
	style: 'IPA',
	abv: '6.5%',
	ibu: '57 IBU'
	hops: 'Citra, Centennial, Chinook'
}, {
	name: 'LadiesMan',
	brewery: brewery[1],
	style: 'Farmhouse Wit',
	abv: '5.5%',
	ibu: '18 IBU'
	additives: 'Lemon, Thyme'
}, {
	name: 'The Man',
	brewery: brewery[1],
	style: 'IPA',
	abv: '6.8%',
	ibu: '40 IBU',
	hops: 'Amarillo, Mosaic, Cascade, Citra'
}, {
	name: 'Strongman',
	brewery: brewery[1],
	style: 'Strong Ale',
	abv: '8.1%',
	ibu: '50 IBU',
	additives: 'Toasted Caraway Seeds'
}, {
	name: 'Wonder Beer',
	brewery: brewery[2],
	style: 'American Pale Ale'
	abv: '5.2%',
	ibu: '42 IBU'
}, {
	name: 'Temporary Solution',
	brewery: brewery[2],
	style: 'Robust Porter',
	abv: '6.4%',
	ibu: '33 IBU',
}, {
	name: 'Three Orange Wit',
	brewery: brewery[2],
	style: 'Strong White Ale'
	abv: '7.2%',
	ibu: '20 IBU',
	additives: 'Corianda, Chamomile, Orange'
}, {
	name: 'LuLife',
	brewery: brewery[3],
	style: 'American Lager',
	abv: '4%',
	ibu: '5 IBU'
}, {
	name: 'Shad the Calmer',
	brewery: brewery[3],
	style: 'American Pale Ale',
	abv: '5.5%',
	ibu: '40 IBU',
	hops: 'Jarrylo, Azzaca'
}, {
	name: 'Pluma Rio',
	brewery: brewery[3],
	style: 'Berliner Weisse',
	abv: '4%',
	ibu: '10 IBU'
}, {
	name: 'Blonde Bombshell',
	brewery: brewery[4],
	style: 'Golden Ale',
	abv: '4.6%'
}, {
	name: 'Mary Hoppins'
	brewery: brewery[4],
	style: 'American Pale Ale'
	abv: '5.5%',
	hops: 'Cascade, Citra'
}, {
	name: 'Gangster',
	brewery: brewery[4],
	style: 'American Amber Ale',
	abv: '5.5%',
	hops: 'Centennial, Chinook, Willamette'
}, {
	name: 'Pegasus IPA',
	brewery: brewery[5],
	style: 'English Style IPA',
	abv: '6.2%'
}, {
	name: 'Argus Lager',
	brewery: brewery[5],
	style: 'Marzen',
	abv: '5.4%',
}, {
	name: 'Bloodshot Red Ale',
	brewery: brewery[5],
	style: 'ESB',
	abv: '5.4%'
}, {
	name: 'Vera',
	brewery: brewery[6],
	style: 'Cream Ale',
	abv: '5.2%',
	ibu: '13.5 IBU',
	hops: 'Tettnang'

}, {
	name: 'Villainous',
	brewery: brewery[6],
	style: 'IPA',
	abv: '6.3%',
	ibu: '70 IBU',
	hops: 'Centennial, Simcoe, Mosaic'
}, {
	name: 'Silk Road'
	brewery: brewery[6],
	style: 'American Pale Ale'
	abv: '5.9%',
	ibu: '58 IBU',
	hops: 'Chinook, Simcoe, Bravo, Mosaic, Citra'
}, {
	name: 'Sculpin',
	brewery: brewery[7],
	style: 'IPA'
	abv: '7%'
	ibu: '70 IBU'

}, {
	name: 'Manta Ray Double IPA',
	brewery: brewery[7],
	style: 'IPA',
	abv: '8.5%',
	ibu: '70 IBU'
	

}, {
	name: 'Victory at Sea',
	brewery: brewery[7],
	style: 'Imperial Porter',
	abv: '10%',
	ibu: '60 IBU'

}, {
	name: 'Honey Fuggle Rose'
	brewery: brewery[8],
	style: 'American Amber',
	abv: '7.2%',
	hops: 'Fuggle',
	additives: 'Rosehip, Honey'

}, {
	name: 'The Noble Raven Ale',
	brewery: brewery[8],
	style: 'Golden Ale',
	abv: '6.6%',
	hops: 'Hallertauer'

}, {
	name: 'Indian Pale Ale'
	brewery: brewery[8],
	style: 'IPA'
	abv: '6.1%'
	additives: 'Cardamom, Coriander, Cloves, Star Anise, Roasted Grapes, Kaffir Lime Leaves'

}, {
	name: 'Begyle Blonde Ale',
	brewery: brewery[9],
	style: 'Blonde Ale',
	abv: '5.4%'

}, {
	name: 'Begyle Boat Shoes',
	brewery: brewery[9],
	style: 'Kolsch',
	abv: '5%'

}, {
	name: 'Begyle Coffee Tough Guy',
	brewery: brewery[9],
	style: 'Brown Ale',
	abv: '5.6%'

}, {
	name: 'Chelonian Lair',
	brewery: brewery[10],
	style: 'Dark Ale',
	abv: '6.2%',
	additives: 'Peppercorns'

}, {
	name: 'Captain Haddock Wit'
	brewery: brewery[10],
	style: 'Witbier'
	abv: '5.1%',
	additives: 'Orange, Coriander'

}, {
	name: 'Unspoken Rule'
	brewery: brewery[10],
	style: 'Golden Ale'
	abv: '5%',
	additives: 'Jasmine tea'

}, {
	name: 'AK Warrior',
	brewery: brewery[11],
	style: 'Double IPA'
	abv: '8.5%'
	ibu: '93 IBU'

}, {
	name: 'C-Lo'
	brewery: brewery[11],
	style: 'Session Pale Ale'
	abv: '5.1%'
	ibu: '32 IBU'
	hops: 'Columbus, Citra, Cascade'

}, {
	name: 'Divinations'
	brewery: brewery[11],
	style: 'Coffee Milk Stout'
	abv: '7.6%'
	ibu: '40 IBU'

}, {
	name: 'Face Melter'
	brewery: brewery[12],
	style: 'IPA'
	abv: '7%',
	hops: 'Citra, Centennial, Cascade'
	additives: 'Hibiscus'

}, {
	name: 'Balloon Boy'
	brewery: brewery[12],
	style: 'Farmhouse Wheat Ale'
	abv: '5%'

}, {
	name: 'The Illusionist'
	brewery: brewery[12],
	style: 'Session IPA'
	abv: '4.8%'

}, {
	name: 'Charm Stone'
	brewery: brewery[13],
	style: 'Fruited Sour'
	abv: '5.5%'
	ibu: '10 IBU'
	additives: 'Plum, Peach, Apricot'

}, {
	name: 'Argent v2'
	brewery: brewery[13], 
	style: 'Dry Hopped IPA'
	abv: '6.4%'
	ibu: '65 IBU'
	hops: 'Amarillo, Citra, Columbus'
	additives:

}, {
	name: 'Pour Le Mineur'
	brewery: brewery[13],
	style: 'Grisette'
	abv: '4.2%'
	ibu: '20 IBU'
	additives: 'Chamomile, Lemon Peel'

}, {
	name: 'Mexico Calling'
	brewery: brewery[13],
	style: 'Lager'
	abv: '4.6%'

}, {
	name: 'Smoke Alley'
	brewery: brewery[13],
	style: 'Smoked Wheat Ale'
	abv: '4.8%'

}, {
	name: 'Pastry War'
	brewery: brewery[13],
	style: 'Vienna Style Lager'
	abv: '5.3%'

}, {
	name: 'Dovetail Altbier'
	brewery: brewery[14],
	style: 'Altbier'
	abv: '5.1%'

}, {
	name: 'Dovetail Dunkel'
	brewery: brewery[14],
	style: 'Dunkel'
	abv: '4.8%'

}, {
	name: 'Dovetail Festbier'
	brewery: brewery[14],
	style: 'Marzen'
	abv: '7.2%'

}, {
	name: 'Blockbuster'
	brewery: brewery[15],
	style: 'Red Ale'
	abv: '6.5%'
}, {
	name: 'Shark Meets Hipster'
	brewery: brewery[15],
	style: 'Wheat IPA'
	abv: '6.5%'
}, {
	name: 'Wheatless in Seattle'
	brewery: brewery[15],
	style: 'Hefeweizen'
	abv: '6.3%'
}, {
	name: 'Electron Smash'
	brewery: brewery[16],
	style: 'APA'
	abv: '4.5%'
	ibu: '30 IBU'
}, {
	name: 'Symbiotic'
	brewery: brewery[16],
	style: 'Sour'
	abv: '4.8%'
	ibu: '7 IBU'
}, {
	name: 'Cold Fusion'
	brewery: brewery[16],
	style: 'Cream Ale'
	abv: '5.2%'
	ibu: '18 IBU'
}, {
	name: 'Junction Grove'
	brewery: brewery[17],
	style: 'American Rye'
	abv: '6%'

}, {
	name: 'So Fresh Saison'
	brewery: brewery[17],
	style: 'Saison'
	abv: '6%'

}, {
	name: 'Flagship: C.R.E.A.M.'
	brewery: brewery[17],
	style: 'Cream Ale'
	abv: '4.5%'

}, {
	name: 'Walking Phoenix'
	brewery: brewery[18],
	style: 'Belgian IPA'
	abv: '6.6%'


}, {
	name: 'Semtempbierfest'
	brewery: brewery[18],
	style: 'Lager'
	abv: '5.6%'

}, {
	name: 'End Note'
	brewery: brewery[18],
	style: 'Sour'
	abv: '5%'
	hops: 'Hallertau Blanc, Mandarina Bavaria'

}, {
	name: 'Tacocat'
	brewery: brewery[19],
	style: 'Sour'
	abv: '5%'
	ibu: '10 IBU'

}, {
	name: 'Turtles All the Way Down'
	brewery: brewery[19],
	style: 'Sour'
	abv: '5.2%'
	ibu: '20 IBU'

}, {
	name: 'A Hoppy Bird'
	brewery: brewery[19],
	style: 'IPA'
	abv: '6.5%'
	ibu: 'IBU 55'
	hops: 'Citra, Blanc'

}, {
	name: 'Sparkling Rose'
	brewery: brewery[20],
	style: 'Biere Brut'
	abv: '10.2%'
	ibu: '11 IBU'
	hops:
	additives: 'Hibiscus, Niagra Grapes'

}, {
	name: 'Fernetic'
	brewery: brewery[20],
	style: 'Imperial Black Ale'
	abv: '8.4%'
	ibu: 
	hops:
	additives:'Rhubarb Root, Peppermint, Saffron, Wormwood, Angelica, Anise'

}, {
	name: 'Snoochie Boochies'
	brewery: brewery[20],
	style: 'IPA'
	abv: '8%'
	ibu: '63 IBU'
}, {
	name: 'LaSalle St. Lager'
	brewery: brewery[21],
	style: 'Helles'
	abv: '5.2%'
	ibu: 
	hops: 'German Magnum'
	additives:

}, {
	name: 'Witte Chicks Dig Me'
	brewery: brewery[21],
	style: 'Witbier'
	abv: '4.8%'
	ibu: 
	hops: 'East Kent Goldings'
	additives: 'Coriander, Orange Peel'

}, {
	name: 'Broken English'
	brewery: brewery[21],
	style: 'ESB'
	abv: '5.7%'
	ibu: 
	hops: 'East Kent Goldings, Challenger'
	additives:

}, {
	name: 'Matilda'
	brewery: brewery[21],
	style: 'Belgian Strong Pale Ale'
	abv: '7%'
}, {
	name: 'Sofie'
	brewery: brewery[21],
	style: 'Belgian Saison'
	abv: '6.5%'
	additives: 'Citrus Peel'

}, {
	name: '312 Urban Wheat'
	brewery: brewery[21],
	style: 'Pale Wheat Ale'
	abv: '4.4%'
}, {
	name: 'GCBC German-Style Helles Lager'
	brewery: brewery[22],
	style: 'Helles'
	abv: '5.5%'
	ibu: '18 IBU'
	hops: 
	additives:

}, {
	name: 
	brewery: brewery[22],
	style: 
	abv: 
	ibu: 
	hops:
	additives:

}, {
	name: 
	brewery: brewery[22],
	style: 
	abv: 
	ibu: 
	hops:
	additives:

}
]

const beerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	brewery: Brewery.Schema,
	reviews: String, //[Review.Schema],
	style: String, //Dropdown to keep beers organized
	abv: String, // Dropdown percentage
	ibu: String, //Dropdown
	picture: [String], //Allow user to upload pictures? Warn user these will be public?
	rating: Number, //limit this via dropdown option?
	hops: [String], //Is there something we can do here where when they start typing it tries to autofill people to ensure we keep our Strings the same?
	yeast: [String],
	barrel: String, 
	additives: [String], //berries, spices, etc.
	// reviews: [Review.schema], //public
	notes: String //for user
});

module.exports = mongoose.model('Beer', beerSchema);

