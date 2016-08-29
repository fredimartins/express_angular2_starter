"use strict";
var express = require('express');
var mongoose = require('mongoose');
var _Index = require("./routes/views/index");
var _ApiProducts = require("./routes/api/products");
var ServerApp = (function () {
    function ServerApp() {
        this._App = express();
        this._Router = express.Router();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlckFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBWSxPQUFPLFdBQU0sU0FDekIsQ0FBQyxDQURpQztBQUVsQyxJQUFZLFFBQVEsV0FBTSxVQUFVLENBQUMsQ0FBQTtBQUVyQyxJQUFZLE1BQU0sV0FBTSxzQkFBc0IsQ0FBQyxDQUFBO0FBQy9DLElBQVksWUFBWSxXQUFNLHVCQUF1QixDQUFDLENBQUE7QUFFdEQ7SUFLSTtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVNLGlDQUFhLEdBQXBCO1FBQ0ksUUFBUSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTSw2QkFBUyxHQUFoQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVNLCtCQUFXLEdBQWxCO1FBQ0kscUZBQXFGO1FBQ3JGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQXpCQSxBQXlCQyxJQUFBO0FBekJZLGlCQUFTLFlBeUJyQixDQUFBIiwiZmlsZSI6InNlcnZlckFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcclxuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuaW1wb3J0ICogYXMgX0luZGV4IGZyb20gXCIuL3JvdXRlcy92aWV3cy9pbmRleFwiO1xyXG5pbXBvcnQgKiBhcyBfQXBpUHJvZHVjdHMgZnJvbSBcIi4vcm91dGVzL2FwaS9wcm9kdWN0c1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlcnZlckFwcCB7XHJcblxyXG4gICAgcHJpdmF0ZSBfQXBwOiBleHByZXNzLkV4cHJlc3M7XHJcbiAgICBwcml2YXRlIF9Sb3V0ZXI6IGV4cHJlc3MuUm91dGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX0FwcCA9IGV4cHJlc3MoKTtcclxuICAgICAgICB0aGlzLl9Sb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydE1vbmdvQ29uKCl7XHJcbiAgICAgICAgbW9uZ29vc2UuY29ubmVjdCgnbW9uZ29kYjovLzEwLjEwLjAuMTgxL2Vjb3BpZicpOyBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Um91dGVzKCkge1xyXG4gICAgICAgIHRoaXMuX0FwcC51c2UoJy8nLCBfSW5kZXgpOyAgIFxyXG4gICAgICAgIHRoaXMuX0FwcC51c2UoJy9hcGknLCBfQXBpUHJvZHVjdHMpOyAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnRTZXJ2ZXIoKSB7XHJcbiAgICAgICAgLy95b3Ugd29uJ3QgbmVlZCAnY29ubmVjdC1saXZlcmVsb2FkJyBpZiB5b3UgaGF2ZSBsaXZlcmVsb2FkIHBsdWdpbiBmb3IgeW91ciBicm93c2VyIFxyXG4gICAgICAgIHRoaXMuX0FwcC5saXN0ZW4oNTAwMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQXBwIGxpc3RlbmluZyBvbiBwb3J0IDUwMDAhJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
