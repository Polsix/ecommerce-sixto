class CartDTO {
  constructor({ id, userId, items }) {
    this.id = id;
    this.userId = userId;
    this.items = items;
  }
}
module.exports = CartDTO;