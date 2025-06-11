const OrderModel = require('../models/OrderModel');
const OrderRepository = require('../../../domain/repositories/OrderRepository');

class MongoOrderRepository extends OrderRepository {
  async getById(id) {
    return await OrderModel.findById(id);
  }
  async getByUserId(userId) {
    return await OrderModel.find({ userId });
  }
  async create(order) {
    return await OrderModel.create(order);
  }
  async updateStatus(id, status) {
    return await OrderModel.findByIdAndUpdate(id, { status }, { new: true });
  }
  async delete(id) {
    return await OrderModel.findByIdAndDelete(id);
  }
}
module.exports = MongoOrderRepository;
