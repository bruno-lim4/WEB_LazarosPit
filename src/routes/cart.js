import express from 'express';
import controller from '../controllers/cart.js';
import authenticateToken from '../middleware/authenticateToken.js';

const router = express.Router();

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.get('/client/:clientId', controller.getByClient);
router.post('/add', authenticateToken, controller.addProduct);
router.post('/set', authenticateToken, controller.setProductQuantity);
router.post('/remove', authenticateToken, controller.removeProductFromCart);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

export default router;
