var express = require("express");
var models = require('../models/');
var Promise = require("bluebird");
var Activity = models.Activity; 
var	Place = models.Place;
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var router = express.Router();

router.get("/", function(request,response, next){
	var ourInfo = [];
	ourInfo[0] = Activity.find({}).exec();
	ourInfo[1] = Hotel.find({}).exec();
	ourInfo[2] = Restaurant.find({}).exec();

	Promise.all(ourInfo).then(function(array){
		response.render("index", {activities: array[0], hotels: array[1], restaurants: array[2] });
	})
	.then(null,next);
})


module.exports = router;
