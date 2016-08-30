"use strict";
var express = require('express');
var mongoose = require('mongoose');
var _Index = require("./routes/views/index");
var _ApiProducts = require("./routes/api/products");
var ServerApp = (function () {
    function ServerApp() {
        this._App = express();
        this._Router = express.Router();
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
    }
    ServerApp.prototype.startMongoCon = function () {
        mongoose.connect('mongodb://10.10.0.181/ecopif');
    };
    ServerApp.prototype.setRoutes = function () {
        this._App.use('/', _Index);
        this._App.use('/api', _ApiProducts);
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