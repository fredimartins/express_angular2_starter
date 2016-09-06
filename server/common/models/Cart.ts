import { Product } from './IProduct';

export class ItemInCart {
    product: Product;
    qty: number = 0;
    price: number = 0;

    constructor(product: Product) {
        this.product = product;
    }
}

interface IDictionary {
    [index: string]: ItemInCart;
}

export class Cart {
    private items: IDictionary = {};
    private totalQty = 0;
    private totalPrice = 0;

    constructor() {
    }

    public add(product: Product) {
        var storedItem = this.items[product.ProductId];
        if (!storedItem) {
            storedItem = this.items[product.ProductId] = new ItemInCart(product);
        }
        storedItem.qty++;
        storedItem.price = storedItem.product.Price * storedItem.qty;
        this.totalQty++;
        this.totalPrice += storedItem.price;
    }

    public reduceByOne(id: string) {
        this.items[id].qty--;
        this.items[id].price -= this.items[id].product.Price;
        this.totalQty--;
        this.totalPrice -= this.items[id].product.Price;

        if (this.items[id].qty <= 0) {
            delete this.items[id];
        }
    }

    public removeItem(id: string) {
        this.totalQty -= this.items[id].qty;
        this.totalPrice -= this.items[id].price;
        delete this.items[id];
    }

    /*private generateArray() {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    }*/

}
