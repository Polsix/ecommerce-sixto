const express = require('express');
const router = express.Router();

module.exports = (orderController) => {
  router.get('/:id', orderController.getById.bind(orderController));
  router.get('/user/:userId', orderController.getByUser.bind(orderController));
  router.post('/', orderController.create.bind(orderController));
  router.put('/:id/status', orderController.updateStatus.bind(orderController));
  router.delete('/:id', orderController.delete.bind(orderController));
  return router;
};
