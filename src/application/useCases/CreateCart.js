// src/application/usecases/cart/AddToCart.js
class AddToCart {
  constructor(cartRepository) {
    this.cartRepository = cartRepository;
  }
  async execute(userId, item) {
    return await this.cartRepository.addItem(userId, item);
  }
}
module.exports = AddToCart;

// src/application/usecases/cart/GetCart.js
class GetCart {
  constructor(cartRepository) {
    this.cartRepository = cartRepository;
  }
  async execute(userId) {
    return await this.cartRepository.getByUserId(userId);
  }
}
module.exports = GetCart;

// src/application/usecases/cart/RemoveFromCart.js
class RemoveFromCart {
  constructor(cartRepository) {
    this.cartRepository = cartRepository;
  }
  async execute(userId, productId) {
    return await this.cartRepository.removeItem(userId, productId);
  }
}
module.exports = RemoveFromCart;

// src/application/usecases/cart/UpdateCartItem.js
class UpdateCartItem {
  constructor(cartRepository) {
    this.cartRepository = cartRepository;
  }
  async execute(userId, item) {
    return await this.cartRepository.updateItem(userId, item);
  }
}
module.exports = UpdateCartItem;

// src/application/usecases/cart/ClearCart.js
class ClearCart {
  constructor(cartRepository) {
    this.cartRepository = cartRepository;
  }
  async execute(userId) {
    return await this.cartRepository.clearCart(userId);
  }
}
module.exports = ClearCart;

// src/application/usecases/cart/DeleteCart.js
class DeleteCart {
  constructor(cartRepository) {
    this.cartRepository = cartRepository;
  }
  async execute(userId) {
    return await this.cartRepository.deleteCart(userId);
  }
}
module.exports = DeleteCart;
