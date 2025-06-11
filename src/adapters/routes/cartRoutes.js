const express = require('express');
const router = express.Router();

module.exports = (cartController) => {
  router.get('/:userId', cartController.getByUser.bind(cartController));
  router.post('/:userId/items', cartController.addItem.bind(cartController));
  router.put('/:userId/items', cartController.updateItem.bind(cartController));
  router.delete('/:userId/items/:productId', cartController.removeItem.bind(cartController));
  router.delete('/:userId/items', cartController.clearCart.bind(cartController));
  router.delete('/:userId', cartController.deleteCart.bind(cartController));
  return router;
};
