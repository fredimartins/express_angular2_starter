"use strict";
var express = require('express');
var mongoose = require('mongoose');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var _Index = require("./routes/views/index");
var _ApiProducts = require("./routes/api/products");
var _ApiCart = require("./routes/api/cart");
var ServerApp = (function () {
    function ServerApp() {
        this._App = express();
        this._Router = express.Router();
    }
    ServerApp.prototype.configServer = function () {
        // Add headers
        this._App.use(function (req, res, next) {
            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', '*');
            // Request methods you wish to allow
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            // Request headers you wish to allow
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            // Set to true if you need the website to include cookies in the requests sent
            // to the API (e.g. in case you use sessions)
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            // Pass to next layer of middleware
            next();
        });
        var sessionOptions = {
            key: 'teste.pif',
            secret: 'Some secret key',
            resave: true,
            saveUninitialized: true,
            cookie: {
                secure: false,
                maxAge: 600000
            }
        };
        this._App.use(cookieParser());
        this._App.use(bodyParser.json());
        this._App.use(session(sessionOptions));
        this._App.use(bodyParser.urlencoded({ extended: true }));
    };
    ServerApp.prototype.startMongoCon = function () {
        mongoose.connect('mongodb://10.10.0.181/ecopif');
    };
    ServerApp.prototype.setRoutes = function () {
        this._App.use('/', _Index);
        this._App.use('/api', _ApiProducts);
        this._App.use('/api', _ApiCart);
    };
    ServerApp.prototype.startServer = function () {
        //you won't need 'connect-livereload' if you have livereload plugin for your browser
        this._App.listen(5000, function () {
            console.log('App listening on port 5000!');
        });
    };
    return ServerApp;
}());
exports.ServerApp = ServerApp;
//# sourceMappingURL=serverApp.js.map