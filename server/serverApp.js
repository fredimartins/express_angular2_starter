"use strict";
var express = require('express');
var _Site = require("./routes/views/site");
var ServerApp = (function () {
    function ServerApp() {
        this._App = express();
        this._Router = express.Router();
    }
    ServerApp.prototype.setRoutes = function () {
        //console.log('log ' + path.resolve(__dirname,'./client'));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlckFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBWSxPQUFPLFdBQU0sU0FDekIsQ0FBQyxDQURpQztBQUdsQyxJQUFZLEtBQUssV0FBTSxxQkFBcUIsQ0FBQyxDQUFBO0FBRTdDO0lBS0k7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFTSw2QkFBUyxHQUFoQjtRQUNJLDJEQUEyRDtRQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVNLCtCQUFXLEdBQWxCO1FBQ0kscUZBQXFGO1FBQ3JGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQXJCQSxBQXFCQyxJQUFBO0FBckJZLGlCQUFTLFlBcUJyQixDQUFBIiwiZmlsZSI6InNlcnZlckFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcclxuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcclxuXHJcbmltcG9ydCAqIGFzIF9TaXRlIGZyb20gXCIuL3JvdXRlcy92aWV3cy9zaXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VydmVyQXBwIHtcclxuXHJcbiAgICBwcml2YXRlIF9BcHA6IGV4cHJlc3MuRXhwcmVzcztcclxuICAgIHByaXZhdGUgX1JvdXRlcjogZXhwcmVzcy5Sb3V0ZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fQXBwID0gZXhwcmVzcygpO1xyXG4gICAgICAgIHRoaXMuX1JvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFJvdXRlcygpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdsb2cgJyArIHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsJy4vY2xpZW50JykpO1xyXG4gICAgICAgIHRoaXMuX0FwcC51c2UoJy8nLCBfU2l0ZSk7ICAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydFNlcnZlcigpIHtcclxuICAgICAgICAvL3lvdSB3b24ndCBuZWVkICdjb25uZWN0LWxpdmVyZWxvYWQnIGlmIHlvdSBoYXZlIGxpdmVyZWxvYWQgcGx1Z2luIGZvciB5b3VyIGJyb3dzZXIgXHJcbiAgICAgICAgdGhpcy5fQXBwLmxpc3Rlbig1MDAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFeGFtcGxlIGFwcCBsaXN0ZW5pbmcgb24gcG9ydCA1MDAwIScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
