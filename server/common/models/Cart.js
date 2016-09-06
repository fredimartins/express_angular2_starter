"use strict";
var ItemInCart = (function () {
    function ItemInCart(product) {
        this.qty = 0;
        this.price = 0;
        this.product = product;
    }
    return ItemInCart;
}());
exports.ItemInCart = ItemInCart;
var Cart = (function () {
    function Cart() {
        this.items = {};
        this.totalQty = 0;
        this.totalPrice = 0;
    }
    Cart.prototype.add = function (product) {
        var storedItem = this.items[product.ProductId];
        if (!storedItem) {
            storedItem = this.items[product.ProductId] = new ItemInCart(product);
        }
        storedItem.qty++;
        storedItem.price = storedItem.product.Price * storedItem.qty;
        this.totalQty++;
        this.totalPrice += storedItem.price;
    };
    Cart.prototype.reduceByOne = function (id) {
        this.items[id].qty--;
        this.items[id].price -= this.items[id].product.Price;
        this.totalQty--;
        this.totalPrice -= this.items[id].product.Price;
        if (this.items[id].qty <= 0) {
            delete this.items[id];
        }
    };
    Cart.prototype.removeItem = function (id) {
        this.totalQty -= this.items[id].qty;
        this.totalPrice -= this.items[id].price;
        delete this.items[id];
    };
    return Cart;
}());
exports.Cart = Cart;
//# sourceMappingURL=cart.js.map