var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

// Notice the `mongodb` protocol; Mongo is basically a kind of server,
// which handles database requests and sends responses. It's async!
mongoose.connect('mongodb://localhost/tripPlanner'); // <= db name will be 'wikistack'
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

var Schema = mongoose.Schema;

var PlaceSchema = new Schema({
	address: {type: String, required: true},
	city: {type: String, required: true},
	state: {type: String, required: true},
	phone: {type: String, required: true},
	location: {type: [Number], required: true}
});

var HotelSchema = new Schema({
	name: {type: String, required: true},
	place: {type: [PlaceSchema], required: true},
	num_stars: {type: Number, required: true, min: 1, max: 5},
	amenities: {type: String, required: true}
});

var ActivitySchema = new Schema({
	name: {type: String, required: true},
	place: {type: [PlaceSchema], required: true},
	age_range: {type: String, required: true}
});

var RestaurantSchema = new Schema({
	name: {type: String, required: true},
	place: {type: [PlaceSchema], required: true},
	cuisine: {type: String, required: true},
	price: {type: Number, required: true, min: 1, max: 5}
});

var Place = mongoose.model("Place", PlaceSchema);
var Hotel = mongoose.model("Hotel", HotelSchema);
var Activity = mongoose.model("Activity", ActivitySchema);
var Restaurant = mongoose.model("Restaurant", RestaurantSchema);


module.exports = {
	Place: Place,
	Hotel: Hotel,
	Activity: Activity,
	Restaurant: Restaurant
}