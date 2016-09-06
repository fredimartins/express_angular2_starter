import * as express from 'express'
import * as path from 'path';
import {Cart} from '../../common/models/cart';
import * as prodModel from '../../common/models/MProduct';

var router = express.Router();

router.get('/cart/add/:_podID', function (req, res, next) {
    console.log(req.session['id'] + '::' + 'add:start ---> ' + JSON.stringify(req.session));
    var productId = req.params._podID;
    var cart: Cart = (req.session['cart'] ? Object.assign(new Cart(), req.session['cart']) : new Cart());

    req.session['chamadas'] = (req.session['chamadas'] | 0) + 1;

    prodModel.repo.findOne({ ProductId: productId }, function (err, product) {
        if (err) {
            return res.redirect('/error');
        }
        cart.add(product);
        req.session['cart'] = cart;
        console.log(req.session['id'] + '::' + 'add:end ---> ' + JSON.stringify(req.session));
        res.redirect('/');
    });
});

export = router;
