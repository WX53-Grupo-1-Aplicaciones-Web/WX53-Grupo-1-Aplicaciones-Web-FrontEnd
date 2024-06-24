// eslint-disable-next-line no-unused-vars
export class Order {
  constructor(id, productId, productName, orderParameters, price) {
    this.id = id;
    this.productId = productId;
    this.productName = productName;
    this.orderParameters = orderParameters;
    this.price = price;
  }
}

export class Parameter {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}