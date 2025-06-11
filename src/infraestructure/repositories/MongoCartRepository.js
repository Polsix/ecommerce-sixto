const CartModel = require('../models/CartModel');
const CartRepository = require('../../../domain/repositories/CartRepository');

class MongoCartRepository extends CartRepository {
  async getByUserId(userId) {
    return await CartModel.findOne({ userId });
  }
  async addItem(userId, item) {
    return await CartModel.findOneAndUpdate(
      { userId },
      { $push: { items: item } },
      { new: true, upsert: true }
    );
  }
  async removeItem(userId, productId) {
    return await CartModel.findOneAndUpdate(
      { userId },
      { $pull: { items: { productId } } },
      { new: true }
    );
  }
  async updateItem(userId, item) {
    return await CartModel.findOneAndUpdate(
      { userId, 'items.productId': item.productId },
      { $set: { 'items.$.quantity': item.quantity } },
      { new: true }
    );
  }
  async clearCart(userId) {
    return await CartModel.findOneAndUpdate(
      { userId },
      { $set: { items: [] } },
      { new: true }
    );
  }
  async deleteCart(userId) {
    return await CartModel.findOneAndDelete({ userId });
  }
}
module.exports = MongoCartRepository;
