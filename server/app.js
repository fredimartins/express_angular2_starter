"use strict";
var serverApp_1 = require('./serverApp');
var serverApp = new serverApp_1.ServerApp();
serverApp.setRoutes();
serverApp.startServer();
serverApp.startMongoCon();
//# sourceMappingURL=app.js.map