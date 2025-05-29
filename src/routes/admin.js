import express from 'express';
import controller from '../controllers/admin.js';

import onlyAdmin from "../middleware/onlyAdmin.js";
import authenticateToken from "../middleware/authenticateToken.js";

const router = express.Router();

router.get('/', authenticateToken, onlyAdmin, controller.get);
router.get('/:id',authenticateToken, onlyAdmin, controller.getById);
router.post('/', authenticateToken, onlyAdmin, controller.post);
router.put('/:id', authenticateToken, onlyAdmin, controller.put);
router.delete('/:id', authenticateToken, onlyAdmin, controller.delete);

export default router;
