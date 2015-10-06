var express = require('express')
var app = express()
var fs = require('fs')
var bodyParser = require('body-parser')
var morgan = require("morgan")
var swig = require('swig')
var sass = require('node-sass-middleware')
var route = require("./routes")

app.use(
	sass({
		src: __dirname + "/assets",
		dest: __dirname + "/public",
		debug: true
	})
	)

app.engine('html', swig.renderFile)
app.set('view engine', 'html')
app.set('views', process.cwd() + '/views')

app.use(morgan("dev"))

app.use(express.static("public"));
app.use("/bower_components", express.static("bower_components"));
app.use(bodyParser.urlencoded({ extended: true }))


app.use(route);

// catch 404 (i.e., no route was hit) and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// handle all errors (anything passed into `next()`)
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.log({error: err});
    res.render("error", {error: err});
});

app.listen(3000);