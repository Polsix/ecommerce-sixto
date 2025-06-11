class OrderController {
  constructor(orderUseCases) {
    this.orderUseCases = orderUseCases;
  }

  async getById(req, res) {
    const order = await this.orderUseCases.getOrderById(req.params.id);
    res.json(order);
  }

  async getByUser(req, res) {
    const orders = await this.orderUseCases.getOrdersByUserId(req.params.userId);
    res.json(orders);
  }

  async create(req, res) {
    const order = await this.orderUseCases.createOrder(req.body);
    res.status(201).json(order);
  }

  async updateStatus(req, res) {
    const order = await this.orderUseCases.updateOrderStatus(req.params.id, req.body.status);
    res.json(order);
  }

  async delete(req, res) {
    await this.orderUseCases.deleteOrder(req.params.id);
    res.status(204).send();
  }
}
module.exports = OrderController;


