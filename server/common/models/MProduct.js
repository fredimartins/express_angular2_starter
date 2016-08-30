"use strict";
var mongoose = require('mongoose');
;
exports.ProductSchema = new mongoose.Schema({
    ProductId: String,
    Name: String,
    Category: String,
    Description: String,
    Price: Number,
});
exports.repo = mongoose.model('Products', exports.ProductSchema);
//# sourceMappingURL=MProduct.js.map