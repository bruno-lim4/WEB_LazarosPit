import express from 'express';
import controller from '../controllers/admin.js';

import onlyAdmin from "../middleware/onlyAdmin.js";
import authenticateToken from "../middleware/authenticateToken.js";

const router = express.Router();

router.get('/', controller.get);
router.get('/:id', controller.getById);

// tem q liberar se n ngm cria admin no começo
router.post('/', controller.post);

router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

export default router;
