import * as express from 'express'
import * as path from 'path';
var router = express.Router();

router.use(express.static(path.resolve(__dirname,'../../client')));

/* GET index listing. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '../../client/index.html'));
});

export = router;