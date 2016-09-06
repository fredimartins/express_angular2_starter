"use strict";
var express = require('express');
var path = require('path');
var router = express.Router();
router.use(express.static(path.resolve(__dirname, '../../client')));
/* GET index listing. */
router.get('/', function (req, res, next) {
    res.sendFile(path.resolve(__dirname, '../../client/index.html'));
});
module.exports = router;
//# sourceMappingURL=index.js.map