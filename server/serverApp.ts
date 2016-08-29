import * as express from 'express'
import * as path from 'path';
import * as mongoose from 'mongoose';

import * as _Index from "./routes/views/index";
import * as _ApiProducts from "./routes/api/products";

export class ServerApp {

    private _App: express.Express;
    private _Router: express.Router;

    constructor() {
        this._App = express();
        this._Router = express.Router();
    }

    public startMongoCon(){
        mongoose.connect('mongodb://10.10.0.181/ecopif'); 
    }

    public setRoutes() {
        this._App.use('/', _Index);   
        this._App.use('/api', _ApiProducts);          
    }

    public startServer() {
        //you won't need 'connect-livereload' if you have livereload plugin for your browser 
        this._App.listen(5000, function () {
            console.log('App listening on port 5000!');
        });
    }
}