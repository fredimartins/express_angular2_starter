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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlckFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBWSxPQUFPLFdBQU0sU0FDekIsQ0FBQyxDQURpQztBQUVsQyxJQUFZLFFBQVEsV0FBTSxVQUFVLENBQUMsQ0FBQTtBQUVyQyxJQUFZLE1BQU0sV0FBTSxzQkFBc0IsQ0FBQyxDQUFBO0FBQy9DLElBQVksWUFBWSxXQUFNLHVCQUF1QixDQUFDLENBQUE7QUFFdEQ7SUFLSTtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEMsY0FBYztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO1lBRW5DLHVDQUF1QztZQUN2QyxHQUFHLENBQUMsU0FBUyxDQUFDLDZCQUE2QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRWxELG9DQUFvQztZQUNwQyxHQUFHLENBQUMsU0FBUyxDQUFDLDhCQUE4QixFQUFFLHdDQUF3QyxDQUFDLENBQUM7WUFFeEYsb0NBQW9DO1lBQ3BDLEdBQUcsQ0FBQyxTQUFTLENBQUMsOEJBQThCLEVBQUUsK0JBQStCLENBQUMsQ0FBQztZQUUvRSw4RUFBOEU7WUFDOUUsNkNBQTZDO1lBQzdDLEdBQUcsQ0FBQyxTQUFTLENBQUMsa0NBQWtDLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFMUQsbUNBQW1DO1lBQ25DLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0saUNBQWEsR0FBcEI7UUFDSSxRQUFRLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVNLDZCQUFTLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sK0JBQVcsR0FBbEI7UUFDSSxxRkFBcUY7UUFDckYsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxnQkFBQztBQUFELENBNUNBLEFBNENDLElBQUE7QUE1Q1ksaUJBQVMsWUE0Q3JCLENBQUEiLCJmaWxlIjoic2VydmVyQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5pbXBvcnQgKiBhcyBfSW5kZXggZnJvbSBcIi4vcm91dGVzL3ZpZXdzL2luZGV4XCI7XHJcbmltcG9ydCAqIGFzIF9BcGlQcm9kdWN0cyBmcm9tIFwiLi9yb3V0ZXMvYXBpL3Byb2R1Y3RzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VydmVyQXBwIHtcclxuXHJcbiAgICBwcml2YXRlIF9BcHA6IGV4cHJlc3MuRXhwcmVzcztcclxuICAgIHByaXZhdGUgX1JvdXRlcjogZXhwcmVzcy5Sb3V0ZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fQXBwID0gZXhwcmVzcygpO1xyXG4gICAgICAgIHRoaXMuX1JvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbiAgICAgICAgLy8gQWRkIGhlYWRlcnNcclxuICAgICAgICAgdGhpcy5fQXBwLnVzZShmdW5jdGlvbiAocmVxLCByZXMsIG5leHQpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIFdlYnNpdGUgeW91IHdpc2ggdG8gYWxsb3cgdG8gY29ubmVjdFxyXG4gICAgICAgICAgICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVxdWVzdCBtZXRob2RzIHlvdSB3aXNoIHRvIGFsbG93XHJcbiAgICAgICAgICAgIHJlcy5zZXRIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLCAnR0VULCBQT1NULCBPUFRJT05TLCBQVVQsIFBBVENILCBERUxFVEUnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlcXVlc3QgaGVhZGVycyB5b3Ugd2lzaCB0byBhbGxvd1xyXG4gICAgICAgICAgICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJywgJ1gtUmVxdWVzdGVkLVdpdGgsY29udGVudC10eXBlJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBTZXQgdG8gdHJ1ZSBpZiB5b3UgbmVlZCB0aGUgd2Vic2l0ZSB0byBpbmNsdWRlIGNvb2tpZXMgaW4gdGhlIHJlcXVlc3RzIHNlbnRcclxuICAgICAgICAgICAgLy8gdG8gdGhlIEFQSSAoZS5nLiBpbiBjYXNlIHlvdSB1c2Ugc2Vzc2lvbnMpXHJcbiAgICAgICAgICAgIHJlcy5zZXRIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzJywgJ3RydWUnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFBhc3MgdG8gbmV4dCBsYXllciBvZiBtaWRkbGV3YXJlXHJcbiAgICAgICAgICAgIG5leHQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnRNb25nb0Nvbigpe1xyXG4gICAgICAgIG1vbmdvb3NlLmNvbm5lY3QoJ21vbmdvZGI6Ly8xMC4xMC4wLjE4MS9lY29waWYnKTsgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFJvdXRlcygpIHtcclxuICAgICAgICB0aGlzLl9BcHAudXNlKCcvJywgX0luZGV4KTsgICBcclxuICAgICAgICB0aGlzLl9BcHAudXNlKCcvYXBpJywgX0FwaVByb2R1Y3RzKTsgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0U2VydmVyKCkge1xyXG4gICAgICAgIC8veW91IHdvbid0IG5lZWQgJ2Nvbm5lY3QtbGl2ZXJlbG9hZCcgaWYgeW91IGhhdmUgbGl2ZXJlbG9hZCBwbHVnaW4gZm9yIHlvdXIgYnJvd3NlciBcclxuICAgICAgICB0aGlzLl9BcHAubGlzdGVuKDUwMDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0FwcCBsaXN0ZW5pbmcgb24gcG9ydCA1MDAwIScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
