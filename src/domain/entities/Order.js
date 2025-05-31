class Order {
  constructor({ id, userId, products, total, status, paymentMethod, createdAt }) {
    this.id = id;
    this.userId = userId;
    this.products = products;
    this.total = total;
    this.status = status;
    this.paymentMethod = paymentMethod;
    this.createdAt = createdAt;
  }
}

module.exports = Order;
