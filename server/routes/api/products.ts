import * as express from 'express'
var router = express.Router();

import * as prodModel from '../../common/models/productModel';

/* GET index listing. */
router.get('/products', function(req, res, next) {
    prodModel.repo.find((function(err:string, produtos:any) {
        // Em caso de erros, envia o erro na resposta
        if (err)
            res.send(err)
        // Retorna todos os produtos encontrados no BD
        res.json(produtos);
    }));
});

router.get('/products/:_podID', function(req, res, next) {
    prodModel.repo.findOne({_id : req.params._podID}, (function(err:string, produtos:any) {
        // Em caso de erros, envia o erro na resposta
        if (err)
            res.send(err)
        // Retorna todos os produtos encontrados no BD
        res.json(produtos);
    }));
});

export = router;