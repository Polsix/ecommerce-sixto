// src/application/usecases/order/CreateOrder.js
class CreateOrder {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }
  async execute(orderData) {
    return await this.orderRepository.create(orderData);
  }
}
module.exports = CreateOrder;

// src/application/usecases/order/GetOrderById.js
class GetOrderById {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }
  async execute(id) {
    return await this.orderRepository.getById(id);
  }
}
module.exports = GetOrderById;

// src/application/usecases/order/GetOrdersByUser.js
class GetOrdersByUser {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }
  async execute(userId) {
    return await this.orderRepository.getByUserId(userId);
  }
}
module.exports = GetOrdersByUser;

// src/application/usecases/order/UpdateOrderStatus.js
class UpdateOrderStatus {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }
  async execute(id, status) {
    return await this.orderRepository.updateStatus(id, status);
  }
}
module.exports = UpdateOrderStatus;

// src/application/usecases/order/DeleteOrder.js
class DeleteOrder {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }
  async execute(id) {
    return await this.orderRepository.delete(id);
  }
}
module.exports = DeleteOrder;