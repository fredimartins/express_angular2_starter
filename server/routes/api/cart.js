"use strict";
var express = require('express');
var cart_1 = require('../../common/models/cart');
var prodModel = require('../../common/models/MProduct');
var router = express.Router();
router.get('/cart/add/:_podID', function (req, res, next) {
    console.log(req.session['id'] + '::' + 'add:start ---> ' + JSON.stringify(req.session));
    var productId = req.params._podID;
    var cart = (req.session['cart'] ? Object.assign(new cart_1.Cart(), req.session['cart']) : new cart_1.Cart());
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
module.exports = router;
//# sourceMappingURL=cart.js.map