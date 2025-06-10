class OrderRepository {
  async getById(id) { throw new Error('Method not implemented'); }
  async getByUserId(userId) { throw new Error('Method not implemented'); }
  async create(order) { throw new Error('Method not implemented'); }
  async updateStatus(id, status) { throw new Error('Method not implemented'); }
  async delete(id) { throw new Error('Method not implemented'); }
}

module.exports = OrderRepository;