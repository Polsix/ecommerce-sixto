class CartRepository {
  async getByUserId(userId) { throw new Error('Method not implemented'); }
  async addItem(userId, item) { throw new Error('Method not implemented'); }
  async removeItem(userId, productId) { throw new Error('Method not implemented'); }
  async updateItem(userId, item) { throw new Error('Method not implemented'); }
  async clearCart(userId) { throw new Error('Method not implemented'); }
  async deleteCart(userId) { throw new Error('Method not implemented'); }
}

module.exports = CartRepository;


