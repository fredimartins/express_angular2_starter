"use strict";
var express = require('express');
var path = require('path');
var _Site = require("./routes/views/site");
var ServerApp = (function () {
    function ServerApp() {
        this._App = express();
        this._Router = express.Router();
    }
    ServerApp.prototype.setRoutes = function () {
        console.log('log ' + path.resolve(__dirname, './client'));
        this._Router.use(express.static(path.resolve(__dirname, './client')));
        this._App.use('/', _Site);
    };
    ServerApp.prototype.startServer = function () {
        //you won't need 'connect-livereload' if you have livereload plugin for your browser 
        this._App.listen(5000, function () {
            console.log('Example app listening on port 5000!');
        });
    };
    return ServerApp;
}());
exports.ServerApp = ServerApp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlckFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBWSxPQUFPLFdBQU0sU0FDekIsQ0FBQyxDQURpQztBQUNsQyxJQUFZLElBQUksV0FBTSxNQUFNLENBQUMsQ0FBQTtBQUU3QixJQUFZLEtBQUssV0FBTSxxQkFBcUIsQ0FBQyxDQUFBO0FBRTdDO0lBS0k7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFTSw2QkFBUyxHQUFoQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTSwrQkFBVyxHQUFsQjtRQUNJLHFGQUFxRjtRQUNyRixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0F0QkEsQUFzQkMsSUFBQTtBQXRCWSxpQkFBUyxZQXNCckIsQ0FBQSIsImZpbGUiOiJzZXJ2ZXJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG5pbXBvcnQgKiBhcyBfU2l0ZSBmcm9tIFwiLi9yb3V0ZXMvdmlld3Mvc2l0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlcnZlckFwcCB7XHJcblxyXG4gICAgcHJpdmF0ZSBfQXBwOiBleHByZXNzLkV4cHJlc3M7XHJcbiAgICBwcml2YXRlIF9Sb3V0ZXI6IGV4cHJlc3MuUm91dGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX0FwcCA9IGV4cHJlc3MoKTtcclxuICAgICAgICB0aGlzLl9Sb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRSb3V0ZXMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xvZyAnICsgcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwnLi9jbGllbnQnKSk7XHJcbiAgICAgICAgdGhpcy5fUm91dGVyLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lLCcuL2NsaWVudCcpKSk7XHJcbiAgICAgICAgdGhpcy5fQXBwLnVzZSgnLycsIF9TaXRlKTsgICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0U2VydmVyKCkge1xyXG4gICAgICAgIC8veW91IHdvbid0IG5lZWQgJ2Nvbm5lY3QtbGl2ZXJlbG9hZCcgaWYgeW91IGhhdmUgbGl2ZXJlbG9hZCBwbHVnaW4gZm9yIHlvdXIgYnJvd3NlciBcclxuICAgICAgICB0aGlzLl9BcHAubGlzdGVuKDUwMDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0V4YW1wbGUgYXBwIGxpc3RlbmluZyBvbiBwb3J0IDUwMDAhJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
