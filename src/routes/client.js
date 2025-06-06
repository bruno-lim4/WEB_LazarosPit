import express from 'express';
import controller from '../controllers/client.js';

const router = express.Router();

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.post('/', controller.post);

router.post('/login', controller.postLogin);

router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

export default router;
