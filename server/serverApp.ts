import * as express from 'express'
import * as path from 'path';
import * as mongoose from 'mongoose';
import * as session from 'express-session';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';

import * as _Index from "./routes/views/index";
import * as _ApiProducts from "./routes/api/products";
import * as _ApiCart from "./routes/api/cart";

export class ServerApp {

    private _App: express.Express;
    private _Router: express.Router;

    constructor() {
        this._App = express();
        this._Router = express.Router();

    }

    public configServer() {
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

        var sessionOptions = {
            key: 'teste.pif',
            secret: 'Some secret key',
            resave: true,
            saveUninitialized: true,
            cookie: {
                secure: false,
                maxAge: 600000
            }
        };

        this._App.use(cookieParser());
        this._App.use(bodyParser.json());
        this._App.use(session(sessionOptions));
        this._App.use(bodyParser.urlencoded({ extended: true }));
    }

    public startMongoCon() {
        mongoose.connect('mongodb://10.10.0.181/ecopif');
    }

    public setRoutes() {
        this._App.use('/', _Index);
        this._App.use('/api', _ApiProducts);
        this._App.use('/api', _ApiCart);
    }

    public startServer() {
        //you won't need 'connect-livereload' if you have livereload plugin for your browser
        this._App.listen(5000, function () {
            console.log('App listening on port 5000!');
        });
    }
}
