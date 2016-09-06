import {ServerApp} from './serverApp'

var serverApp = new ServerApp();

serverApp.configServer();
serverApp.setRoutes();
serverApp.startServer();
serverApp.startMongoCon();