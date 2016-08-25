import * as express from 'express'
import * as path from 'path';

import * as _Site from "./routes/views/site";

export class ServerApp {

    private _App: express.Express;
    private _Router: express.Router;

    constructor() {
        this._App = express();
        this._Router = express.Router();
    }

    public setRoutes() {
        console.log('log ' + path.resolve(__dirname,'./client'));
        this._App.use('/', _Site);             
    }

    public startServer() {
        //you won't need 'connect-livereload' if you have livereload plugin for your browser 
        this._App.listen(5000, function () {
            console.log('Example app listening on port 5000!');
        });
    }
}