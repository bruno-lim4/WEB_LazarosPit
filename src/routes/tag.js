import express from 'express';
import controller from '../controllers/tag.js';

const router = express.Router();

router.get('/', controller.get);
router.post('/', controller.post);
router.delete('/:id', controller.delete);

export default router;
