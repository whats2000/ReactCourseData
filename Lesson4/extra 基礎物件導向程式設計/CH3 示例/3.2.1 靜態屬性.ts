class Product {
  id: number;
  static productUUID = 0;

  constructor() {
    this.id = Product.productUUID++;
  }
}

const product1 = new Product();
const product2 = new Product();

console.log(product1.id); // 0
console.log(product2.id); // 1
