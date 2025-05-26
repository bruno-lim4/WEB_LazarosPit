import express from 'express';
import controller from '../controllers/product.js';

const router = express.Router();

router.get('/', controller.get);
router.get('/tag/:tag', controller.getByTag);
router.get('/id/:id', controller.getById);

router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

export default router;
