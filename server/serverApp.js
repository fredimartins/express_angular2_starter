"use strict";
var express = require('express');
var path = require('path');
var ServerApp = (function () {
    function ServerApp() {
        this._App = express();
    }
    ServerApp.prototype.setRoutes = function () {
        this._App.use(express.static('client'));
        this._App.get('/', this._RenderIndex);
    };
    ServerApp.prototype.startServer = function () {
        //you won't need 'connect-livereload' if you have livereload plugin for your browser 
        this._App.listen(5000, function () {
            console.log('Example app listening on port 5000!');
        });
    };
    ServerApp.prototype._RenderIndex = function (req, res) {
        res.sendFile(path.resolve(__dirname, 'client/index.html'));
    };
    return ServerApp;
}());
exports.ServerApp = ServerApp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlckFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBWSxPQUFPLFdBQU0sU0FDekIsQ0FBQyxDQURpQztBQUNsQyxJQUFZLElBQUksV0FBTSxNQUFNLENBQUMsQ0FBQTtBQUU3QjtJQUlJO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU0sNkJBQVMsR0FBaEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU0sK0JBQVcsR0FBbEI7UUFDSSxxRkFBcUY7UUFDckYsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxnQ0FBWSxHQUFwQixVQUFxQixHQUFvQixFQUFFLEdBQXFCO1FBQzVELEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFDTCxnQkFBQztBQUFELENBdkJBLEFBdUJDLElBQUE7QUF2QlksaUJBQVMsWUF1QnJCLENBQUEiLCJmaWxlIjoic2VydmVyQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlcnZlckFwcCB7XHJcblxyXG4gICAgcHJpdmF0ZSBfQXBwOiBleHByZXNzLkV4cHJlc3M7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fQXBwID0gZXhwcmVzcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRSb3V0ZXMoKSB7ICAgICAgICBcclxuICAgICAgICB0aGlzLl9BcHAudXNlKGV4cHJlc3Muc3RhdGljKCdjbGllbnQnKSk7XHJcbiAgICAgICAgdGhpcy5fQXBwLmdldCgnLycsIHRoaXMuX1JlbmRlckluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnRTZXJ2ZXIoKSB7XHJcbiAgICAgICAgLy95b3Ugd29uJ3QgbmVlZCAnY29ubmVjdC1saXZlcmVsb2FkJyBpZiB5b3UgaGF2ZSBsaXZlcmVsb2FkIHBsdWdpbiBmb3IgeW91ciBicm93c2VyIFxyXG4gICAgICAgIHRoaXMuX0FwcC5saXN0ZW4oNTAwMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXhhbXBsZSBhcHAgbGlzdGVuaW5nIG9uIHBvcnQgNTAwMCEnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9SZW5kZXJJbmRleChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmVzLnNlbmRGaWxlKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdjbGllbnQvaW5kZXguaHRtbCcpKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
