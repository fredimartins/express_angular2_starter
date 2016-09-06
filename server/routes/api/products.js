"use strict";
var express = require('express');
var prodModel = require('../../common/models/MProduct');
var router = express.Router();
/* GET index listing. */
router.get('/products', function (req, res, next) {
    prodModel.repo.find((function (err, produtos) {
        // Em caso de erros, envia o erro na resposta
        if (err)
            res.send(err);
        // Retorna todos os produtos encontrados no BD
        res.json(produtos);
    }));
});
router.get('/products/:_podID', function (req, res, next) {
    prodModel.repo.findOne({ _id: req.params._podID }, (function (err, produtos) {
        // Em caso de erros, envia o erro na resposta
        if (err)
            res.send(err);
        // Retorna todos os produtos encontrados no BD
        res.json(produtos);
    }));
});
module.exports = router;
//# sourceMappingURL=products.js.map