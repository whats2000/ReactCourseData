var Product = /** @class */ (function () {
    function Product() {
        this.id = Product.productUUID++;
    }
    Product.productUUID = 0;
    return Product;
}());
var product1 = new Product();
var product2 = new Product();
console.log(product1.id); // 0
console.log(product2.id); // 1
