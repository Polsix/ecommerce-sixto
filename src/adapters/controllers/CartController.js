class CartController {
  constructor(cartUseCases) {
    this.cartUseCases = cartUseCases;
  }

  async getByUser(req, res) {
    const cart = await this.cartUseCases.getCartByUserId(req.params.userId);
    res.json(cart);
  }

  async addItem(req, res) {
    const updatedCart = await this.cartUseCases.addItemToCart(req.params.userId, req.body);
    res.json(updatedCart);
  }

  async removeItem(req, res) {
    const updatedCart = await this.cartUseCases.removeItemFromCart(req.params.userId, req.params.productId);
    res.json(updatedCart);
  }

  async updateItem(req, res) {
    const updatedCart = await this.cartUseCases.updateCartItem(req.params.userId, req.body);
    res.json(updatedCart);
  }

  async clearCart(req, res) {
    const clearedCart = await this.cartUseCases.clearCart(req.params.userId);
    res.json(clearedCart);
  }

  async deleteCart(req, res) {
    await this.cartUseCases.deleteCart(req.params.userId);
    res.status(204).send();
  }
}
module.exports = CartController;
